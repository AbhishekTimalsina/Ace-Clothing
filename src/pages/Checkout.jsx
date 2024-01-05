import React from "react";
import "./Checkout.css";
import UserInfo from "../component/UserInfo";
import OrderSummary from "../component/OrderSummary";

function Checkout() {
  return (
    <div className="container checkout-container">
      <UserInfo />
      <OrderSummary />
    </div>
  );
}

export default Checkout;
