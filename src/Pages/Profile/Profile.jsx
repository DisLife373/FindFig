import React from "react"
import axios from "axios";
import { useEffect,useState } from "react";
import { useDropzone } from "react-dropzone";
import DeletePopUp from "../../components/DeleteAccountPopup/DeletePopUp";
import Nav from "../../components/Nav/Nav"
import './Profile.css';
import { useLocation } from "react-router-dom";


export default function Profile() {

    const [email_new, setEmail_new]  = useState();
    const [pass_old, setPass_old]  = useState();
    const [pass_new, setPass_new]  = useState();
    const [pass_confirm, setPass_confirm]  = useState();

    const [userData, setUserdata] = useState({});

    const GetUserData = () => {
        axios.post('http://localhost:5000/userData', { token: window.localStorage.getItem("token") })
            .then((response) => 
            {
                setUserdata(response.data.data)
            })  
            .catch(error => console.error(error));
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (pass_new == pass_confirm) {
            axios.post('http://localhost:5000/updateUser', { 
                email: userData.email,
                password: pass_new
             })
            .then((response) => {
                console.log(response.data);
                setUserdata(response.data.data)
            })  
            .catch(error => console.error(error));
        }
        else {
            console.log("error")
        }
        window.location.reload();
    }

  
    return (
        <div className="wrapper">
          {GetUserData()}
             <header>
                <Nav topic="Account" 
                  back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                  account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                  cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                  >
                </Nav>
            </header>      
            <div style={{position:"absolute", paddingLeft:"40px"}}>
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
              <div style={{backgroundColor:"#4636FC"}} className="nav-menu-item" >
                <div className="flex centerY">
                    
                        <img className="icon-nav-index" src='https://cdn.discordapp.com/attachments/787359617280770051/1185561360478769152/18.png?ex=65900f0f&is=657d9a0f&hm=081fe2d215864768706f0dcef8052773f064141300a0949e414ca292fa8d197c&' alt="showcase" />
                   
                </div>
                <div style={{paddingLeft: "15px", color:"white"}}>Account</div>
              </div>
              </a>
              <a href="/address">
              <div  className="nav-menu-item" >
                <div className="flex centerY">
                    
                        <img className="icon-nav-index" src='https://cdn.discordapp.com/attachments/787359617280770051/1186487348502999060/10.png?ex=65936d73&is=6580f873&hm=2522e0093e35d83c84d6b55e8b80590979c5de202685fb1ff1511592a14ae1fd&' alt="showcase" />
                   
                </div>
                <div style={{paddingLeft: "15px"}}>Address</div>
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
            <div>
            <main id="main-profile">
                <div className="row page-wrapper">
                    <div id="content" className="large-12 col" role="main">
                        <div className="entry-content">
                            
                            <div className="user-info  col">
                                <h3 className="text-center header-style">Chang password</h3>
                                
                                <form onSubmit={(e) => HandleSubmit(e)} className="seller-input">
                                <div className="myprofile-container">
       
                  </div>
                                    <h4 className="text-center header-style">@{userData.username}</h4>
                                    <div className="large-box">
                                    
                                        <div className="input-box large">
                                            <p>Email<span className="frm_required">*</span></p>
                                            <input  className="input-address" name="email" value={userData.email} type="email" disabled ></input>
                                        </div>
                                        <div className="input-box large">
                                            <p>Current password<span className="frm_required">*</span></p>
                                            <input className="input-address" name="password" type="password" placeholder="current password"  onChange={(e)=> setPass_old(e.target.value)}></input>
                                        </div><div className="input-box large">
                                            <p>new password<span className="frm_required">*</span></p>
                                            <input className="input-address" name="password" type="password" placeholder="new password"  onChange={(e)=> setPass_new(e.target.value)}></input>
                                        </div>
                                            <div className="input-box large">
                                            <p>Confirm password<span className="frm_required">*</span></p>
                                            <input className="input-address" name="password" type="password" placeholder="confirm password"  onChange={(e)=> setPass_confirm(e.target.value)}></input>
                                        </div>
                                        </div>
                                    
                                      
                                   
                                        <div className="submit-form">
                                            <div className="btn-add-form">
                                                    <button  className="button-28" id="submit-sell" type="submit"  role="button" >Save</button>
                                                    
                                            </div>
                                        </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
          
        </div>
        </div>
    )
}
