import React from "react";
import Header from "./components/Header"
import HeroSection from "./components/Hero";
import FeaturedProducts from "./components/Featured";
import Latest from "./components/Latest";
import Offer from "./components/Offer";
import Trending from "./components/Trending"
import TrendingProducts from "./components/TrendingProduct"
import Voucher from "./components/Voucher"
import DiscountItem from "./components/Discount";
import TopCategories from "./components/Category";
import Newsletter from "./components/Newsletter";
import LogoGallery from "./components/Logogallery";
import BlogSection from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FeaturedProducts/>
      <Latest/>
      <Offer/>
      <Trending/>
      <TrendingProducts/>
      <Voucher/>
      <DiscountItem/>
      <TopCategories/>
      <Newsletter/>
      <LogoGallery/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}
