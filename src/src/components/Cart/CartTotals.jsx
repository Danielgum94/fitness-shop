import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function CartTotals({ val }) {
    const nav = useNavigate()
  const { cartSubTotal, cartTax, cartTotal, clearCart } = val;

  const payAll = () => {
    nav('/payment')     
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-2 d-flex justify-content-end">
            <Link to="/product">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
          </div>
          <div style={{marginLeft: '2.5rem',fontFamily: 'Arial', fontSize: '16px'}} className="col-12 mt-2 d-flex justify-content-end">
            <div className="cart-summary-box">
              <h5>
                <span className="text-title">Subtotal:</span>
                <strong>{cartSubTotal} NIS</strong>
              </h5>

              <h5>
                <span className="text-title">TAX:</span>
                <strong>{cartTax} NIS</strong>
              </h5>

              <h5>
                <span className="text-title">Total:</span>
                <strong style={{ color: 'gold' }}>{cartTotal} NIS</strong></h5>
                <Button variant="warning" onClick={payAll}>PAY</Button>
            </div>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
}
