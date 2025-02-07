"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { three } from "@/sanity/lib/queries";
import { urlFor } from '@/sanity/lib/image';

const Voucher = () => {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(three);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 py-2 relative -top-10">
        {/* Voucher Section*/}
        <div className="mt-12 w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Voucher 1 */}
          <div className="bg-pink-100 p-8 flex flex-col relative h-[335px]">
            <h3 className="text-[#3F509E] text-2xl font-bold mb-4">
              23% Off in all products
            </h3>
            <Link href="/shop" className="text-pink-600 underline text-lg font-medium mr-[250px]">
              Shop Now
            </Link>
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
            <Link href="/shop" className="text-pink-600 underline text-lg font-medium mr-[200px]">
              View Collection
            </Link>
            <img
              src="/images/trending.png"
              alt="Voucher Image"
              className="absolute bottom-2 right-2 object-contain"
            />
          </div>

          {/* Exclusive Product List*/}
          <div className="flex flex-col space-y-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-gray-200 flex items-center p-4 h-[100px] rounded shadow"
              >
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="object-contain w-20 h-20 mr-4"
                  />
                )}
                <div>
                  <h3 className="text-[#3F509E] font-semibold text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#3F509E] font-bold inline-block">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voucher;
