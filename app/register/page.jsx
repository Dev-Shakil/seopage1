import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-100">
    <div className="bg-white py-10 px-14 rounded-lg shadow-md w-full md:w-[60%]">
        <div className="flex justify-between">
      <h2 className="text-2xl font-bold mb-4">Welcome to Alzaf.com</h2>
      <Link className="text-2xl font-bold text-orange-500" href="#">Login</Link>
      </div>
      <form className="">
        <div className=" gap-x-10 flex">
        <div className="md:w-1/2 w-full space-y-4  ">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Full name</label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Phone Number or Email</label>
          <input
            type="text"
            placeholder="Phone or Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Please enter your password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        </div>
        <div className="w-1/2 space-y-4">
        <div className="flex space-x-4">
          <div className="w-2/3 space-y-2">
            <label className="block text-sm font-medium text-gray-700">Birthday</label>
            <div className="flex space-x-2">
              <select className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Month</option>
              </select>
              <select className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Day</option>
              </select>
              <select className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Year</option>
              </select>
            </div>
          </div>
          
          <div className="w-1/3 space-y-2">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Gender</option>
            </select>
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-orange-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm text-gray-600">
            I'd like to receive exclusive offers and promotions via SMS.
          </label>
        </div>

        <button className="w-full bg-orange-500 text-white p-2 rounded-md font-semibold hover:bg-orange-600">
          Sign Up
        </button>

        <div className="text-center my-4 text-gray-600">Or</div>

        <button className="w-full flex items-center justify-center p-2 border border-gray-300 rounded-md font-semibold hover:bg-gray-100">
          <img src="https://img.icons8.com/color/20/facebook-new.png" alt="Facebook" className="mr-2" />
          Sign Up with Facebook
        </button>

        <button className="w-full flex items-center justify-center p-2 border border-gray-300 rounded-md font-semibold hover:bg-gray-100 mt-2">
          <img src="https://img.icons8.com/color/20/google-logo.png" alt="Google" className="mr-2" />
          Sign Up with Google
        </button>
        </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default page