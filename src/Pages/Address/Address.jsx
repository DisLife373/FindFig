import React, { useEffect } from "react";
import { useState } from "react";
import "./Address.css";
import Nav from "../../components/Nav/Nav";
import AddAddress from "../../components/AddAddress";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserAdress from "../../components/Address-comp/UserAddress";

function Address() {
    const [addPopUp, setAddPopUp] = useState(false);
    const [showAddress, setShowAddress] = useState(false); 
    const [user, setUser] = useState();
    const [userData, setUserData] = useState();
    const [receiverName, setReceiverName] = useState();
    const [tel, setTel] = useState();
    const [address, setAddress] = useState();
    const navigate = useNavigate();
    

    const userEmail = window.localStorage.getItem("userEmail");


    useEffect(() => {
        axios.get('http://localhost:5000/finduser')
        .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].email === userEmail) {
                setUser(response.data[i]);
                break;
            }
        }})
        .catch((err) => console.log(err));
    }, []);

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
            if (data.UserAddresses != undefined) {
                setReceiverName(data.UserAddresses.receiverName);
                setTel(data.UserAddresses.tel);
                setAddress(data.UserAddresses.address);
            }
            
            
            setUserData(data);
        })
        
    }, []);

    return (
        <div>
            <div class="address-wrapper">
                <header id="header">
                    <Nav 
                        topic="Address"
                        back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                        account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                        cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                    ></Nav>
                </header>
                <div class="content-wrappper">
                    <div class="sidebar-content">
                        <button class="sidebtn home">
                            <img src="https://cdn.discordapp.com/attachments/787359617280770051/1185529929153138728/icon__home_.png?ex=658ff1c9&is=657d7cc9&hm=8ab85dec9fc167fdb28f2875cfdf70df02a432049a73e85e6221d8dafd9f592c&"></img>
                            home
                        </button>
                        
                        <button class="sidebtn showcase">
                            <img src="https://cdn.discordapp.com/attachments/787359617280770051/1185529928947609610/Showcase_icon_1.png?ex=658ff1c9&is=657d7cc9&hm=7f817925edcdb126f1b960b5f41f7000e255afdd49757f2be7d79af294e2efcd&"></img>
                            showcase
                        </button>
                        <button class="sidebtn sell">
                            <img src="https://cdn.discordapp.com/attachments/787359617280770051/1185529928591085629/icon__money_icon_.png?ex=658ff1c9&is=657d7cc9&hm=93e82c6f622ab7bf5da33f6f9950bf30c37bd75767e8bd29e45566d95bca225a&"></img>
                            sell
                        </button>
                    </div>
                    <div class="main-content">
                        <div class="main-header">
                            My Address
                            <button class="add-btn" onClick={async () => {
                                    navigate("/address", {state: user});
                                    setAddPopUp(true);
                                }
                            }>
                                <img src="https://cdn.discordapp.com/attachments/787359617280770051/1185630381899255951/Plus-icon.png?ex=65904f56&is=657dda56&hm=1bac260712735a13c2436dd6984a82f3b322fd79916f71d75680bf8e2cf6c1c9&"></img>
                                Add
                            </button>
                        </div>
                        <div class="line"></div>
                        
                        {/* สำหรับเอาไปทำ component */}
                        <UserAdress 
                            receiverName={receiverName} 
                            tel={tel} 
                            address={address}
                        ></UserAdress>
                        
                        
                    </div>
                    <div class="space-content">
                        
                    </div>
                </div>
            </div>
            <AddAddress trigger={addPopUp} setTrigger={setAddPopUp}></AddAddress>
        </div>
    );
}

export default Address;
