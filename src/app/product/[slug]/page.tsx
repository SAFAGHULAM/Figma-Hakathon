import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        price,
        description,
        slug,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
        }`,
        { slug }
    );
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    // Calculate discounted price
    const discountedPrice = product.discountPercentage
        ? (parseFloat(product.price) - (parseFloat(product.price) * product.discountPercentage) / 100).toFixed(2)
        : product.price;

    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Product Image */}
                    <div className="p-6 bg-purple-100 rounded-lg flex justify-center items-center max-w-xs mx-auto">
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.name}
                                height={300} // Reduced height
                                width={300}  // Reduced width
                                className="rounded-lg shadow-lg object-contain"
                            />
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            {/* Product Name */}
                            <h1 className="text-3xl font-bold">{product.name}</h1>

                            {/* Featured Badge */}
                            {product.isFeaturedProduct && (
                                <span className="bg-pink-400 text-white text-sm font-semibold py-1 px-1 rounded-full">
                                     Featured
                                </span>
                            )}
                        </div>

                        {/* Price & Discount */}
                        <div className="flex items-center gap-4">
                            {product.discountPercentage > 0 ? (
                                <>
                                    <span className="text-2xl font-semibold text-pink-500">
                                        ${discountedPrice}
                                    </span>
                                    <span className="text-lg line-through text-gray-400">
                                        ${product.price}
                                    </span>
                                    <span className="bg-pink-200 text-pink-600 text-sm font-semibold py-1 px-2 rounded-lg">
                                        {product.discountPercentage}% off
                                    </span>
                                </>
                            ) : (
                                <span className="text-2xl font-semibold text-pink-500">
                                    ${product.price}
                                </span>
                            )}
                        </div>

                        {/* Stock Level */}
                        <p className={`text-lg font-semibold ${product.stockLevel > 0 ? "text-green-600" : "text-red-500"}`}>
                            {product.stockLevel > 0
                                ? `${product.stockLevel} In Stock`
                                : "Out of Stock"}
                        </p>

                        {/* Description */}
                        {product.description && (
                            <p className="text-gray-600">{product.description}</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
