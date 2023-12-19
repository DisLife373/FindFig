import React, { useContext } from "react";
import './Item.css';
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext/ShopContext";
import UserAdress from "./Address-comp/UserAddress";
import AddAdress from "./icon/AddAddress";


const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(props.id);
  };

  return (
    <div className="item m-1">
      <div className="card">
        <Link to={`/products/${props.id}`} className="text-decoration-none text-black">
          <img className="thumb" src={props.thumb} alt="" />
          <div className="itemName">{props.name}</div>
          <div style={{ textAlign: "center", fontSize: "20px" }} className="item-price col-2 bold300">
            {props.price} ฿
          </div>
        </Link>

        <button className="button-57 btn-primary" onClick={handleAddToCart} role="button">
          <span className="text">Add to cart</span>
          <span>
            <img
              style={{ width: "30px" }}
              src="https://cdn.discordapp.com/attachments/787359617280770051/1185583122356654090/3.png?ex=65902353&is=657dae53&hm=e15f7a9def665deeabe26e323753b0f21678d340e4eb7e37c25cd718b3c57d39&"
              alt="Cart Icon"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Item;
