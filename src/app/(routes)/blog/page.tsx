"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Define TypeScript types for blog
type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

// Mock blog data for illustration purposes
const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog Post 1",
    author: "Author 1",
    date: "December 9, 2024",
    category: "Design",
    excerpt: "This is a brief excerpt from the blog post.",
    image: "/images/blog4.png",
  },
  {
    id: 2,
    title: "Blog Post 2",
    author: "Author 2",
    date: "December 8, 2024",
    category: "Technology",
    excerpt: "This is another brief excerpt from the second blog post.",
    image: "/images/blog5.png",
  },
  {
    id: 3,
    title: "Blog Post 3",
    author: "Author 3",
    date: "December 7, 2024",
    category: "Travel",
    excerpt: "An excerpt from the third blog post about travel.",
    image: "/images/blog6.png",
  },
];

// Sidebar Content
const recentPosts = [
  { id: 4, image: "/images/blog7.png", title: "Recent Blog 1", date: "December 6, 2024" },
  { id: 5, image: "/images/blog8.png", title: "Recent Blog 2", date: "December 5, 2024" },
  { id: 6, image: "/images/blog9.png", title: "Recent Blog 3", date: "December 4, 2024" },
];

const categories = [
  { name: "Women", count: 21 },
  { name: "Men", count: 15 },
  { name: "Kids", count: 9 },
];

const tags = ["Design", "Technology", "Travel", "Fashion", "Food"];

const BlogPage = () => {
  return (
    <>
      <Header />

      {/* Header Section */}
      <div className="py-16 ml-8 lg:ml-36 space-y-2">
        <h1 className="text-4xl font-bold text-[#001F54]">Blog</h1>
        <nav className="flex items-center gap-2 text-gray-600">
          <Link href={"/"} className="hover:text-[#FB2E86]">Home</Link>
          <span className="mx-2 text-black">·</span>
          <span className="text-[#FB2E86]">Latest Blogs</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-center px-6 lg:px-20 py-10 gap-10">
        {/* Blog Posts Section */}
        <div className="lg:w-2/3">
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-12">
              <Image
                src={blog.image}
                alt={blog.title}
                width={870}
                height={453}
                className="w-full h-80 object-cover rounded-md"
              />
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                  <span>{blog.category}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#001F54]">{blog.title}</h2>
                <p className="text-gray-600">{blog.excerpt}</p>
                <a href="#" className="text-[#001F54] font-semibold hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8">
          {/* Search */}
          <div>
            <h3 className="text-lg font-bold text-[#001F54] mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#001F54] focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-[#001F54] mb-2">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              {categories.map((category, index) => (
                <li key={index}>
                  {category.name} ({category.count})
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold text-[#001F54] mb-2">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center gap-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#001F54]">{post.title}</h4>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-bold text-[#001F54] mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-sm text-gray-600 rounded-full cursor-pointer hover:bg-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;
