import React from "react"
import axios from "axios";
import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import DeletePopUp from "../../components/DeleteAccountPopUp/DeletePopUp";
import './Profile.css';

export default function Profile() {
    const [deletePopUp, setDeletePopUp] = useState(false);


    const [userData, setUserdata] = useState({});

    const GetUserData = () => {
        axios.post('http://localhost:5000/userData', { token: window.localStorage.getItem("token") })
            .then((response) => 
            {
              setUserdata(response.data.data);
              console.log(response.data.data);
            })  
            .catch(error => console.error(error));
    };


   const logOut=()=>{
        window.localStorage.clear();
        window.location.href="/";
    }
    return (
        <div className="wrapper">
            { GetUserData }
             <header>
                <Nav topic="Account" 
                  back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                  account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                  cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                  >
                </Nav>
            </header>      
            <main id="main-profile">
                <div className="row page-wrapper">
                    <div id="content" className="large-12 col" role="main">
                        <div className="entry-content">
                            
                            <div className="user-profile-info">
                                <h3 className="header-text">Edit Profile</h3>
                                
                                <form className="profile-container">
                                    <div className="picture-container">
                                        <img  className="myprofile" src="https://cdn.discordapp.com/attachments/787359617280770051/1185561360084516884/17.png?ex=65900f0e&is=657d9a0e&hm=2f00dae461fd86c9ca1e2b28e2afa51ec1f628cc08c73f50c84289f8ce2142f2" alt="My Profile" />
                                    </div>
                                    <h4 className="username">{userData.username}</h4>
                                    <div className="profile-field">
                                        <div className="input-box">
                                            <p>Email<span className="frm_required">*</span></p>
                                            <input 
                                                className="input-info"
                                                name="email" 
                                                value={userData.email} 
                                                type="email" 
                                                disabled
                                            ></input>
                                        </div>
                                        <div className="input-box">
                                            <p>Current password<span className="frm_required">*</span></p>
                                            <input 
                                                className="input-info" 
                                                name="password" 
                                                type="password" 
                                                placeholder="current password" 
                                            ></input>
                                        </div>
                                        <div className="input-box">
                                            <p>New Password<span className="frm_required">*</span></p>
                                            <input  
                                                className="input-info" 
                                                name="password" 
                                                type="password" 
                                                placeholder="new password" 
                                            ></input>
                                        </div>
                                        <div className="input-box">
                                            <p>Confirm password<span className="frm_required">*</span></p>
                                            <input 
                                                className="input-info" 
                                                name="password" 
                                                type="password" 
                                                placeholder="confirm password" 
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="button-container">
                                        <div className="button-field">
                                            <button 
                                                className="submit-btn" 
                                                type="submit" 
                                                onClick={logOut} 
                                            >log out</button>
                                            <button 
                                                className="delete-account-btn" 
                                                type="button" 
                                                onClick={() => setDeletePopUp(true)} 
                                            >delete account</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <DeletePopUp trigger={deletePopUp} setTrigger= {setDeletePopUp}></DeletePopUp>
        </div>

    )
}
