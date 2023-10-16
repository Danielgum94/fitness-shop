import React from 'react';
import { ProductConsumer } from '../contextApi';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { FaShekelSign } from "react-icons/fa";

export default function Details() {
  return (
    <ProductConsumer>
      {val => {
        const {
           id,
            company,
             img, 
             info,
              price,
               title,
                inCart 
              } = val.detailProduct;
        return (
          <div className="container py-5">
            {/* Title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h2 style={{textDecoration: 'underline'}}>{title}</h2>
              </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img style={{border: '1px solid #ccc',boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                 borderRadius: '5px',padding: '2px'}} src={img} className="img-fluid" alt="product" />
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Model: {title}</h2>
                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                  made by: <span className='text-uppercase'>
                    {company}
                  </span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                  price : <span>{price} <FaShekelSign style={{ fontSize: '0.6em', verticalAlign: 'middle' }} /></span>
                    </strong>
                      </h4>
                  <p style={{textDecoration: 'underline', fontSize: 'bold'}} className='text-capitalize font-weight-bold mt-3 mb-0'>
                      info about product:
                      </p>
                      <p style={{ fontWeight: 'bold' }} className='text-muted lead'>
                      {info}
                    </p>
                    {/* buttons */}
                <div >
                  <Link to={'/product'}>
                    <ButtonContainer>
                      Back To Store
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer 
                  cart 
                  disabled={inCart ? true : false}
                  onClick={()=>{
                    val.addToCart(id);
                    val.openModal(id);

                  }}
                  >
                    {inCart ? 'in Cart' : 'add to cart'}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
