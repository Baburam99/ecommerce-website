import React from 'react'
import { Link } from 'react-router-dom'

function Seasonal() {
  return (
    <div>
    <div className="flex justify-center items-center text-start md:mr-80 lg:mr-[42.5rem] ">
      <h2 className="font-bold text-2xl p-4 border-b-2">
        <span className="bg-black rounded-full">.</span> seasonal offers      </h2>
    </div>

    <div className="border-2">
      <div className="text-end p-3 flex lg:ml-[53rem] justify-center md:ml-[35rem] ml-[15rem] ">
        <Link
          className="md:mr-4 border-2 p-1.5 font-semibold rounded-lg"
          to="/seasonal"
        >
          View All
        </Link>
      </div>
      <div className="p-1 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
          {/* product one */}
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40"
              src="/src/assets/cooler3.jpg"
              alt="Product 1"
            />
            <div>
            <span className='bg-red-500 text-white p-0.5  text-sm font-bold ml-2'>70% OFF</span>
      <h2 className="text-center font-semibold text-sm lg:text-md">CPU COOLER</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-1">$299<sub className="text-red-700 text-xs">$799</sub> </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          {/* product One */}
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40 w-48"
              src="/src/assets/MPCP_shopbybrand_oppo_27sep2022_whbjuw.png"
              alt="Product 1"
            />
            <div>
            <span className='bg-red-500 text-white p-0.5  text-sm font-bold ml-2'>60% OFF</span>
      <h2 className="text-center font-semibold text-sm lg:text-md">OPPO 8GB 258GB smartpho..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-1">$199<sub className="text-red-700 text-xs">$499</sub> </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40 w-48"
              src="/src/assets/tv4.jpg"
              alt="Product 1"
            />
            <div>
            <span className='bg-red-500 text-white p-0.5  text-sm font-bold ml-2'>70% OFF</span>
      <h2 className="text-center font-semibold text-sm lg:text-md">BesTechs smart television..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-1">399<sub className="text-red-700 text-xs">$999</sub> </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40 w-44 "
              src="/src/assets/headset4.jpg"
              alt="Product 1"
            />
            <div>
            <span className='bg-red-500 text-white p-0.5  text-sm font-bold ml-2'>50% OFF</span>
      <h2 className="text-center font-semibold text-sm lg:text-md">carzon wireless Headsets..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-1">$399<sub className="text-red-700 text-xs">$799</sub> </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Seasonal
