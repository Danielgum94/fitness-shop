import React, { useState, useEffect } from 'react';

export default function Discount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
      if (submitted) {
        alert('קוד קופון נשלח למייל');
      }
    }, [submitted]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Validate name and email
      if (!name || !email) {
        setError('יש להקיש שם ואימייל.');
        return;
      }
  
      alert ('thanks' + name)
      setName('');
      setEmail('');
      setError('');
      setSubmitted(true);
    };
  
    return (
      <div  className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div  className="col-md-6">
            <form style={{ backgroundColor: '#e9ecef', padding: '20px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }} onSubmit={handleSubmit} className="p-4 border rounded">
              <h1 className="text-center mb-4">Welcome To FitnessShop</h1>
              <div className="text-center mb-4">
                <p>מלא פרטים כדי לקבל הנחה של 10% בהזמנה ראשונה</p>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="text-center">
              <button className="btn btn-primary mt-3" type="submit">
              Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  