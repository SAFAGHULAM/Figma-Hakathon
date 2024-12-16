import React from 'react'
import Image from 'next/image'

export default function TrendingProducts() {
    const products = [
      {
        id: 1,
        name: "Cantilever chair",
        price: "$26.00",
        originalPrice: "$42.00",
        image: "/images/product1.png", // Ensure the image paths are correct
      },
      {
        id: 2,
        name: "Cantilever chair",
        price: "$26.00",
        originalPrice: "$42.00",
        image: "/images/product2.png",
      },
      {
        id: 3,
        name: "Cantilever chair",
        price: "$26.00",
        originalPrice: "$42.00",
        image: "/images/product3.png",
      },
      {
        id: 4,
        name: "Cantilever chair",
        price: "$26.00",
        originalPrice: "$42.00",
        image: "/images/product4.png",
      },
    ];
  
    const exclusiveProducts = [
      { id: 1, img: "/images/executive1.png" },
      { id: 2, img: "/images/executive2.png" },
      { id: 3, img: "/images/executive3.png" },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Trending Products
          </h2>
  
          {/* Products Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-77 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-blue-800 font-bold">{product.price}</p>
                <p className="text-gray-500 line-through mb-4">
                  {product.originalPrice}
                </p>
              </div>
            ))}
          </div>
  
          {/* Vouchers and Product List Section */}
          <div className="mt-12 w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Voucher 1 */}
            <div className="bg-pink-100 p-8 flex flex-col relative h-[335px]">
              <h3 className="text-[#3F509E] text-2xl font-bold mb-4">
                23% Off in all products
              </h3>
              <button className="text-pink-600 underline text-lg font-medium mr-[250px]">
                Shop Now
              </button>
              <img
                src="/images/clock.png"
                alt="Voucher Image"
                className="absolute bottom-2 right-0 object-contain"
              />
            </div>
  
            {/* Voucher 2 */}
            <div className="bg-[#EEEFFB] p-8 flex flex-col relative h-[335px]">
              <h3 className="text-[#3F509E] text-2xl font-bold mb-4">
                23% Off in all products
              </h3>
              <button className="text-pink-600 underline text-lg font-medium mr-[200px]">
                View Collection
              </button>
              <img
                src="/images/trending.png"
                alt="Voucher Image"
                className="absolute bottom-2 right-2 object-contain"
              />
            </div>
  
            {/* Exclusive Product List */}
            <div className="flex flex-col space-y-4">
              {exclusiveProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-200 flex items-center p-4 h-[100px] rounded shadow"
                >
                  <img
                    src={product.img}
                    alt="Exclusive Product"
                    className="object-contain w-20 h-20 mr-4"
                  />
                  <div>
                    <h3 className="text-[#3F509E] font-semibold text-lg mb-1">
                      Exclusive Seat Chair
                    </h3>
                    <p className="text-[#3F509E] font-bold inline-block">$32.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  