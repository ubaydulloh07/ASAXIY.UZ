

import React, { useState } from "react";
import "./aformt.css";

function Aformt() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Buyurtma tasdiqlandi!");
  };

  return (
    <div className="checkout-container">
      <h2>Оформление заказа</h2>
      
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Ism va familiya:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Telefon raqami:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Manzil:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>To'lov usuli:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="card">Plastik karta</option>
            <option value="cash">Naqd pul</option>
          </select>
        </div>

        <button type="submit" className="checkout-button">Buyurtmani tasdiqlash</button>
      </form>
    </div>
  );
}

export default  Aformt;
