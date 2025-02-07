"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { six } from "@/sanity/lib/queries";
import { urlFor } from '@/sanity/lib/image';

const Latest = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');  
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await client.fetch(six);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);  // Initially show all products
    }
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category); // Set the active category

    // Just show all products, regardless of the category selected
    setFilteredProducts(products);
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: "white" }}>
      <h1 className="text-3xl font-bold text-center mb-8 text-[#151875]">
        Latest Products
      </h1>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 text-[#151875]">
        <a
          href="#"
          onClick={() => handleCategoryChange("newarrival")}
          className={`font-semibold ${activeCategory === "newarrival" ? "text-[#FB4997]" : ""}`}
        >
          New Arrival
        </a>
        <a
          href="#"
          onClick={() => handleCategoryChange("bestseller")}
          className={`hover:text-[#FB4997] ${activeCategory === "bestseller" ? "text-[#FB4997]" : ""}`}
        >
          Best Seller
        </a>
        <a
          href="#"
          onClick={() => handleCategoryChange("featured")}
          className={`hover:text-[#FB4997] ${activeCategory === "featured" ? "text-[#FB4997]" : ""}`}
        >
          Featured
        </a>
        <a
          href="#"
          onClick={() => handleCategoryChange("specialoffer")}
          className={`hover:text-[#FB4997] ${activeCategory === "specialoffer" ? "text-[#FB4997]" : ""}`}
        >
          Special Offer
        </a>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]"
          >
            <div className="w-full h-66 flex items-center justify-center">
              {product.image && (
              <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-lg"
              width={200} // Adjust as needed
              height={200} // Adjust as needed
              />
            )}
            </div>
            <div className="bg-white p-4 rounded-b-lg text-center">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <div className="flex items-center justify-center">
                <span className="text-pink-500 font-bold mr-2">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;

