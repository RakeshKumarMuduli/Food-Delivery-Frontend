import React from 'react'
// import Navbar from './Component/Navbar'
import Home from './Screen/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Screen/Login'
import NewRegister from './Screen/NewRegister'
import About from './Common/About'
import Customer from './Screen/Customer'
import Contact from './Common/Contact'
import Payment from './Component/Payment'
import Mycart from './Screen/Mycart'


const App = () => {
  return (
    
    <React.Fragment>
      <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<NewRegister/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/mycart" element={<Mycart/>} />
        
        </Routes>
      </div>
      </BrowserRouter>
      </React.Fragment>
    
  );
}

export default App
