import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const products = [
  { id: 1, name: "Vel sit amet", price: "$190.00", image: "/images/chair3.png" },
  { id: 2, name: "Ultricies condimentum imperdiet", price: "$250.00", image: "/images/chair-02.png" },
  { id: 3, name: "Vitae suspendisse vel", price: "$230.00", image: "/images/shop1.png" },
  { id: 4, name: "Sed id fermentum", price: "$300.00", image: "/images/shop2.png" },
  { id: 5, name: "Fusce pellentesque ut", price: "$150.00", image: "/images/shop3.png" },
  { id: 6, name: "Vestibulum magna lorem", price: "$180.00", image: "/images/shop4.png" },
  { id: 7, name: "Sollicitudin amet orci", price: "$170.00", image: "/images/shop5.png" },
  { id: 8, name: "Ultrices massa elit", price: "$240.00", image: "/images/shop6.png" },
  { id: 9, name: "Pellentesque condimentum sc", price: "$260.00", image: "/images/shop7.png" },
  { id: 10, name: "Cras scelerisque elit", price: "$200.00", image: "/images/shop8.png" },
  { id: 11, name: "Lectus vulputate faucibus", price: "$210.00", image: "/images/shop9.png" },
  { id: 12, name: "Purus vitae eu", price: "$220.00", image: "/images/shop2.png" }
];

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
  return (
    <div>
      <Header />
      <section className="p-4 md:p-8 lg:p-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Ecommerce Accessories & Fashion Item</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-gray-100 hover:bg-white transition-shadow shadow-sm hover:shadow-md rounded-lg text-center"
            >
              <div className="mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
              <p className="text-red-500 font-semibold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <div>
        {/* Filter and Sorting Section */}
        <div className="py-6 flex flex-col lg:flex-row justify-between px-8 bg-gray-50">
          <div>
            <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-1">
              Ecommerce Accessories & Fashion Items
            </h1>
            <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 lg:mt-0">
            {/* Per Page */}
            <div className="flex items-center gap-2">
              <label htmlFor="perPage" className="text-sm font-medium text-gray-700">
                Per Page:
              </label>
              <input
                type="number"
                id="perPage"
                placeholder="10"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              >
                <option value="bestMatch">Best Match</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>

            {/* View */}
            <div className="flex items-center gap-2">
              <label htmlFor="view" className="text-sm font-medium text-gray-700">
                View:
              </label>
              <input
                type="number"
                id="view"
                placeholder="12"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              />
            </div>
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
                <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                    {/* Color Options */}
                    <div className="flex gap-1">
                      {product.colors.map((color, index) => (
                        <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-800">{product.price}</span>
                    <span className="text-red-500 line-through">{product.oldPrice}</span>
                  </div>

                  <p className="mt-2 text-gray-600">{product.description}</p>

                  {/* Rating */}
                  <div className="mt-2 flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`${
                          index < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } text-lg`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex space-x-4">
                    <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                      <AiOutlineHeart size={20} />
                    </button>
                    <Link href="/cart">
                      <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                        <AiOutlineShoppingCart size={20} />
                      </button>
                    </Link>
                    <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                      <AiOutlineEye size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">
          Ecommerce Accessories & Fashion Items
        </h1>

        {/* Layout: Sidebar and Product Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-6">
            {/* Product Brand */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Product Brand</h2>
              <ul className="space-y-1 text-gray-600">
                <li><input type="checkbox" /> Coaster Furniture</li>
                <li><input type="checkbox" /> Fusion Dot High</li>
                <li><input type="checkbox" /> Unique Furniture</li>
                <li><input type="checkbox" /> Dream Furniture</li>
              </ul>
            </div>

            {/* Discount Offer */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Discount Offer</h2>
              <ul className="space-y-1 text-gray-600">
                <li><input type="checkbox" /> 20% Cashback</li>
                <li><input type="checkbox" /> 25% Cashback</li>
              </ul>
            </div>

            {/* Price Filter */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Price Filter</h2>
              <ul className="space-y-1 text-gray-600">
                <li><input type="checkbox" /> $0.00 - $50.00</li>
                <li><input type="checkbox" /> $50.00 - $100.00</li>
                <li><input type="checkbox" /> $100.00 - $150.00</li>
              </ul>
            </div>

            {/* Color Filter */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Filter by Color</h2>
              <div className="flex gap-2">
                <span className="w-6 h-6 bg-green-500 rounded-full"></span>
                <span className="w-6 h-6 bg-yellow-500 rounded-full"></span>
                <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </aside>

          {/* Product List */}
          <section className="w-full lg:w-3/4 space-y-6">
            {slides.map((slide) => (
              <div
                key={slide.id}  
                className="flex flex-col lg:flex-row bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                {/* Product Image */}
                <div className="lg:w-1/4 flex-shrink-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="lg:ml-6 mt-4 lg:mt-0 flex-grow">
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                  <p className="text-gray-500 mt-2">{slide.description}</p>
                  {/* Price */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-[#FB2E86]">
                      ${slide.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${slide.oldPrice}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="mt-2 flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`text-lg ${index < slide.rating ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="flex flex-wrap bg-gray-100 justify-center items-center space-x-4 md:space-x-8 lg:space-x-12 py-8">
              {[
                { src: "/images/icon1.png", alt: "Fashion Live" },
                { src: "/images/icon2.png", alt: "Hand Crafted" },
                { src: "/images/icon3.png", alt: "pic2" },
                { src: "/images/icon4.png", alt: "Sunshine" },
                { src: "/images/icon5.png", alt: "Pure" },
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-1/2 sm:w-1/4 md:w-1/6 p-4 opacity-70 hover:opacity-100 transition-opacity duration-300 bg-transparent"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={150}
                    height={50}
                    className="bg-transparent"
                  />
                </div>
                 ))}
                </div>
      <Footer />
    </div>
  );
};

export default Shop;
