'use client';
import Image from 'next/image';

function TopCategories() {
  const categories = [
    { id: 1, img: "/images/chair1.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 2, img: "/images/feature1.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 3, img: "/images/product1.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 4, img: "/images/chair1.png", name: "Mini LCW Chair", price: "$56.00" },
  ];

  return (
    <section className="w-full bg-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#3F509E]">Top Categories</h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group flex flex-col items-center text-center"
          >
            {/* Circular Image with Hover Effect */}
            <div className="relative w-40 h-40 flex justify-center items-center bg-gray-200 rounded-full overflow-hidden">
              <Image
                src={category.img}
                alt={category.name}
                width={120}
                height={120}
                className="object-cover"
              />
              {/* Hover Blue Border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
              {/* Hover "View Shop" Button */}
              <button className="absolute bottom-2 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Shop
              </button>
            </div>

            {/* Category Details */}
            <h3 className="mt-4 text-[#3F509E] font-bold">{category.name}</h3>
            <p className="text-gray-600">{category.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className="w-3 h-3 bg-pink-600 rounded-full"
          ></span>
        ))}
      </div>
    </section>
  );
}

export default TopCategories;
