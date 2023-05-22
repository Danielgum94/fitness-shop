import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Default() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h2 className="display-3">404</h2>
          <h2>error</h2>
          <h3>page not found</h3>
          <h4>
            requested URL was{' '}
            <span className="text-danger">{location.pathname}</span> not found
          </h4>
        </div>
      </div>
    </div>
  );
}
