import React from "react";
import "./UserInfo.css";

function UserInfo() {
  return (
    <div className="user-info_container">
      <ContactInformation />
      <ShippingAddress />
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="contact-info_container">
      <h3>Contact Information</h3>
      <input type="email" placeholder="Email" />
    </div>
  );
}

function ShippingAddress() {
  return (
    <div className="shipping-address_container">
      <h3>Shipping Address</h3>
      <div className="shipping-address_wrapper">
        <input type="name" placeholder="First name" id="firstname" />
        <input type="name" placeholder="Last name" id="lastname" />
        <input type="name" placeholder="Address" id="address" />
        <input type="name" placeholder="City" id="city" />
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default UserInfo;
