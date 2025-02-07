"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
//import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/products";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

const shoplist = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    image: "/images/shoplist1.png",
    price: "$120.00",
    oldPrice: "$150.00",
    description: "Consectetur adipiscing elit.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 2,
    name: "In nulla",
    image: "/images/shoplist2.png",
    price: "$99.00",
    oldPrice: "$130.00",
    description: "Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 3,
    name: "Vel sem",
    image: "/images/shoplist3.png",
    price: "$99.00",
    oldPrice: "$130.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
      id: 4,
      name: "Porttitor cum",
      image: "/images/shoplist4.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "Lorem ipsum dolor sit amet.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, 
    {
      id: 5,
      name: "Nunc in",
      image: "/images/shoplist5.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "Lorem Magna in est adipiscing.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, 
    {
      id: 6,
      name: "Vitae facilisis",
      image: "/images/shoplist6.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "consectetur adipiscing elit. Magna in.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, 
    {
      id: 7,
      name: "Curabitur lectus",
      image: "/images/shoplist7.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
];

const slides = [
  {
    id: 1,
    title: "Dictum morbi",
    image: "/images/side1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo..",
    rating: 4,
    price: "26.00",
    oldPrice: "52.00",
  },
  {
    id: 2,
    title: "Sodales sit",
    image: "/images/side2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 4,
    price: "26.00",
    oldPrice: "52.00",
  },
  {
    id: 3,
    title: "Nibh varius",
    image: "/images/side3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 4,
    price: "26.00",
    oldPrice: "52.00",
  },
  {
      id: 4,
      title: "Mauris quis",
      image: "/images/side4.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 4,
      price: "26.00",
      oldPrice: "52.00",
  },
  {
      id: 5,
      title: "Morbi sagittis",
      image: "/images/side5.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 4,
      price: "26.00",
      oldPrice: "52.00",
  },
  {
      id: 6,
      title: "Ultricies venenatis",
      image: "/images/side6.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 4,
      price: "26.00",
      oldPrice: "52.00",
  },
  {
      id: 7,
      title: "Scelerisque dignissim",
      image: "/images/side7.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 4,
      price: "26.00",
      oldPrice: "52.00",
  }
];


const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart.`,
      showConfirmButton: false,
      timer: 1000
    });

    addToCart(product)
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">
          Ecommerce Accessories & Fashion Items
        </h1>

        {/* ✅ Fetched Products from Sanity (Displayed First) */}
        <h2 className="text-2xl font-semibold text-center mb-4">Latest Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {products.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-gray-100 hover:bg-white transition-shadow shadow-sm hover:shadow-md rounded-lg text-center"
            >
              <Link href={`/product/${item.slug.current}`}>
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded"
                />
              )}
              <h3 className="text-sm font-medium text-gray-700">{item.name}</h3>
              <p className="text-red-500 font-semibold">${item.price}</p>            
              <button
              className="bg-gradient-to-r from-pink-500 to-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
              hover:scale-110 transition-transform duration-300 ease-in-out 
              "
              onClick={(e) => handleAddToCart(e, item)}
              >
                Add to Cart
              </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Slide Section */}
        <div className="py-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Featured Slides</h2>
          <div className="flex overflow-x-auto space-x-6">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-[300px] bg-gray-50 rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{slide.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{slide.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg text-gray-900 font-bold">${slide.price}</p>
                    <p className="text-sm line-through text-gray-500">${slide.oldPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter and Sorting Section */}
        <div className="py-6 flex flex-col lg:flex-row justify-between px-8 bg-gray-50">
          <div>
            <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-1">
              Ecommerce Accessories & Fashion Items
            </h1>
            <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
          </div>
        </div>

        {/* Product List */}
        <div className="p-8 bg-white">
          <div className="space-y-6">
            {shoplist.map((product) => (
              <div
                key={product.id}
                className="flex flex-col lg:flex-row bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="lg:w-2/3 lg:ml-6 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <div className="flex items-center mt-4">
                    <p className="text-lg text-gray-900 font-bold">{product.price}</p>
                    <p className="ml-4 text-sm line-through text-gray-500">{product.oldPrice}</p>
                  </div>
                  <div className="mt-3 flex space-x-3">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className={`w-6 h-6 rounded-full ${color} cursor-pointer`}
                      ></span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <button className="bg-blue-500 text-white p-2 rounded-lg flex-1">Add to Cart</button>
                    <button className="bg-gray-300 p-2 rounded-lg flex-1">Wishlist</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Shop;
