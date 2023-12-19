import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import './ButtonList.css';

function ButtonMenu({home,showcase,sell}){
    return(
        <div>
            <div className="nav-index">
            <a href="/">
              <div className="nav-menu-item active-nav">
                <div className="flex centerY">
                        <img className="icon-nav-index" src={home} alt="home" />
                    
                </div>
                <div style={{paddingLeft: "15px"}}>Home</div>
              </div>
              </a>
            <a href="/showcase">
              <div className="nav-menu-item" >
                <div className="flex centerY">
                    
                        <img className="icon-nav-index" src={showcase} alt="showcase" />
                   
                </div>
                <div style={{paddingLeft: "15px"}}>Showcase</div>
              </div>
               </a>
                <a href="/sell">
              <div className="nav-menu-item" >
                <div className="flex centerY">
                        <img className="icon-nav-index" src={sell} alt="sell" />
                </div>
                <div  style={{paddingLeft: "15px"}}>Sell</div>
              </div>
              </a>
            </div>
        </div>
    )

}
export default ButtonMenu;
