import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../contextApi';
import { FaShekelSign } from 'react-icons/fa';




export default function Product(props) {
  const { id, title, img, price, inCart } = props.product;

  return (
    <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className="card">
          <ProductConsumer>
            {(val) => (
              <div className="img-container p-5"
               onClick={() => val.handleDetail(id)
              }>
               <Link to='/details'>
                  <img src={img} alt='product' className='card-img-top' />
                </Link>
                <button
     className="cart-btn"
      disabled={inCart ? true : false}
      onClick={() => {
        if (inCart) {
        val.deleteItem(id);
       } else {
      val.addToCart(id);
      val.openModal(id);
    }
  }}
>
  {inCart ? <p className="text-capitalize mb-0">in Cart</p> : <i className="fas fa-cart-plus" />}
</button>

          </div>
            )}
        
          </ProductConsumer>


      {/* card footer */}
      <div className='card-footer d-flex justify-content-between align-items-center'>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-2'>{price} </span>
            <FaShekelSign style={{ fontSize: '0.8rem', margin: '0.2rem' }} />
           (Vat not included)
          </h5>
          <p className='mb-0'>{title}</p>
        </div>
      </div>
    </ProductWrapper>
  );
}



const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }

  .card-img-top {
    transition: all 0.3s linear;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border: none;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
