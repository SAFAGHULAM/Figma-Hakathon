import Image from 'next/image';

export default function DiscountItem() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Discount Item</h2>

        {/* Tags Section */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {["Wood Chair", "Plastic Chair", "Sofa Chair"].map((tag) => (
            <button
              key={tag}
              className="relative text-lg font-medium text-gray-700 hover:text-pink-600"
            >
              {tag}
              <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
            </button>
          ))}
        </div>

        {/* Discount Section */}
        <div className="flex flex-col-reverse md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
          {/* Left Content */}
          <div className="md:w-1/2 text-left md:text-center mb-6 md:mb-0">
            <div className="md:mx-auto max-w-[400px]">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                20% Discount Of All Products
              </h3>
              <p className="text-gray-600 font-semibold text-lg mb-4">
                Eams Sofa Compact
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <p className="text-gray-600 mb-4">✓ Material expose like metals.</p>
                <p className="text-gray-600 mb-4">✓ Clear lines and geometric figures.</p>
                <p className="text-gray-600 mb-4">✓ Simple neutral colours.</p>
                <p className="text-gray-600 mb-4">✓ Material expose like metals.</p>
              </div>
              <button className="bg-pink-600 text-white font-medium px-6 py-2 rounded hover:bg-pink-700 mt-4">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/images/disc-sofa.png"
              alt="Discounted Product"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
