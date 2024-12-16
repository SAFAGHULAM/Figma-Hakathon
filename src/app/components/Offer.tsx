// components/ShopexOffers.js
import Image from 'next/image';

const ShopexOffers = () => {
  const offers = [
    {
      icon: '/images/offer1.png', // Replace with the actual path of your icon
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    },
    {
      icon: '/images/offer2.png',
      title: 'Money Back Guarantee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    },
    {
      icon: '/images/offer3.png',
      title: 'Premium Quality',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    },
    {
      icon: '/images/offer4.png',
      title: 'Customer Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#151875] mb-12">What Shopex Offer!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={offer.icon}
                  alt={offer.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopexOffers;
