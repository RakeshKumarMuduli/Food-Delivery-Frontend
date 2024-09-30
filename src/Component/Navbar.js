import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-500">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">MyStore</div>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:bg-yellow-300  px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="/" className="hover:bg-yellow-300 px-3 py-2 rounded-md text-sm font-medium">
              Products
            </a>
            <a href="/mycart" className="hover:bg-yellow-300  px-3 py-2 rounded-md text-sm font-medium">
              Cart
            </a>
            <a href="/" className="hover:bg-yellow-300  px-3 py-2 rounded-md text-sm font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
