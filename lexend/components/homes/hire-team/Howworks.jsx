import React from "react";
import Image from "next/image";
import Accordion2 from "@/components/common/Accordion2a";

export default function Howworks() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel">
        <div className="container container-full">
          <div className="section-inner panel">
            <div className="row child-cols-12 col-match g-0">
              {/* Section 1 */}
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0">
                        <Image
                          className="media-cover image"
                          alt="Project Platform Preview"
                          src="/assets/images/template/feature-image-03.jpg"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          Build or Hire Startup-Ready Talent with Proven Project
                          Experience
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          Access a curated pool of students who've tackled
                          real-world startup challenges. Whether you're
                          assembling a high-performance team or hiring interns,
                          Startup Chaser connects you with candidates trained on
                          production-grade projects and ready to make an impact
                          from day one.
                        </p>

                        <div className="panel w-100 mt-2 lg:mt-4">
                          <ul
                            className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                            data-uc-accordion="collapsible: false"
                            style={{ "--divider-gap": "40px" }}
                          >
                            <Accordion2 />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <div className="panel">
                  <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                    <div
                      className="lg:order-2"
                      data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                    >
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-start-0">
                        <Image
                          className="media-cover image"
                          alt="Learning Features"
                          src="/assets/images/template/feature-image-01.jpg"
                          width="1200"
                          height="1200"
                        />
                      </figure>
                    </div>
                    <div
                      className="order-1"
                      data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 400;"
                    >
                      <div
                        className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                        data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                      >
                        <h3 className="h3 lg:h2 m-0">
                          Build. Showcase. Get Hired by Startups & Unicorns.
                        </h3>
                        <p className="fs-6 lg:fs-5">
                          At Startup Chaser, students work on real-world
                          projects, earn certifications, and build standout
                          portfolios—making them top picks for startups,
                          unicorns, and fast-growing tech teams.
                        </p>

                        <div className="panel mt-2 lg:mt-4">
                          <div className="row child-cols-12 lg:child-cols-6 g-4">
                            {/* Feature 1 */}
                            <div>
                              <div className="panel vstack items-start gap-2">
                                <div className="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                  <Image
                                    className="icon icon-1 text-white image-filter-white"
                                    alt="Certification icon"
                                    src="/assets/images/common/icons/database.svg"
                                    width="24"
                                    height="24"
                                  />
                                </div>
                                <div className="vstack gap-1 lg:gap-2">
  <h5 className="h5 lg:h4 m-0">
    Verified Certifications You Can Trust
  </h5>
  <p className="fs-6">
    Review candidate certifications backed by our platform—trusted by startups, unicorns, and hiring teams to validate real-world skills.
  </p>
</div>

                              </div>
                            </div>

                            {/* Feature 2 */}
                            <div>
                              <div className="panel vstack items-start gap-2">
                                <div className="cstack min-w-48px min-h-48px bg-primary rounded-circle">
                                  <Image
                                    className="icon icon-1 text-white image-filter-white"
                                    alt="Progress icon"
                                    src="/assets/images/common/icons/line-chart.svg"
                                    width="24"
                                    height="24"
                                  />
                                </div>
                                <div className="vstack gap-1 lg:gap-2">
  <h5 className="h5 lg:h4 m-0">
    Career-Ready Portfolios Built for Hiring
  </h5>
  <p className="fs-6">
    Evaluate candidates through their live project portfolios—designed to reflect real startup challenges and demonstrate job-ready skills from day one.
  </p>
</div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
