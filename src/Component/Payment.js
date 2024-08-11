import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { useCart } from 'react-use-cart';

const Payment = ({
  
}) => {

  const {
      items,
      cartTotal,
      handlePayment,
      handleChange,
      formData,
  }=useCart();

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">Payment Information</h1>
        <form onSubmit={handlePayment} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name on Card</label>
              <input
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Total: ${cartTotal.toFixed(2)}</p>
            <button
              type="submit"
              className="btn-primary py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
        <Link to="/cart" className="text-blue-500 hover:underline">Back to Cart</Link>
      </div>
    </section>
  );
};

export default Payment;
