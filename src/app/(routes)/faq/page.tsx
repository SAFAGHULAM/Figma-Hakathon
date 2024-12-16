'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function FAQ() {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] py-16">
        <div className="max-w-6xl mx-auto px-4">
       <h1 className="text-4xl font-bold text-[#1D3178] mb-2">FAQ</h1>
      <nav className="text-sm text-gray-600">
      <span>Home</span> <span className="mx-1">·</span>
      <span>Pages</span> <span className="mx-1">·</span>
        <span className="text-[#FB2E86]">Faq</span>
       </nav>
       </div>
     </div>
      {/* Main Container */}
      <div className="min-h-screen bg-[#f9f9f9] py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div>
            <h1 className="text-3xl font-bold text-[#1D3178] mb-6">General Information</h1>

            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="font-semibold text-[#1D3178]">
                  Eu dictumst cum et sed euismod condimentum?
                </h2>
                <p className="mt-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-[#1D3178]">
                  Magna bibendum est fermentum eros.
                </h2>
                <p className="mt-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-[#1D3178]">
                  Odio muskana hak eris consectetur sceleros?
                </h2>
                <p className="mt-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-[#1D3178]">
                  Elit id blandit sabora bai velit qua maro?
                </h2>
                <p className="mt-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 shadow-md rounded-lg max-w-md mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold text-[#1D3178] mb-6">Ask a Question</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Type Your Message*
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type Your Message"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FB2E86] text-white py-3 rounded-md font-semibold hover:bg-[#e02475] transition duration-300"
              >
                Send Mail
              </button>
            </form>
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
      <Footer />
    </>
  );
}
