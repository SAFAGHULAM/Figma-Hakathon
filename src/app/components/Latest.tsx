export default function Latest() {
  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{ backgroundColor: "white" }}
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-[#151875]">
        Latest Products
      </h1>

      {/* Static Navigation */}
      <div className="flex justify-center space-x-8 text-[#151875]">
        <a href="#" className="text-[#FB4997] font-semibold">
          New Arrival
        </a>
        <a href="#" className="hover:text-[#FB4997]">Best Seller</a>
        <a href="#" className="hover:text-[#FB4997]">Featured</a>
        <a href="#" className="hover:text-[#FB4997]">Special Offer</a>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Array of cards for DRY principle */}
        {[
          { image: "/images/latest1.png", price: "$42.00", original: "$65.00" },
          { image: "/images/latest3.0.png", price: "$42.00", original: "$65.00" },
          { image: "/images/latest3.png", price: "$77.00", original: "$65.00" },
          { image: "/images/latest4.png", price: "$42.00", original: "$65.00" },
          { image: "/images/product4.png", price: "$42.00", original: "$65.00" },
          { image: "/images/latest6.png", price: "$42.00", original: "$65.00" },
        ].map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]"
          >
            <div className="w-full h-66 flex items-center justify-center">
              <img
                src={product.image}
                alt="Comfort Handy Craft"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-white p-4 rounded-b-lg text-center">
              <h2 className="text-lg font-semibold mb-2">
                Comfort Handy Craft
              </h2>
              <div className="flex items-center justify-center">
                <span className="text-pink-500 font-bold mr-2">
                  {product.price}
                </span>
                <span className="text-gray-400 line-through">
                  {product.original}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
