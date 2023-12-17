import React from "react";
import {useState} from "react";
import axios from "axios";
import './Login.css';
import Nav from "../../components/Nav/Nav";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  axios.defaults.withCredentials= true;
  const handleSubmit=(e)=>{
    window.localStorage.setItem("isLogedIn",true)
    e.preventDefault()
    axios.post('http://localhost:5000/login',{email,password})
    .then(response => {
      console.log(response);
      if(response.data === "Success"){
        navigate('/');
      }
      console.log(email)
  })
  .catch(error => {
      console.error(error);
  });
  }

// Example login function
const handleLogin = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/login', { email, password });
    const { token } = response.data;

    // Store the token in localStorage
    window.localStorage.setItem('authToken', token);

    // Redirect or update state to indicate a successful login
    // For example, navigate('/')
  } catch (error) {
    console.error('Login failed', error);
  }
};

  return (
    <div id='wrapper'>
      <header id="header">
        <Nav topic="Log in"
        back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
        account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
        cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
        ></Nav>
      </header>
      <div id="mainbody">
            <div className="layoutmain">
            <div style={{height:"10px"}}></div>
                <div className="bold500 font08 center flex centerY centerX">
                    <div style={{fontSize:"15px"}}>Wellcome back!</div>
                    
                </div>
                    <form onSubmit={handleSubmit}>
                    <div style={{height:"30px"}}></div>
                        <div className="flex">
                          <a href='/login'>
                            <button type="button" className="btn-menu-lopgin-l flex-1" style={{width:"100%"}}>log in</button>
                          </a>
                          <a href='/register'>
                            <button type="button" className="btn-menu-lopgin-R flex-1" style={{width:"100%"}}>sign up</button>
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