import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { FaSketch } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { ProductConsumer } from '../contextApi';

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1rem;
    /* Adjust the font size as desired */
    text-transform: capitalize;
    margin-right: 1.5rem;
  }

  .nav-items {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .sketch-icon:hover {
    color: lightblue;
  }
`;

const CartButtonWrapper = styled.div`
  position: relative;
  margin-left: auto;
  font-size: 0.5rem;
  /* Adjust the font size as desired */
  padding: 0.15rem 0.5rem;
  /* Adjust the padding as desired */
`;

const CartCount = styled.span`
  position: absolute;
  top: 0;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
`;


const SketchIcon = styled(FaSketch)`
  &:hover {
    color: lightblue;
  }
`;

export default function NavBar() {
  return (
    <ProductConsumer>
      {(val) => {
        const { cart } = val;
        const cartCount = cart.length;

        return (
          <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5 ">
            <Link to="/" className="navbar-brand">
              <SketchIcon className="sketch-icon" style={{ marginLeft: '-0.5rem' }} />
            </Link>

            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link style={{ marginLeft: '6px' }} to="/product" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ marginLeft: '6px' }} to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ marginLeft: '6px' }} to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <CartButtonWrapper>
              <Link to="/cart">
                <div className="position-relative">
                  <ButtonContainer>
                    <span className="mr-2">
                      <i className="fas fa-shopping-cart" />
                    </span>
                    {' '}
                    cart
                  </ButtonContainer>
                  {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
                </div>
              </Link>
            </CartButtonWrapper>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="navbar-brand">
              <FaInstagram />
            </a>
            <a style={{ marginRight: '-0.5rem' }} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="navbar-brand">
              <FaFacebook />
            </a>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}
