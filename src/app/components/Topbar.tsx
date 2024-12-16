'use client';
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';

const Dropdown = ({ isOpen, items }:any) => (
  isOpen && (
    <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-50">
      {items.map((item: any, index:any) => (
        <div key={index} className="hover:bg-gray-200 px-4 py-1 cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  )
);

const Selector = ({ label, options, isOpen, setOpen }:any) => (
  <div
    className="relative cursor-pointer flex items-center gap-1"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
  >
    <span>{label}</span>
    <span className="text-xs">▼</span>
    <Dropdown isOpen={isOpen} items={options} />
  </div>
);

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-sm">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4 whitespace-nowrap">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <a href="mailto:mhhasanul@gmail.com" className="flex items-center gap-2 hover:text-gray-200">
            <FaEnvelope />
            <span>mhhasanul@gmail.com</span>
          </a>
          <a href="tel:1234567890" className="flex items-center gap-2 hover:text-gray-200">
            <FaPhoneAlt />
            <span>(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <Selector
            label="English"
            options={["English", "Spanish", "French", "German"]}
            isOpen={languageDropdown}
            setOpen={setLanguageDropdown}
          />

          {/* Currency Selector */}
          <Selector
            label="USD"
            options={["USD", "EUR", "GBP"]}
            isOpen={currencyDropdown}
            setOpen={setCurrencyDropdown}
          />

          {/* Login */}
          <li className="flex items-center gap-2 hover:text-gray-200">
            <Link href="/account">
              <FaUser />
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
