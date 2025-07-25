import Brands from "@/components/common/Brands";
import Footer4 from "@/components/footers/Footer4";
import Header6 from "@/components/headers/Header6";
import Blog from "@/components/homes/funnel-page/Blog";
import Cta from "@/components/homes/funnel-page/Cta";
import Faq from "@/components/homes/funnel-page/Faq";
import Features from "@/components/homes/funnel-page/Features";
import Hero from "@/components/homes/funnel-page/Hero";
import Howworks from "@/components/homes/funnel-page/Howworks";
import Pricing from "@/components/homes/funnel-page/Pricing";
import Support from "@/components/homes/funnel-page/Support";
import Team from "@/components/homes/funnel-page/Team";
import Testimonials from "@/components/homes/funnel-page/Testimonials";
import Comparison from "@/components/homes/funnel-page/Comparison";
import React from "react";

export const metadata = {
  title: "Workshop - StartupChaser",
  description: "Join our workshop to gain industrial experience and enhance your portfolio with real-world projects.",
};

export default function WorkshopPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header6 />
        <div id="wrapper" className="wrap">
          <Hero />
          <div
            id="companies_sponsores"
            className="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50"
          >
            <div className="section-outer panel pb-4 sm:pb-8 xl:pb-9">
              <div className="container sm:max-w-lg xl:max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                    data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                  >
                    <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                      Join thousands of students who have enhanced their skills through our workshops
                    </p>
                    <div className="block-panel panel">
                      <div className="element-brands text-black dark:text-white mask-x">
                        <Brands />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Features />
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Cta />
          <Howworks />
           <Comparison />  {/* New comparison section */}
          <Team />
          <Pricing />
          <Testimonials />
         
          {/*<Faq />*/}
          <Support />
          
          <Blog />
        </div>
        <Footer4 />
      </div>
    </>
  );
}