import Brands from "@/components/common/Brands";
import Footer4 from "@/components/footers/Footer4";
import Header6 from "@/components/headers/Header6";
import Blog from "@/components/homes/full-stack/Blog";
import Cta from "@/components/homes/full-stack/Cta";
import Faq from "@/components/homes/full-stack/Faq";
import Features from "@/components/homes/full-stack/Features";
import Hero from "@/components/homes/full-stack/Hero";
import Howworks from "@/components/homes/full-stack/Howworks";
import Pricing from "@/components/homes/full-stack/Pricing";
import Support from "@/components/homes/full-stack/Support";
import Team from "@/components/homes/full-stack/Team";
import Testimonials from "@/components/homes/full-stack/Testimonials";
import Comparison from "@/components/homes/full-stack/Comparison";

import React from "react";

export const metadata = {
  title: "Full Stack Workshop - StartupChaser",
  description: "Master full stack development in our hands-on workshop. Build projects, learn latest stacks & become job-ready!",
};

export default function FullStackWorkshopPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden">
        <Header6 />
        <div id="wrapper" className="wrap">
          <Hero />
          <div className="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50">
            <div className="section-outer panel pb-4 sm:pb-8 xl:pb-9">
              <div className="container sm:max-w-lg xl:max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                    data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                  >
                    <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                      Join 10,000+ students upskilling through our Full Stack Workshop!
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
          <Comparison />
          <Team />
          <Pricing />
          <Testimonials />
          <Support />
          <Blog />
        </div>
        <Footer4 />
      </div>
    </>
  );
}
