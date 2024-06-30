import React from 'react'
import { Link } from 'react-router-dom'

function Top() {
  return (
    <div>
    <div className="flex justify-center items-center text-start md:mr-80 lg:mr-[42.5rem] ">
      <h2 className="font-bold text-2xl p-4 border-b-2">
        <span className="bg-black rounded-full">.</span> Top seller
      </h2>
    </div>

    <div className="border-2">
      <div className="text-end p-3 flex lg:ml-[50rem] justify-center md:ml-[29rem] ml-[15rem]">
        <Link
          className="md:mr-4 border-2 p-1.5 font-semibold rounded-lg"
          to="/today"
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
              src="/src/assets/3020_inspiron_111.jpg"
              alt="Product 1"
            />
            <div>
           <div className='flex justify-between px-2 items-center'>
           <span className='bg-red-500 text-white p-0.5  text-sm font-bold'>4.5</span>  <span className='font-bold text-xs'>30k ratings</span>
           </div>
            <h2 className="text-center font-semibold text-sm lg:text-md mt-1 mb-2">Dell 3020 inspiron 8G..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-2">$799 </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          {/* product One */}
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40"
              src="/src/assets/3020_inspiron_111.jpg"
              alt="Product 1"
            />
            <div>
            <div className='flex justify-between px-2 items-center'>
           <span className='bg-red-500 text-white p-0.5  text-sm font-bold'>4.7</span>  <span className='font-bold text-xs'>70k ratings</span>
           </div>
            <h2 className="text-center font-semibold text-sm lg:text-md mt-1 mb-2">Dell 3020 inspiron 8G..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg md:ml-2">$799</span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40"
              src="/src/assets/3020_inspiron_111.jpg"
              alt="Product 1"
            />
            <div>
            <div className='flex justify-between px-2 items-center'>
           <span className='bg-red-500 text-white p-0.5  text-sm font-bold'>4.5</span>  <span className='font-bold text-xs'>40k ratings</span>
           </div>
            <h2 className="text-center font-semibold text-sm lg:text-md mt-1 mb-2">Dell 3020 inspiron 8G..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg md:ml-2">$999</span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40"
              src="/src/assets/3020_inspiron_111.jpg"
              alt="Product 1"
            />
            <div>
            <div className='flex justify-between px-2 items-center'>
           <span className='bg-red-500 text-white p-0.5  text-sm font-bold'>4.9</span>  <span className='font-bold text-xs'>190k ratings</span>
           </div>
            <h2 className="text-center font-semibold text-sm lg:text-md mt-1 mb-2">Dell 3020 inspiron 8G..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg md:ml-2">$1330</span>
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

export default Top
