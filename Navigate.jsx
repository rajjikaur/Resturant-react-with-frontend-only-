import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Navigate.css";
import { useCart } from "./CartContext";
import Dropdown from "./Dropdown";

function Navigate() {
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value) navigate(value);
  };

  return (
    <>
      <div className="navbar-container">
        <ul>
          <li><Link to="/rajjidrinkscorner">RajjiDrinksCorner</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About-Us</Link></li>
          <li><Link to="/contact">Contact-Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          {/* <li><Link to="/dropdown">Dropdown</Link></li> */}
          <li>
            <Dropdown />
          </li>
        </ul>
        <div className="cart-container" onClick={() => navigate("/cart")}>
          <span className="cart-icon">🛒</span>
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigate;
