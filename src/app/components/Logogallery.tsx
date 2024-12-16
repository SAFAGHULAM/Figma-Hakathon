import Image from "next/image";

const LogoGallery = () => {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8 lg:space-x-12 py-8">
      <div className="w-1/2 sm:w-1/4 md:w-1/6 p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/images/icon1.png" 
          alt="Fashion Live"
          width={150}
          height={50}
        />
      </div>
      <div className="w-1/2 sm:w-1/4 md:w-1/6 p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/images/icon2.png" 
          alt="Hand Crafted"
          width={150}
          height={50}
        />
      </div>
      <div className="w-1/2 sm:w-1/4 md:w-1/6 p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/images/icon3.png" 
          alt="pic2"
          width={150}
          height={50}
        />
      </div>
      <div className="w-1/2 sm:w-1/4 md:w-1/6 p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/images/icon4.png" 
          alt="Sunshine"
          width={150}
          height={50}
        />
      </div>
      <div className="w-1/2 sm:w-1/4 md:w-1/6 p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/images/icon5.png" 
          alt="Pure"
          width={150}
          height={50}
        />
      </div>
    </div>
  );
};

export default LogoGallery;
