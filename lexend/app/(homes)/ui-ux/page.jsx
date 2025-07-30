import Brands from "@/components/common/Brands";
import Footer4 from "@/components/footers/Footer4";
import Header6 from "@/components/headers/Header6";
import Blog from "@/components/homes/ui-ux/Blog";
import Cta from "@/components/homes/ui-ux/Cta";
import Faq from "@/components/homes/ui-ux/Faq";
import Features from "@/components/homes/ui-ux/Features";
import Hero from "@/components/homes/ui-ux/Hero";
import Howworks from "@/components/homes/ui-ux/Howworks";
import Pricing from "@/components/homes/ui-ux/Pricing";
import Support from "@/components/homes/ui-ux/Support";
import Team from "@/components/homes/ui-ux/Team";
import Testimonials from "@/components/homes/ui-ux/Testimonials";
import Comparison from "@/components/homes/ui-ux/Comparison";
import React from "react";

export const metadata = {
  title: "UI/UX Design Workshop - StartupChaser",
  description:
    "Learn the art of UI/UX design from wireframes to polished prototypes. Build real projects and create delightful user experiences.",
};

export default function UiUxWorkshopPage() {
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
                      Join 8,000+ creative minds mastering user-centric design and real-world UI/UX tools
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
