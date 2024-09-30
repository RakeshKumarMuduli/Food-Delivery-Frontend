import React from 'react';
import { Link } from 'react-router-dom'; 
import { useCart } from 'react-use-cart'

const Mycart = ({
}) => {
    const {
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
}=useCart();
  return (
    <section className="container mx-auto py-6 bg-black">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h1 className="text-white text-2xl mb-4">Shopping Cart</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2 text-white text-2xl">Product</th>
                <th className="px-4 py-2  text-white text-2xl">Price</th>
                <th className="px-4 py-2  text-white text-2xl">Quantity</th>
                <th className="px-4 py-2  text-white text-2xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="px-4 py-2">
                    <img src={item.image} alt="Loading..." className="h-16 w-fit object-contain" />
                  </td>
                  <td className="px-4 py-2  text-white">{item.name}</td>
                  <td className="px-4 py-2  text-white">₹ {item.price}</td>
                  <td className="px-4 py-2  text-white">
                    <div className="flex items-center">
                      <button
                        className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded-l"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded-r"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded mr-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-white">Total Unique Items: {totalUniqueItems}</p>
            <p className="text-white">Total Items: {totalItems}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Total Price = ₹ {cartTotal}</h2>
          </div>
        </div>
        <div className="flex justify-end mt-6 ">
          <button className="btn-primary mr-4 bg-red-700 p-1 rounded-md text-white hover:bg-red-800" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <Link to="/" className="btn-primary  h-8 p-1 rounded-md hover:bg-cyan-500 w-fit bg-cyan-600 text-white ">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mycart;
