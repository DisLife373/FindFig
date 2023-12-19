import React from "react"
import axios from "axios";
import { useEffect,useState } from "react";
import { useDropzone } from "react-dropzone";
import DeletePopUp from "../../components/DeleteAccountPopup/DeletePopUp";
import Nav from "../../components/Nav/Nav"
import './Account.css';
import { useLocation } from "react-router-dom";
import aboutus from '../../components/Assets/aboutus.png';
import address from '../../components/Assets/address.png';
import editprofile from '../../components/Assets/editprofile.png';
import settingacc from '../../components/Assets/setting.png';
import sellicon from '../../components/Assets/sell.png';
function Account(){
    const location = useLocation();
    const [userData, setUserdata] = useState({});
    const [profileImage, setProfileImage] = useState(null);

    
    const GetUserData = () => {
      axios.post('http://localhost:5000/userData', { token: window.localStorage.getItem("token") })
          .then((response) => 
          {
            setUserdata(response.data.data);
          })  
          .catch(error => console.error(error));
  };


    
    console.log(userData);
    const onDrop = (acceptedFiles) => {
        const image = acceptedFiles[0];
        setProfileImage(image);
      };
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/*",
      });

   const logOut=()=>{
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("IsloggedIn");
        window.localStorage.removeItem("cartItems");
        window.localStorage.clear();
        window.location.href="/";
    }
  



    return(
        <div id="wrapper">
            {GetUserData()}
             <header id="header">
                <Nav topic="Account"
                back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                ></Nav>
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
            <div></div>
            <div id="mainbody">
                <div style={{padding:"30px"}} className="flex">
                    <div>
                        <img class="profileimg circle" src="https://lh3.googleusercontent.com/a/ACg8ocJYhJNncvfLqg7Y6AwgWkB2OgnHrSjdARzV6-T5jIpSHZGR=s96-c" alt=""/>
                    </div>
                    <div style={{width:"15px"}}></div>
                    <div>
                        
                        <div>
                            <h4>@{userData.username}</h4>
                            <div>{userData.email}</div>
                        </div>
                    </div>

                </div>
                <div style={{padding:"15px"}}>
                <div className="border-top11"></div>
                <div style={{height:"30px"}}></div>
                <div className="flex">
                <a href="/profile">
                    <div className="flex-1 center" onClick="location.href='/profile'">
                        <img className="icon-profile-menu" src={editprofile} alt=""/>
                        <div className="text-profile-menu">Edit profile</div>
                    </div>
                </a>
                <a href="/address">
                    <div className="flex-1 center" onClick="location.href='/address'">
                        <img className="icon-profile-menu" src={address} alt=""/>
                        <div className="text-profile-menu">Address</div>
                    </div>
                </a>
                 <a href="/delete">
                    <div class="flex-1 center" onClick="location.href='/setting'">
                        <img class="icon-profile-menu" src={settingacc} alt=""/>
                        <div class="text-profile-menu">Account setting</div>
                    </div>
                </a>
                </div>

                <div style={{height:"30px"}}></div>
                
                <div className="flex">
                   <a href="/sell"> 
                    <div className="flex-1 center" onClick="location.href='/sell'">
                        <img class="icon-profile-menu" src={sellicon}alt=""/>
                        <div class="text-profile-menu">Sell</div>
                    </div>
                    </a>
                    <a href="/aboutus">
                    <div class="flex-1 center" onClick="location.href='/aboutus'">
                        <img class="icon-profile-menu" src={aboutus} alt=""/>
                        <div class="text-profile-menu">Aboute us</div>
                    </div>    
                    </a>            
                    <a href="">       
                    <div class="flex-1 center" onClick="location.href='changepassword.php'">
                        <img class="icon-profile-menu" src="assets/change password.svg" alt=""/>
                        <div class="text-profile-menu"></div>
                    </div>     
                    </a>     
       
                </div>
                <div style={{height:"30px"}}></div>
                </div>
                <div style={{height:"40px"}}></div>
                <div className="border-top11"></div>
                <div style={{height:"20px"}}></div>
                <div style={{paddingLeft:"20px"}} >
                    <div className="font09 bold500" onclick="location.href='termsservice.php'">terms of services</div>
                    <div style={{height:"5px"}}></div>
                    <div className="font09 bold500" onclick="location.href='policy.php'">privacy policy</div>
                    <div style={{height:"5px"}}></div>
                </div>
                
                <div style={{height:"10px"}}></div>
                <button type="button" className="button-28" onclick={logOut}>
                    log out
                </button>
                <div style={{height:"50px"}}></div>
            </div>
</div>
    )


}

export default Account;