import React, {useState} from 'react'
import './CSS/payment.css'

export default function Payment(props) {

    const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your payment logic here
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="cardNumber">Card Number:</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="**** **** **** ****"
        maxLength="19"
      />
    </div>
    <div className="form-row">
      <label htmlFor="cardName">Name on Card:</label>
      <input
        type="text"
        id="cardName"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />
    </div>
    <div className="form-row">
      <label htmlFor="expiryDate">Expiry Date:</label>
      <input
        type="text"
        id="expiryDate"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        placeholder="MM/YY"
        maxLength="5"
      />
    </div>
    <div className="form-row">
      <label htmlFor="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        placeholder="***"
        maxLength="3"
      />
    </div>
    <div className="form-row">
      <label htmlFor="id">ID:</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </div>
    <div className="form-row">
      <button  type="submit">Pay</button>
    </div>
    <h3 style={{color: 'white'}}>Total Amount: {props.amount}</h3>
    
  </form>
  
);
};
 
