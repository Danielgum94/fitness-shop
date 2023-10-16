import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart'
import Details from './components/Details'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Discount from './components/Discount';
import Modal from './components/Modal';
import Payment from './components/Payment';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Policy from './components/Policy';



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
          <Route path='/terms' element={<Terms/>} />
          <Route path='/policy' element = {<Policy/>} />
        </Routes>
        <Modal />
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;









