"use client";
import Link from "next/link";
import Image from "next/image";
import TyperComponent from "@/components/common/TyperComponent";
export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header hero-five-scene section panel overflow-hidden"
    >
      <div className="position-cover bg-gradient-to-t from-secondary to-white dark:from-gray-800 dark:to-gray-900" />
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel flex justify-center items-center min-h-[80vh]">
            <div className="row child-cols-12 justify-center items-center g-6 text-center">
              <div className="sm:col-12 flex justify-center items-center min-h-[80vh]">
                <div className="panel vstack gap-2 text-center items-center justify-center w-full max-w-xl"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  {/* New StartupChaser emphasis line with animation */}
                    <h1 className="h1 sm:h2 md:h1 lg:display-4 lh-lg mb-1 xl:mb-2 mt-2">
    <span className="px-1 bg-primary dark:bg-tertiary dark:text-primary">
      <span style={{ color: "#E6FF80" }}>
        <TyperComponent
          strings={["StartupChaser",""]}
          
          typeSpeed={80}
          backSpeed={50}
          backDelay={300}
          loop={true}
          
        />
        
      </span>
    </span>
    <span className="typed-cursor" style={{ color: "#E6FF80" }} aria-hidden="true"></span>
  </h1>


                  
                  <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
                    Break Into Product Management with Real Startup Projects
                  </span>
                  <h1 className="h2 sm:display-6 xl:display-4 fw-light mb-1 xl:mb-2 text-center">
                    Join <span className="text-primary fw-bold">StartupChaser</span> & Become Like <br />
                     the Top 1% of Successful <br />
                    Intern
                  </h1>
                  
                  <p className="fs-6 xl:fs-4">
                    before is too late...
                  </p>

                  <div className="vstack gap-0.75 mt-2 xl:mt-1">
                    <div className="flex justify-center mt-4">
                      <Link
                        href="/sign-in"
                        className="btn btn-md btn-primary rounded-default text-white"
                        style={{ width: '20%' }}
                      >
                        Join now
                      </Link>
                    </div>


                  </div>
                  <div className="vstack md:hstack justify-center lg:justify-start gap-2 mt-2 xl:mt-4 fdr">
                    <div className="hstack justify-center gap-0">
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900"
                        src="/assets/images/avatars/02.jpg"
                        width="96"
                        height="96"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/05.png"
                        width="150"
                        height="150"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/02.png"
                        width="150"
                        height="150"
                      />
                      <Image
                        alt="Avatar-image"
                        className="w-40px h-40px rounded-circle border border-1 border-secondary dark:border-gray-900 ms-n2"
                        src="/assets/images/avatars/01.jpg"
                        width="96"
                        height="96"
                      />
                    </div>
                    <div className="panel ">
                      <ul className="nav-x justify-center md:justify-start gap-0">
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <Image
                            alt="star-rating"
                            className="w-20px text-yellow"
                            data-uc-svg=""
                            src="/assets/images/common/star-rating.svg"
                            width="20"
                            height="20"
                          />
                        </li>
                        <li>
                          <span className="fs-8 fw-medium ms-narrow">5.0</span>
                        </li>
                      </ul>
                      <span className="fs-7 fw-medium">
                        Based on 200+ reviews
                      </span>
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
