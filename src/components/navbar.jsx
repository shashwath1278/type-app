import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./navbar.css";
import { ShopContextProvider } from "../context/shop-context";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/Products"> Shop Now </Link>
        <Link to="/Products/cart">
        <FaCartShopping size={32} />
        </Link>
      </div>
    </div>
  );
};