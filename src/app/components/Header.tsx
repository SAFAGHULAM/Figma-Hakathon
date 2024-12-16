'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import TopBar from './Topbar';

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-6">
          {/* Left Section: Logo and Search */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <h1 className="text-3xl font-bold text-[#0D0E43]">Hekto</h1>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Section: Navigation Links */}
          <ul className="hidden sm:flex items-center gap-x-8">
            <li>
              <Link className="hover:text-[#FB2E86] transition-colors" href="/">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                className="hover:text-[#FB2E86] transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Pages
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md text-black text-sm z-50 w-40">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/checkout">Billing Details</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/ordercompleted">Order Completed</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/account">My Account</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/creatorpage">About Creator</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link className="hover:text-[#FB2E86] transition-colors" href="/product">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#FB2E86] transition-colors" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#FB2E86] transition-colors" href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#FB2E86] transition-colors" href="/contact-us">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Section: Icons */}
          <div className="hidden sm:flex items-center gap-x-6">
            <Link
              href="/cart"
              className="hover:text-[#FB2E86] transition-colors flex items-center gap-1"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link
              href="/wishlist"
              className="hover:text-[#FB2E86] transition-colors flex items-center gap-1"
            >
              <HeartIcon className="w-5 h-5" />
              <span>Wishlist</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden flex items-center"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <XMarkIcon className="w-6 h-6 text-black" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="sm:hidden flex flex-col px-4 py-4 bg-white border-t">
          {/* Navigation Links */}
          <ul className="text-center">
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/shoplist">
                Products
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/contact-us">
                Contact
              </Link>
            </li>
          </ul>

          {/* Dropdown: Pages */}
          <div className="text-center">
            <button
              className="block py-2 hover:text-[#FB2E86]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Pages
            </button>
            {isDropdownOpen && (
              <ul className="bg-gray-100 rounded-md shadow-md text-sm">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/cart">Cart</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/checkout">Billing Details</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/ordercompleted">Order Completed</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/account">My Account</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/creatorpage">About Creator</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Mobile Cart and Wishlist */}
          <div className="flex justify-center gap-x-6 py-4 border-t">
            <Link href="/cart" className="flex items-center gap-1 hover:text-[#FB2E86]">
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link href="/wishlist" className="flex items-center gap-1 hover:text-[#FB2E86]">
              <HeartIcon className="w-5 h-5" />
              <span>Wishlist</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
