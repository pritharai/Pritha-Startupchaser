import Footer4 from "@/components/footers/Footer4";
import Header6 from "@/components/headers/Header6";
import Topbar from "@/components/headers/Topbar";
import Blogs from "@/components/homes/home/Blogs";
import Brands from "@/components/homes/home/Brands";
import Cta from "@/components/homes/home/Cta";
import Faqs from "@/components/homes/home/Faqs";
import Features from "@/components/homes/home/Features";
import Hero from "@/components/homes/home/Hero";
// import Pricing from "@/components/homes/home/Pricing";
import Solutions from "@/components/homes/home/Solutions";
import Testimonials from "@/components/homes/home/Testimonials";
import React from "react";
export const metadata = {
  title:
    "Startup Chaser"
  
};
export default function page() {
  return (
    <>
      <div className="theme-3"
       style={{ fontFamily: "PolySans, sans-serif" }} >
        <div className="bp-xs page-wrapper home bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header6 />
          <div id="wrapper" className="wrap">
            <Hero />
            {/* <Brands /> */}
            <Features />
            <Solutions />
            {/* <Pricing /> */}
            <Testimonials />
            <Faqs />
            <Blogs />
            <Cta />
          </div>
          <Footer4 />
        </div>
      </div>
    </>
  );
}
