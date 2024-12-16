'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type ProductType = {
  id: number;
  name: string;
  price: number;
  qty: number;
  color: string;
  size: string;
  imageUrl: string;
};

const initialProducts: ProductType[] = [
  { id: 1, name: 'Ut diam', price: 30, qty: 2, color: 'Red', size: 'M', imageUrl: '/images/cart1.png' },
  { id: 2, name: 'faucibus posuere', price: 45, qty: 1, color: 'Blue', size: 'L', imageUrl: '/images/cart2.png' },
  { id: 3, name: 'Ac vitae vestibulum', price: 60, qty: 1, color: 'Green', size: 'S', imageUrl: '/images/cart3.png' },
  { id: 4, name: 'Elit massa dia', price: 50, qty: 2, color: 'Yellow', size: 'M', imageUrl: '/images/cart4.png' },
  { id: 5, name: 'Proin pharetra', price: 35, qty: 3, color: 'Black', size: 'L', imageUrl: '/images/cart5.png' },
];

const CartPage = () => {
  const [products, setProducts] = useState<ProductType[]>(initialProducts);

  const handleQuantityChange = (id: number, newQty: number) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? { ...product, qty: newQty > 0 ? newQty : 1 } : product))
    );
  };

  const getTotalPrice = () => products.reduce((sum, product) => sum + product.price * product.qty, 0);

  const clearAllProducts = () => setProducts([]);

  const resetCart = () => {
    setProducts(initialProducts);
  };

  return (
    <>
      <Header />
      <div className="p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-[#1D3178]">Your Cart</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md gap-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1D3178]">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      Color: {product.color}, Size: {product.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-6">
                  <p className="text-[#1D3178] text-sm sm:text-base">${product.price.toFixed(2)}</p>
                  <input
                    type="number"
                    value={product.qty}
                    onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                    className="w-12 px-2 py-1 border rounded-md text-center"
                    min="1"
                  />
                  <p className="font-bold text-[#1D3178] text-sm sm:text-base">
                    ${(product.price * product.qty).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <button
              onClick={resetCart}
              className="w-full sm:w-auto px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
            >
              Update Cart
            </button>
            <button
              onClick={clearAllProducts}
              className="w-full sm:w-auto px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals and Calculate Shipping */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Cart Totals</h2>
          <p className="flex justify-between text-[#1D3178]">
            <span>Subtotal:</span> <span>${getTotalPrice().toFixed(2)}</span>
          </p>
          <p className="flex justify-between mb-4 text-[#1D3178]">
            <span>Shipping:</span> <span>$15.00</span>
          </p>
          <p className="flex justify-between font-bold text-lg text-[#1D3178]">
            <span>Total:</span> <span>${(getTotalPrice() + 15).toFixed(2)}</span>
          </p>
          <div className="flex items-center gap-2">
            <Image src="/images/check.png" alt="check" width={20} height={20} />
            <p className="text-sm">Shipping & taxes calculated at checkout</p>
          </div>
          <Link href="/checkout">
            <button
              className="w-full py-3 mt-4 bg-[#26D07C] text-white rounded-md font-semibold hover:bg-green-500"
            >
              Proceed To Checkout
            </button>
          </Link>

          {/* Calculate Shipping Section */}
          <h2 className="text-lg font-bold mt-8 mb-4 text-[#1D3178]">Calculate Shipping</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Country"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <button
              type="button"
              className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
            >
              Calculate Shipping
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
