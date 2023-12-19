import Navbar from "./components/Navbar.js";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer.js";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
    
  )
};

export default Layout;