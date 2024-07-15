import React, { useState } from 'react';
import Data from '../Product-pages/data';
import { Link } from 'react-router-dom';

function TodayDeal({ handleClick }) {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2);
  };

  const addToCart = (product) => {
    handleClick(product);
    setShowPopup(true); // Show popup when item is added to cart
    setTimeout(() => setShowPopup(false), 10000); 
  };

  return (
    <div className="flex flex-col items-center mt-32">
      <div className="flex justify-center items-center text-start md:mr-80 lg:mr-[42.5rem]">
        <h2 className="font-bold text-2xl p-4 border-b-2">
          <span className="bg-black rounded-full">.</span> Today's Deal
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-fit items-center">
        {Data.todaysDeals.map((product) => (
          <div key={product.id} className="border border-gray-200 flex justify-center items-center flex-col rounded-lg overflow-hidden shadow-md p-2">
            <img src={product.img} alt={product.name} className="h-48 w-52" />
            <div className="container">
              <h1 className="text-lg font-semibold mb-2">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h1>
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-400 font-bold text-decoration-line: line-through">${product.price}</span>
                <span className="p-1 text-sm bg-red-500 text-white font-bold">{product.discount}% OFF</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${calculateDiscountedPrice(product.price, product.discount)}</span>
                <button onClick={() => addToCart(product)} className="font-bold border-2 p-1 rounded-full text-2xl hover:border-green-400">🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Popup for cart confirmation */}
      {showPopup && (
        <div className="fixed bottom-10 right-10 bg-black p-4 rounded-lg shadow-md border border-gray-300">
          <p className="text-lg text-green-600">🎊Item added to cart🎊!</p>
          <div className="flex justify-end mt-4 space-x-4">
            <button onClick={() => setShowPopup(false)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Close</button>
            <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Cart</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodayDeal;
