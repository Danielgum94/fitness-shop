import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart'
import Details from './components/Details'
import Default from './components/Default'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Discount from './components/Discount';
import Modal from './components/Modal';
import Payment from './components/Payment';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Discount />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Modal />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;









