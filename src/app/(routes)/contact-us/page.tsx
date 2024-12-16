'use client';

import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function ContactUs() {
  return (
    <>
      <Header />
      <div className="w-full bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-200 to-gray-100 py-8">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#101750] mb-2">Contact Us</h1>
            <p className="text-sm text-gray-700">
              Home <span className="text-gray-700">/</span> Pages <span className="text-gray-700">/</span>{" "}
              <span className="text-[#FB2E86] font-semibold">Contact Us</span>
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-[1200px] mx-auto px-4 py-12 flex flex-wrap gap-12">
          {/* Left Section */}
          <div className="flex-1">
            {/* Information About Us */}
            <h2 className="text-3xl font-bold text-[#151875] mb-4">Information About Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
              aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
              lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex gap-3 mb-8">
              <span className="w-4 h-4 rounded-full bg-[#5625DF]"></span>
              <span className="w-4 h-4 rounded-full bg-[#FF27B7]"></span>
              <span className="w-4 h-4 rounded-full bg-[#37DAF3]"></span>
            </div>

            {/* Get in Touch */}
            <h2 className="text-3xl font-bold text-[#151875] mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique
              amet erat vitae eget dolor lobortis quis bibendum quam.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none text-sm focus:ring-2 focus:ring-[#FB2E86] transition-all"
              />
              <input
                type="email"
                placeholder="Your E-mail*"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none text-sm focus:ring-2 focus:ring-[#FB2E86] transition-all"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none text-sm focus:ring-2 focus:ring-[#FB2E86] transition-all"
              />
              <textarea
                placeholder="Type your message*"
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-4 outline-none text-sm focus:ring-2 focus:ring-[#FB2E86] transition-all"
              ></textarea>
              <button className="bg-[#FB2E86] text-white py-3 px-8 rounded-lg shadow-md hover:scale-105 transition-transform hover:bg-[#F94C9B] duration-300">
                Send Mail
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            {/* Contact Way */}
            <h2 className="text-3xl font-bold text-[#151875] mb-8">Contact Way</h2>

            <div className="space-y-8">
              <div className="flex items-center gap-6 hover:translate-x-2 transition-transform">
                <span className="w-4 h-4 rounded-full bg-[#5726DF]"></span>
                <div className="text-gray-600">
                  <p className="font-semibold">Tel: 877-67-88-99</p>
                  <p>E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 hover:translate-x-2 transition-transform">
                <span className="w-4 h-4 rounded-full bg-[#FB2E86]"></span>
                <div className="text-gray-600">
                  <p className="font-semibold">Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
              <div className="flex items-center gap-6 hover:translate-x-2 transition-transform">
                <span className="w-4 h-4 rounded-full bg-[#FFB265]"></span>
                <div className="text-gray-600">
                  <p className="font-semibold">20 Margaret st, London</p>
                  <p>Great Britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="flex items-center gap-6 hover:translate-x-2 transition-transform">
                <span className="w-4 h-4 rounded-full bg-[#1BE982]"></span>
                <div className="text-gray-600">
                  <p className="font-semibold">Free standard shipping</p>
                  <p>on all orders</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-12">
              <Image
                src="/images/contact.png"
                alt="Connect"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
