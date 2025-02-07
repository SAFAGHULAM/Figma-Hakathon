"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { trending } from "@/sanity/lib/queries";
import { urlFor } from '@/sanity/lib/image';

const Trending = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(trending);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const featuredProduct = products[0]; 

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
        {/* Product Image with Background */}
        <div className="relative flex justify-center items-center flex-1">
          {/* Pink Background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/images/pink.png"
              alt="Background"
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Sofa Image */}
          {featuredProduct?.image && (
            <Image
              src={urlFor(featuredProduct.image).url()}
              alt={featuredProduct.name || "Product Image"}
              width={400}
              height={400}
              className="relative z-10 object-contain"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#151875] mb-4">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center text-[#ACABC3] gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center text-[#ACABC3] gap-2">
              <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
              Reinforced with double wood dowels, glue, corner blocks and machine nails
            </li>
            <li className="flex items-center text-[#ACABC3] gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Arms, backs, and seats are structurally reinforced
            </li>
          </ul>

          {/* Call to Action */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Add To Cart
            </button>
            <div>
              <p className="text-gray-500 text-sm">{featuredProduct?.name || "B&B Italian Sofa"}</p>
              <p className="text-blue-800 font-bold text-lg">
                ${featuredProduct?.price || "32.00"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
