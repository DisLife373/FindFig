import React from "react";
import {useState} from "react";
import axios from "axios";
import './Login.css';
import EmptNav from "../../components/Nav/EmptNav";
import { useNavigate } from "react-router-dom";



function Login() {

  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post('http://localhost:5000/login-user', { email, password })
      .then((res) => {
        const data = res.data; // Use res.data instead of res.json()
        console.log(data, 'user register');
        console.log(password);
  
        if (data.status === 'ok') {
          window.localStorage.setItem("userEmail",email)
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("IsloggedIn",true)
          window.location.href="/"; 
        }
       else if(data.status === 'Invalid password'){
        alert("Invalid password");
       }
       else if(data.status === 'user not found'){
        alert("Email not found");
       }
      })
      .catch(error => {
        console.error(error);
      });
  }




  return (
    <div id='wrapper'>
      <header id="header">
        <EmptNav topic="Log in"
        back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
       
        ></EmptNav>
      </header>
      <div id="mainbody">
            <div className="layoutmain">
            <div style={{height:"10px"}}></div>
                <div className="bold500 font08 center flex centerY centerX">
                    <div style={{fontSize:"15px"}}>Welcome back!</div>
                    
                </div>
                    <form onSubmit={handleSubmit}>
                    <div style={{height:"30px"}}></div>
                        <div className="flex">
                          <a href='/login'>
                            <button type="button" className="btn-menu-lopgin-l flex-1" style={{width:"100%"}}>log in</button>
                          </a>
                          <a href='/register'>
                            <button type="button" className="btn-menu-lopgin-R flex-1" style={{width:"100%"}}>register</button>
                          </a>
                            
                        </div>
                        <div style={{height:"30px"}}></div>
                        <div className="box-input-address">
                            <input className="input-login" type="text" placeholder="email" name="email" id="email" required="" onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="box-input-address">
                            <input className="input-login" type="password" placeholder="password" name="pws" id="password" required="" onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div style={{height:"10px"}}></div>
                        <div className="flex">
                            <div className="flex-2" style={{flexGrow:"2"}}></div>
                            <a className="a-login" style={{width:"150px"}} href="forget_password.php">Forgot password ?</a>
                        </div>
                        <div style={{height:"20px"}}></div>
                        <button className="button-28" type="submit" name="submit" value="เข้าสู่ระบบ">log in</button>
                    
                    </form>
                </div>
                <div style={{height:"50px"}}></div>
            </div>
        </div>
  );
};

export default Login;