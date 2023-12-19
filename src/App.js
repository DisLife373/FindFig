import { useState } from "react";
import Home from "./Pages/Home/Home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Products/Products";
import SellPage from "./Pages/Sell/Sell";
import OrderComplete from "./Pages/OrderComplete/OrderComplete";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Address from "./Pages/Address/Address";
import Showcase from "./Pages/Showcase/Showcase";
import Profile from "./Pages/Profile/Profile";
import Checkout from "./Pages/Checkout/Checkout";
import Layout from './Layout';
import Account from "./Pages/Account/Account";
import DelPage from "./Pages/DeletePage/Deletepage";

function App() {
  const IsLoggedIn = window.localStorage.getItem("IsloggedIn")
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}/>
          <Route index element={<Home />}/>
          <Route path="/products/:productID" element={<Product />} />
          <Route path="/Sell" element={<SellPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/ordercomplete" element={<OrderComplete />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/showcase" element={<Showcase/>}/>
          <Route path="/profile" element={IsLoggedIn=="true"?<Profile/>:<Login/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/delete" element={<DelPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;