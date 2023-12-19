
import './PopupCheckout.css'
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from './ShopContext/ShopContext';
import axios from "axios";
import UserAdress from './Address-comp/UserAddress';
import AddAdress from './icon/AddAddress';
function PopupCheckout(props){

  const { getTotalCartAmount, data_products, removeFromCart } = useContext(ShopContext);
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  const [buttonPopup, setButtonPopup] = useState(false);
  const [cartItems, setCartItems] = useState(storedCartItems || {}); // Initialize with an empty object
  const [userData, setUserData] = useState();
  const [receiverName, setReceiverName] = useState();
  const [tel, setTel] = useState();
  const [address, setAddress] = useState();
  const userEmail = window.localStorage.getItem("userEmail");
  const [addPopUp, setAddPopUp] = useState(false);
  useEffect(() => {
    // Update the state when local storage changes
    setCartItems(storedCartItems || {});
  }, [storedCartItems]);   

    function handleClick(event) {
        props.setTrigger(false)
        window.localStorage.removeItem("cartItems");
        window.location.href="/ordercomplete";
    }
    function handleCancel(event) {
        props.setTrigger(false)
    }

    useEffect(() => {
      fetch("http://localhost:5000/getUserForAddress", {
          method: "POST",
          crossDomain: true,
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              
          },
          body: JSON.stringify({
              email: userEmail
          })
      })
      .then((response) => response.json())
      .then((data) => {
          console.log(data.UserAddresses);
          setReceiverName(data.UserAddresses.receiverName);
          setTel(data.UserAddresses.tel);
          setAddress(data.UserAddresses.address);            
          setUserData(data);
      })
  }, []);
    return(props.trigger)?(
        <div className="popup-check ">
            <div className="popup-check-container col-p">
                <div className="popup-check-inner col-p">
                <div className="check-header">Checkout detail</div>
                { 
                    receiverName != undefined ? 
                        <UserAdress 
                            receiverName={receiverName} 
                            tel={tel} 
                            address={address}
                        ></UserAdress> 
                    : 
                    <div className="warning-zone">
                        <button className="add-address-from-cart" onClick={() => setAddPopUp(true)}>
                            <img src="https://cdn.discordapp.com/attachments/787359617280770051/1185630381899255951/Plus-icon.png?ex=65904f56&is=657dda56&hm=1bac260712735a13c2436dd6984a82f3b322fd79916f71d75680bf8e2cf6c1c9&"></img>
                            Add Address
                        </button>
                    </div>
                }
                
                


    <div className="cartitems-check">

    
      {data_products && data_products.length > 0 ? (
        data_products.map((e) => {
          if (cartItems && cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.thumb} alt="" className="cart-product-icon-check" />
                  <p >{e.name}</p>
                  <p >{e.price} ฿</p>
                  <p><button className="cartitems-quantity" >{cartItems[e.id]}</button></p>
                  <p>{e.price * cartItems[e.id]}</p>
                 
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
        <div className="box-pice">
                <div>Subtotal</div>
                <div>THB{getTotalCartAmount()}</div>
            </div>
            <div style={{height:"15px"}}></div>
            <div className="box-pice">
                <div>Shipping fee</div>
                <div>Free</div>
            </div>
            <div style={{height:"15px"}}></div>
            <div className="box-pice box-sale-1 bold500">
                    <div>Total</div>
                    <div>THB{getTotalCartAmount()}</div>
            </div>
        </div>
        <div style={{height:"15px"}}></div>

        {/* <PopupCheckout trigger={buttonPopup} setTrigger={setButtonPopup}></PopupCheckout> */}
  </div>

                    <div className="close-popup-check">
                        <button className="close-popup-check-btn button-6-2" onClick={handleCancel}>Cancel</button>   
                        <button className="close-popup-check-btn button-5-2" onClick={handleClick}>Confirm</button>   
                    </div>
                    
                </div> 
            </div>
            <AddAdress trigger={addPopUp} setTrigger={setAddPopUp}></AddAdress>
        </div>
    ) : "";
};

export default PopupCheckout;