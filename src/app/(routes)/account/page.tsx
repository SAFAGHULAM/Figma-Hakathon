'use client';
import React from 'react';
import Link from 'next/link';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from 'next/image';

function account(){
    return(
        <div>
        <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full text-center py-8 bg-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Account</h1>
        <nav className="text-sm mt-2">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Pages</span>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-pink-500 font-medium">My Account</span>
        </nav>
      </div>

      {/* Login Form */}
      <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-11/12 sm:w-96">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-gray-500 text-center mb-6">
          Please login using account detail below.
        </p>

        {/* Form Inputs */}
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="text-right mb-4">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-pink-500 transition"
            >
              Forgot your password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-6 text-gray-500">
          Don’t have an Account?{' '}
          <a href="#" className="text-pink-500 font-medium hover:underline">
            Create account
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap bg-gray-100 justify-center items-center space-x-4 md:space-x-8 lg:space-x-12 py-8">
  {[
    { src: "/images/icon1.png", alt: "Fashion Live" },
    { src: "/images/icon2.png", alt: "Hand Crafted" },
    { src: "/images/icon3.png", alt: "pic2" },
    { src: "/images/icon4.png", alt: "Sunshine" },
    { src: "/images/icon5.png", alt: "Pure" },
  ].map((icon, index) => (
    <div
      key={index}
      className="w-1/2 sm:w-1/4 md:w-1/6 p-4 opacity-70 hover:opacity-100 transition-opacity duration-300 bg-transparent"
    >
      <Image
        src={icon.src}
        alt={icon.alt}
        width={150}
        height={50}
        className="bg-transparent"
      />
    </div>
     ))}
    </div>
    <Footer/>
     </div>
    )
}

export default account