'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function OrderCompleted() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
        {/* Main Container */}
        <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-md p-6 sm:p-8 text-center space-y-6">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-[#1D3178]">Your Order Is Completed!</h1>

          {/* Tick Mark Image */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-[#EDEFFB] rounded-full flex items-center justify-center">
              <Image
                src="/images/tick1.png" // Path to your tick image
                alt="Order Completed Icon"
                width={76}
                height={76}
                className="object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
            You will receive an email confirmation when your order is completed.
          </p>

          {/* Continue Shopping Button */}
          <Link href="/shoplist">
            <button className="bg-[#FB2E86] hover:bg-[#e82a7e] text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300">
              Continue Shopping
            </button>
          </Link>

          {/* Clock Icon Positioned on Left */}
          <div className="absolute top-[7%] -translate-y-1/2 left-[1%] -ml-12 hidden sm:block">
            <Image
              src="/images/clock1.png" // Path to your clock image
              alt="Clock Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Bottom Checklist Icon */}
          <div className="absolute bottom-0 right-0 -mr-10 -mb-8 hidden sm:block">
            <Image
              src="/images/note.png" // Path to your checklist icon
              alt="Checklist Icon"
              width={80}
              height={80}
              className="object-contain"
            />
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

export default OrderCompleted;
