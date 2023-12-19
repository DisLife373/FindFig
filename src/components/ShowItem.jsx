import React, { useContext } from "react";
import './Item.css';
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext/ShopContext";

const ShowItem = (props) => {
 

  return (
    <div className="item m-1">
      <div className="card">
        <Link to={`/products/${props.id}`} className="text-decoration-none text-black">
          <img className="thumb" src={props.thumb} alt="" />
          <div className="itemName">{props.name}</div>
        </Link>
      </div>
    </div>
  );
};

export default ShowItem;
