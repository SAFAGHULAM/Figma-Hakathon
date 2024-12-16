'use client';

function Newsletter() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12"
      style={{
        backgroundImage: "url('/images/background.png')", 
      }}
    >
      <div className="max-w-screen-lg mx-auto text-center text-[#151875]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Latest Update By Subscribing Our Newsletter
        </h2>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-3 rounded-full transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
