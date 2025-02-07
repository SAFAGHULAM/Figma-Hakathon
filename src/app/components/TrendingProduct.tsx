"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const TrendingProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(query);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

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
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-77 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {product.name}
              </h3>
              <p className="text-blue-800 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
