import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="px-6 lg:px-20 py-10 font-sans text-[#151875]">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Know About Our <br /> Ecommerce Business, History
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in ligula et libero sodales suscipit. Morbi arcu eros, tincidunt
              non turpis non, bibendum porttitor nisi.
            </p>
            <Link href="/contact-us">
              <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <Image
              src="/images/about.png"
              alt="Ecommerce Meeting"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="my-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "/images/offer1.png", title: "Free Delivery" },
              { icon: "/images/offer2.png", title: "100% Cash Back" },
              { icon: "/images/offer3.png", title: "Quality Product" },
              { icon: "/images/offer4.png", title: "24/7 Support" },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 border rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center shadow-inner">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-20 flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
          Our Client Say!
        </h2>
  
        {/* Card Container */}
        <div className="w-full max-w-4xl p-6 border-2 border-[#E0E0E0] rounded-lg text-center shadow-md">
          {/* Profile Picture and Name */}
          <div className="flex flex-col items-center mb-4">
            <div className="flex justify-center -space-x-4">
              <Image
                src="/images/client1.png"
                alt="Client 1"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
              />
              <Image
                src="/images/client2.png"
                alt="Client 2"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
              />
              <Image
                src="/images/client3.png"
                alt="Client 3"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
              />
            </div>
            <h4 className="text-[#151875] text-xl font-semibold mt-4">
              Selina Gomez
            </h4>
            <span className="text-gray-400 text-sm">Co-Founder @ Webizy Digital</span>
          </div>
  
          {/* Testimonial Text */}
          <p className="text-gray-500 leading-relaxed px-4 sm:px-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas at nam. Tristique ultricies dolor aliquam
            lacus volutpat praesent.
          </p>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
