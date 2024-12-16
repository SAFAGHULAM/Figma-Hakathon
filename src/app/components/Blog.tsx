'use client';
import Image from 'next/image';
import Link from "next/link";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: "/images/blog1.jpeg",
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875",
    },
    {
      id: 2,
      img: "/images/blog2.jpeg",
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#FB2E86",
    },
    {
      id: 3,
      img: "/images/blog3.jpeg",
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875",
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Section Heading */}
      <h2 className="text-center text-[#151875] text-3xl font-bold mb-12">
        Latest Blog
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md"
          >
            {/* Blog Image */}
            <div className="w-full h-[300px] relative rounded-md overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Author and Date */}
            <div className="flex items-center space-x-4 mt-4">
              {/* Author */}
              <div className="flex items-center space-x-2">
                <Image src="/images/vector.png" alt="Author" width={20} height={20} />
                <span className="text-[#151875] font-medium">{blog.author}</span>
              </div>
              {/* Date */}
              <div className="flex items-center space-x-2">
                <Image src="/images/calender.png" alt="Date" width={20} height={20} />
                <span className="text-[#151875] font-medium">{blog.date}</span>
              </div>
            </div>

            {/* Blog Title */}
            <h3
              className="font-bold text-lg mt-4"
              style={{ color: blog.titleColor }}
            >
              {blog.title}
            </h3>

            {/* Blog Description */}
            <p className="text-gray-600 mt-2">
              {blog.description}
            </p>

           {/* Read More */}
          <Link href="/blog" legacyBehavior>
          <a className="underline text-sm font-medium mt-4"
          style={{ color: blog.titleColor }}
          >
           Read More
          </a>
</Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
