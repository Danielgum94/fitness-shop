import React, { useState } from 'react';
import './CSS/payment.css';

export default function Payment(props) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your payment logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 h-100">
      <div className="payment-box p-4 shadow rounded">
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="**** **** **** ****"
              maxLength="19"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Name on Card:</label>
            <input
              type="text"
              className="form-control"
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="***"
              maxLength="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block mt-2">Pay</button>
          </div>
        </form>
      </div>
    </div>
  );
}
