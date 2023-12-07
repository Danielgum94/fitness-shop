import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-4">
            <Link to={'/terms'}>
            <p>
              Terms & Services
            </p>
            </Link>
            <Link to={'/policy'}>
            <p>
              Privecy Policy
            </p>
            </Link>
          </div>
          <div className="col-md-4">
            <h5 className="text-bright">Footer Section 2</h5>
            <p>
              This is the second section of the footer. You can add your content here.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-bright">Footer Section 3</h5>
            <p>
              This is the third section of the footer. You can add your content here.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {currentYear} Your Company Name. All rights reserved. | Designed by SDG</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
