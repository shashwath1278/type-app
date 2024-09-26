import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../../product";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
console.log(cartItems);
  return (
    <div className="cart">
      <br/>
      <div>
        <h1><b>Your Cart Items</b></h1>
      </div>
      <br/>
      <div className="cart">
        
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: Rs {totalAmount} </p>
          <button onClick={() => navigate("/Products")}> Continue Shopping </button>
          <button
            onClick={() => {
               checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
            
          </button>
          
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
      <br/>
      <br/>
      <br/>
      <br/>
     
    </div>
    
  );
 
};

