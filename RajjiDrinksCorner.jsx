import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import "./RajjiDrinksCorner.css";

function RajjiDrinksCorner() {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    fetch("/user.json")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to load menu:", err));
  }, []);

  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      addToCart(item);
    } else {
      removeFromCart(item.id);
    }
  };

  // Filter items based on search
  const filteredItems = menuItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-wrapper">
      {/* Heading with Search */}
      <div className="menu-header">
        <input
          type="text"
          placeholder="Search items..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h2 className="menu-heading">Rajji's Drinks & Snacks Menu</h2>
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={`./${item.image}`} alt={item.title} />
              <div className="menu-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="menu-price">₹{item.price}</span>
                <div style={{ marginTop: "10px" }}>
                  <input
                    type="checkbox"
                    checked={cartItems.some((cart) => cart.id === item.id)}
                    onChange={(e) =>
                      handleCheckboxChange(item, e.target.checked)
                    }
                  />{" "}
                  Add to Cart
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No items found.</p>
        )}
      </div>
    </div>
  );
}

export default RajjiDrinksCorner;
