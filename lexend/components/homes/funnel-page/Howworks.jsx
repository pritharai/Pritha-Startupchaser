import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Howworks() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden rounded-1-5 lg:rounded-2 bg-white dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h2 lg:h1 xl:display-6 m-0">
                What Happens Once You Join?
              </h2>
            </div>
            
            <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 g-4 col-match">
              <div>
                <div className="features-item vstack justify-between gap-3 p-4 xl:p-5 rounded-1-5 text-center">
                  <div className="icon-box w-48px h-48px mx-auto rounded-circle cstack bg-primary">
                    <span className="text-white fw-bold">1</span>
                  </div>
                  <div className="panel">
                    <div className="vstack gap-1 text-center">
                      <h3 className="title h5 xl:h4 m-0">Explore Projects</h3>
                      <p className="desc fs-7 xl:fs-6 text-opacity-70">
                        Discover real startup problems across AI, HealthTech, FinTech, EdTech, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="features-item vstack justify-between gap-3 p-4 xl:p-5 rounded-1-5 text-center">
                  <div className="icon-box w-48px h-48px mx-auto rounded-circle cstack bg-primary">
                    <span className="text-white fw-bold">2</span>
                  </div>
                  <div className="panel">
                    <div className="vstack gap-1 text-center">
                      <h3 className="title h5 xl:h4 m-0">Apply in 1-Click</h3>
                      <p className="desc fs-7 xl:fs-6 text-opacity-70">
                        Choose the projects you love—no prior experience needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="features-item vstack justify-between gap-3 p-4 xl:p-5 rounded-1-5 text-center">
                  <div className="icon-box w-48px h-48px mx-auto rounded-circle cstack bg-primary">
                    <span className="text-white fw-bold">3</span>
                  </div>
                  <div className="panel">
                    <div className="vstack gap-1 text-center">
                      <h3 className="title h5 xl:h4 m-0">Get Matched Fast</h3>
                      <p className="desc fs-7 xl:fs-6 text-opacity-70">
                        We pair you with a project and guide you on how to begin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="features-item vstack justify-between gap-3 p-4 xl:p-5 rounded-1-5 text-center">
                  <div className="icon-box w-48px h-48px mx-auto rounded-circle cstack bg-primary">
                    <span className="text-white fw-bold">4</span>
                  </div>
                  <div className="panel">
                    <div className="vstack gap-1 text-center">
                      <h3 className="title h5 xl:h4 m-0">Work Like a PM</h3>
                      <p className="desc fs-7 xl:fs-6 text-opacity-70">
                        Own product tasks like research, wireframes, roadmap planning, and validation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="panel text-center mt-6">
              <Link
                href="/sign-in"
                className="btn btn-md btn-primary rounded-default text-white"
              >
                Join Now
              </Link>
              <p className="mt-3 fs-7">Book a Seat worth ₹10,000 for just ₹2,999<br/>limited seats available!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
