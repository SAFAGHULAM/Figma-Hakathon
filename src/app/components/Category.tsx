"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { category } from "@/sanity/lib/queries";
import { urlFor } from '@/sanity/lib/image';

const TopCategories = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(category);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <section className="w-full bg-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#3F509E]">Top Categories</h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4">
        {products.map((item) => (
          <div key={item._id} className="group flex flex-col items-center text-center">
            {/* Circular Image with Hover Effect */}
            <div className="relative w-40 h-40 flex justify-center items-center bg-gray-200 rounded-full overflow-hidden">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover"
                />
              )}
              {/* Hover Blue Border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
              {/* Hover "View Shop" Link */}
              <Link 
                href={`/shop`} 
                className="absolute bottom-2 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Shop
              </Link>
            </div>

            {/* Category Details */}
            <h3 className="mt-4 text-[#3F509E] font-bold">{item.name}</h3>
            <p className="text-gray-600">${item.price || "Price Not Available"}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {[1, 2, 3].map((dot) => (
          <span key={dot} className="w-3 h-3 bg-pink-600 rounded-full"></span>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
