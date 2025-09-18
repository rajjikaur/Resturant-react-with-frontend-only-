import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, getTotal } = useCart();

  // calculate subtotal
  const subtotal = getTotal();

  // calculate total quantity of all items
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // discount rule: apply if totalQuantity >= 3
  const discount = totalQuantity >= 3 ? subtotal * 0.05 : 0;

  // final total
  const total = subtotal - discount;

  return (
    <div className="cart-wrapper">
      <h2 className="cart-heading">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={`/${item.image}`} alt={item.title} className="cart-item-img" />
                <div>
                  <span className="item-title">{item.title}</span>
                  <span className="item-price">₹{item.price}</span>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <p>Subtotal: ₹{subtotal}</p>
            {discount > 0 && <p>Discount (5%): -₹{discount.toFixed(0)}</p>}
            <p className="total">Total: ₹{total.toFixed(0)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
