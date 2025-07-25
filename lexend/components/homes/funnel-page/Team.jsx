// components/TeamSection.jsx (or .tsx if using TypeScript)
import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div
      id="team_members"
      className="team-members section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="title h3 lg:h2 xl:h1 m-0 dark:text-white">
                  Know Your Coach
                </h2>
              </div>

              <div className="content panel w-100">
                <div className="row child-cols-12 col-match g-4">
                  <div className="col-md-6">
                    <Image
                      src="/assets/images/team/01.jpg"
                      width={500}
                      height={600}
                      alt="Coach"
                      className="rounded-1-5"
                    />
                  </div>

                  <div className="col-md-6">
                    <div className="vstack gap-4 justify-center h-100">
                      <h3 className="h3">Venkatesh Devale (Yugendhar)</h3>
                      <p className="fs-6">
                        Founder & CEO @SPACENOX | Gen AI Strategy Advisor | $1M in
                        90 days | 42+ Hackathons Champion
                      </p>

                      <h4 className="h4">AI Product Manager</h4>

                      <div className="hstack gap-1">
                        <span className="icon-box text-yellow">★</span>
                        <span className="icon-box text-yellow">★</span>
                        <span className="icon-box text-yellow">★</span>
                        <span className="icon-box text-yellow">★</span>
                        <span className="icon-box text-yellow">★</span>
                      </div>

                      <div className="stats-container mt-4">
                        <div className="row g-4">
                          <div className="col-6">
                            <div className="stat-box text-center">
                              <div className="h2 text-primary">15+</div>
                              <p>Years of experience in training and coaching</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="stat-box text-center">
                              <div className="h2 text-primary">50M</div>
                              <p>Entrepreneurs reached in the last 5 years</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="stat-box text-center">
                              <div className="h2 text-primary">500+</div>
                              <p>Seminars and workshops conducted</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="stat-box text-center">
                              <div className="h2 text-primary">500k</div>
                              <p>Social media following</p>
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
        </div>
      </div>
    </div>
  );
}
