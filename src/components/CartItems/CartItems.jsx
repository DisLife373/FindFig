import React, { useContext, useEffect, useState } from "react";
import './CartItems.css';
import { ShopContext } from "../ShopContext/ShopContext";
import remove_icon from '../Assets/remove.png';
import PopupCheckout from "../../components/PopupCheckout"; 
import axios from "axios";
const CartItems = () => {
  const { getTotalCartAmount, data_products, removeFromCart } = useContext(ShopContext);
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  const [buttonPopup, setButtonPopup] = useState(false);
  const [cartItems, setCartItems] = useState(storedCartItems || {}); // Initialize with an empty object

  useEffect(() => {
    // Update the state when local storage changes
    setCartItems(storedCartItems || {});
  }, [storedCartItems]);

  function handleClick(event) {
//     event.preventDefault();
//     const newOrder = {
//         // email: input.email,
//         // customer_name: input.customer_name,
//         // customer_phone: input.customer_phone,
//         // adrress: input.adrress,
//         figure_name: input.figure_name,
//         price: input.price,
//         quantity: input.quantity
//     }
//    axios.post('http://localhost:5000/checkout',newOrder)
//    .then(response => {
//     console.log(response);
   
    
// })
// .catch(error => {

//     console.error(error);
// });
    setButtonPopup(true);
}

// const [input, setInput] = useState({
//   email: '',
//   customer_name: '',
//   customer_phone: '',
//   adrress: '',
//   figure_id: '',
//   figure_name: '',
//   price: '',
//   quantity: '',
// })
// function handleChange(event) {
//   const { name, value } = event.target;
//   setInput(prevInput => ({
//     ...prevInput,
//     [name]: value
//   }));
// }
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <h4>Items</h4>
        <h4></h4>
        <h4  style={{paddingLeft:"20px"}}>Price</h4>
        <h4 style={{paddingLeft:"10px"}}>Quantity</h4>
        <h4>Total</h4>
        <h4></h4>
      </div>

    
      {data_products && data_products.length > 0 ? (
        data_products.map((e) => {
          if (cartItems && cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.thumb} alt="" className="cart-product-icon" />
                  <p >{e.name}</p>
                  <p >{e.price} ฿</p>
                  <p><button className="cartitems-quantity" >{cartItems[e.id]}</button></p>
                  <p>{e.price * cartItems[e.id]}</p>
                  <p><img  src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" className="cart-remove"/></p>
                </div>
              </div>
            );
          }
          return null;
        })
      ) : (
        <p>No items in the cart</p>
      )}
      
      <div style={{height:"10px"}}></div>
      <div style={{height:"10px"}}></div>
    <div>

    </div>
        <div className="summary-box">
        <div className="bold500"  style={{fontSize:"20px"}}>order summary</div>
        
            <div className="box-pice">
                <p>Subtotal</p>
                <p>THB{getTotalCartAmount()}</p>
            </div>
            <div className="box-pice">
                <p>Shipping fee</p>
                <p>Free</p>
            </div>
            <div className="box-pice box-sale-1 bold500">
                    <p>Total</p>
                    <p>THB{getTotalCartAmount()}</p>
            </div>
        </div>
        <div style={{height:"15px"}}></div>

      
        <div className="boxcart">
            <a><button className="btn-cart button-28" type="button" onClick={handleClick}>check out</button></a>
        </div>

        <PopupCheckout trigger={buttonPopup} setTrigger={setButtonPopup}></PopupCheckout>
  </div>
  
  );
};

export default CartItems;