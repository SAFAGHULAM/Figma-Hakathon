import React from 'react';
import Header from "../../../app/components/Header";
import Footer from "../../components/Footer"

const Checkout = () => {
  return (
    <div>
    <Header/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#1D3178]">
          Billing Information
        </h2>
        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Postal Code */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Postal Code</label>
            <input
              type="text"
              placeholder="Enter your postal code"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Country</label>
            <input
              type="text"
              placeholder="Enter your country"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium">
              Payment Method
            </label>
            <select
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Checkout;
