import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Customer from './Screen/Customer'

import Mycart from './Screen/Mycart'


const App = () => {
  return (
    
    <React.Fragment>
      <BrowserRouter>
      <div className='bg-white'>
        <Routes>
        
          <Route path="/" element={<Customer/>} />
          <Route path="/mycart" element={<Mycart/>} />
        
        </Routes>
      </div>
      </BrowserRouter>
      </React.Fragment>
    
  );
}

export default App
