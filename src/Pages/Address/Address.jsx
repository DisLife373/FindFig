import React, { useEffect } from "react";
import { useState } from "react";
import "./Address.css";
import Nav from "../../components/Nav/Nav";
import AddAddress from "../../components/icon/AddAddress";
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
            
            <div className="flex">
            <div style={{position:"relative", paddingLeft:"40px"}}>
            <div className="nav-index">
            <a href="/">
              <div className="nav-menu-item">
                <div className="flex centerY">
                        <img className="icon-nav-index" src='https://cdn.discordapp.com/attachments/787359617280770051/1185561359820271638/16.png?ex=65900f0e&is=657d9a0e&hm=2f8e9d7eba40fd0e42fcb16e15e7f5cefa903b4d6c772842de1a23da6879e656&' alt="home" />
                    
                </div>
                <div style={{paddingLeft: "15px"}}>Home</div>
              </div>
              </a>
            <a href="/account">
              <div  className="nav-menu-item" >
                <div className="flex centerY">
                    
                        <img className="icon-nav-index" src='https://cdn.discordapp.com/attachments/787359617280770051/1185561360084516884/17.png?ex=65900f0e&is=657d9a0e&hm=2f00dae461fd86c9ca1e2b28e2afa51ec1f628cc08c73f50c84289f8ce2142f2&' alt="showcase" />
                   
                </div>
                <div style={{paddingLeft: "15px"}}>Account</div>
              </div>
              </a>
              <a href="/address">
              <div style={{backgroundColor:"#4636FC"}} className="nav-menu-item" >
                <div className="flex centerY">
                    
                        <img className="icon-nav-index" src='https://cdn.discordapp.com/attachments/787359617280770051/1186487348813373470/11.png?ex=65936d73&is=6580f873&hm=ae836c844c07618dac37804c6f271983ecf62a8255417bf8b59270af84a9c4fd&' alt="showcase" />
                   
                </div>
                <div style={{paddingLeft: "15px", color:"white"}}>Address</div>
              </div>
               </a>
                <a href="/sell">
              <div  className="nav-menu-item" >
                <div className="flex centerY">
                        <img className="icon-nav-index"  src='https://cdn.discordapp.com/attachments/787359617280770051/1185561360730435634/13.png?ex=65900f0f&is=657d9a0f&hm=458beb0055830d6ccd32bf030c9806d234de580a010118712da6dda62ce2db25&' alt="sell" />
                </div>
                <div  style={{position:"absolute", paddingLeft:"40px"}}>Sell</div>
              </div>
              </a>
            </div>
        </div>
                <div class="content-wrappper" id="mainbody-address">
                    
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
            </div>
            
            <AddAddress trigger={addPopUp} setTrigger={setAddPopUp} userData={userData}></AddAddress>
        </div>
    );
}

export default Address;