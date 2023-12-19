import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);
const getDefaultCart = (data_products) => {
  let cart = [];
  data_products.forEach((item) => {
    // Check if item.id is not null before assigning to cart
    if (item.id !== null) {
      cart[item.id] = 0;
    }
  });
  return cart;
};


const ShopContextProvider = (props) => {
  const [data_products, setDataProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart(data_products));

  useEffect(() => {
    axios
      .get('http://localhost:5000/getdata')
      .then((response) => {
        setDataProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    } else {
      // Initialize cartItems with default values if storedCartItems is null
      setCartItems(getDefaultCart(data_products));
    }
  }, [data_products]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedQuantity = Math.max(prev[itemId] - 1, 0); // Ensure quantity doesn't go below 0
      return { ...prev, [itemId]: updatedQuantity };
    });
  };
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    // console.log('data_products', data_products);
  
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = data_products.find((product) => product.id === String(itemId));

  
        // console.log('itemId', itemId);
        // console.log('itemInfo', itemInfo);
  
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
          // console.log('item info . price', itemInfo.price);
          // console.log('item info', itemInfo);
        }
      }
  
      // console.log('total amount', totalAmount);
    }
  
    return totalAmount;
  };
  
  
  
  
  const contextValue = { getTotalCartAmount,data_products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
