"use client";
import { featurePageLinks, sections, sections2 } from "@/data/menu";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModalVideo from "../common/ModalVideo";

export default function Header6({ staticPosition = false }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const header = document.querySelector(".header-seven .uc-navbar-container");
    const menuItems = document.querySelectorAll(".header-seven .has-dd-menu");

    if (!header || menuItems.length === 0) return;

    const handleMouseEnter = () =>
      header.classList.remove("uc-navbar-transparent");
    const handleMouseLeave = () =>
      header.classList.add("uc-navbar-transparent");

    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <header
        className={`uc-header header-seven uc-navbar-sticky-wrap z-999 uc-sticky   ${
          scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
        }`}
        data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"

         style={{ fontFamily: "PolySans, sans-serif" }}
      >
        <nav
          className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent  ${
            scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"
          } ${staticPosition ? "position-static" : ""}`}
          data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          
          <div className="uc-navbar-main" style={{ "--uc-nav-height": "64px" }}>
            <div className="container">
              <div
                className="uc-navbar min-h-64px text-gray-900 dark:text-white position-static"
                data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;"
              >
                <div className="uc-navbar-left">
                  <div className="uc-logo">
                    <Link
                      className="panel text-none"
                      href={`/`}
                      style={{ width: 140 }}
                    >
                      <Image
                        className="dark:d-none"
                        alt="Lexend"
                        width="128"
                        height="34"
                        src="/assets/images/common/logo_light.png"
                      />
                      <Image
                        className="d-none dark:d-block"
                        alt="Startup Chaser"
                        width="128"
                        height="34"
                        src="/assets/images/common/logo_dark.png"
                      />
                    </Link>
                  </div>

                  <ul className="uc-navbar-nav gap-3 d-none lg:d-flex ltr:ms-2 rtl:me-2">
                    <li>
                      <Link href="/funnel-page">Workshop</Link>
                    </li>
                    <li className="has-dd-menu ">
                      <a href="/find-job" role="button" aria-haspopup="true">
                        Get Real Experience
                        <span
                          data-uc-navbar-parent-icon=""
                          className="uc-icon uc-navbar-parent-icon"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12">
                            <polyline
                              fill="none"
                              stroke="#000"
                              strokeWidth="1.1"
                              points="1 3.5 6 8.5 11 3.5"
                            />
                          </svg>
                        </span>
                      </a>
                      <div
                        className="uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-navbar-dropdown uc-drop"
                        data-uc-drop=" offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;"
                        style={{
                          overflowX: "auto",
                          top: 64,
                          left: "0",
                          width: "100vw",
                        }}
                      >
                        <div className="uc-dropbar-content">
                          <div className="container">
                            <div className="uc-dropbar-inner after-bg">
                              <div className="row gx-5 col-match justify-between">
                                <div className="col-8">
                                  <div className="panel vstack gap-4 py-4">
                                    <div className="panel vstack gap-4">
                                      <div className="vstack gap-narrow">
                                        <h5 className="h5 xl:h4 fw-medium m-0">
                                          Work on Real Startup Projects
                                        </h5>
                                        <p className="fs-7 text-gray-300">
                                          Gain hands-on experience across 20+
                                          real-world startup domains
                                        </p>
                                      </div>
                                      <div className="row child-cols-6 gx-6">
                                        {featurePageLinks.map(
                                          (section, index) => (
                                            <div
                                              key={index}
                                              className="vstack gap-3"
                                            >
                                              <h6 className="h6 m-0">
                                                <i
                                                  className={`fs-7 ${section.icon} fw-bold ltr:me-narrow rtl:ms-narrow`}
                                                ></i>{" "}
                                                {section.title}
                                              </h6>
                                              {section.items.map(
                                                (item, idx) => (
                                                  <div key={idx}>
                                                    <Link
                                                      href={`/find-job`}
                                                      className="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                                    >
                                                      <span className="icon rounded dark:bg-white">
                                                        <Image
                                                          className="w-32px"
                                                          alt="icon"
                                                          src={`/assets/images/custom-icons/${item.icon}`}
                                                          width="24"
                                                          height="24"
                                                        />
                                                      </span>
                                                      <div className="panel">
                                                        <span className="fs-7 fw-medium mb-narrow text-inherit">
                                                          {item.title}
                                                        </span>
                                                        <p className="fs-8 text-muted">
                                                          {item.description}
                                                        </p>
                                                      </div>
                                                    </Link>
                                                  </div>
                                                )
                                              )}
                                              <div>
                                                <Link
                                                  href={`/page-features`}
                                                  className="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                                >
                                                  <span className="border-bottom hover:border-primary duration-150">
                                                    {section.viewAllText}
                                                  </span>
                                                  <i className="fs-8 unicon-arrow-up-right fw-bold"></i>
                                                </Link>
                                              </div>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start">
                                    {sections.map((section, index) => (
                                      <div
                                        key={index}
                                        className="panel category-section"
                                      >
                                        <h5 className="h6">{section.title}</h5>
                                        <ul className="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                          {section.links.map((link, i) => (
                                            <li key={i}>
                                              <Link href={link.href}>
                                                {link.text}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white">
                          <div className="container">
                            <ul className="nav-x gap-4 fs-8 fw-medium">
                              <li>
                                <a href="#">
                                  <i className="fs-8 unicon-api fw-bold"></i>
                                  <span className="border-bottom hover:border-primary duration-150">
                                    Explore Projects
                                  </span>
                                </a>
                              </li>
                              {/* <li>
                                <a href="#">
                                  <i className="fs-8 unicon-airplay fw-bold"></i>
                                  <span className="border-bottom hover:border-primary duration-150">
                                    AI Solutions
                                  </span>
                                </a>
                              </li> */}
                              {/* <li>
                                <a href="#">
                                  <i className="fs-8 unicon-cloud-lightning fw-bold"></i>
                                  <span className="border-bottom hover:border-primary duration-150">
                                    Join Lexend Early Access
                                  </span>
                                </a>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Hire Interns / Build Tech Team for Companies */}
                    <li className="has-dd-menu">
                      <a href="hire-team" role="button" aria-haspopup="true">
                        Hire Interns
                        <span className="uc-icon uc-navbar-parent-icon">
                          <svg width="12" height="12" viewBox="0 0 12 12">
                            <polyline
                              fill="none"
                              stroke="#000"
                              strokeWidth="1.1"
                              points="1 3.5 6 8.5 11 3.5"
                            />
                          </svg>
                        </span>
                      </a>
                      <div
                        className="uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-drop uc-navbar-dropdown"
                        data-uc-drop=" offset: 0; boundary: true;  stretch: x; animation: uc-animation-slide-top-small; duration: 150;"
                        style={{
                          overflowX: "auto",
                          top: 64,
                          left: "-307.5px",
                          width: 1903,
                          maxWidth: 1903,
                        }}
                      >
                        <div className="uc-dropbar-content">
                          <div className="container">
                            <div className="uc-dropbar-inner after-bg">
                              <div className="row gx-5 col-match justify-between">
                                <div className="col-8">
                                  <div className="panel vstack gap-4 py-4">
                                    <div className="vstack gap-narrow flex-none">
                                      <h5 className="h5 xl:h4 fw-medium m-0">
                                        Build Real Projects. Get Hired.
                                      </h5>
                                      <p className="fs-7 text-gray-300">
                                        Work on industry-level tasks, grow your
                                        portfolio, and unlock Pro benefits.
                                      </p>
                                    </div>

                                    <div className="row child-cols-4 gx-4 col-match justify-between">
                                      {sections2.map((section, index) => (
                                        <div key={index}>
                                          <h6 className="h6 mb-3">
                                            <i
                                              className={`fs-7 ${section.icon} fw-bold ltr:me-narrow rtl:ms-narrow`}
                                            ></i>{" "}
                                            {section.title}
                                          </h6>
                                          <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2">
                                            {section.items.map((item, i) => (
                                              <li key={i}>
                                                <Link
                                                  className="hstack items-start gap-2"
                                                  href={`/page-features`}
                                                >
                                                  <div className="cstack min-w-32px h-32px rounded bg-tertiary">
                                                    <i
                                                      className={`icon-1 ${item.icon} fw-bold text-primary`}
                                                    ></i>
                                                  </div>
                                                  <span className="vstack gap-narrow mt-nnarrow">
                                                    <b className="fw-medium dark:text-white">
                                                      {item.text}
                                                    </b>
                                                    <span className="fs-8 text-muted">
                                                      {item.description}
                                                    </span>
                                                  </span>
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start">
                                    <div className="row child-cols gx-2">
                                      <div className="col-4">
                                        <div
                                          className="featured-image panel"
                                          data-uc-lightbox="video-autoplay: true;"
                                        >
                                          <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                                            <Image
                                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                              alt="Image"
                                              src="/assets/images/common/login.webp"
                                              width="1500"
                                              height="1000"
                                            />
                                          </figure>
                                          <button className="btn btn-md btn-alt-primary bg-tertiary p-0 w-32px h-32px position-absolute bottom-0 ltr:start-0 rtl:end-0 m-1">
                                            <i className="icon-narrow unicon-play-filled-alt text-primary"></i>
                                          </button>
                                          <a
                                            onClick={() => setIsOpen(true)}
                                            data-caption="Easy project managment of any complexity."
                                            data-attrs="width: 640; height: 480;"
                                            className="position-cover"
                                            role="button"
                                          ></a>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="vstack gap-1">
                                          <span className="fs-6 fw-bold m-0 text-dark dark:text-white">
                                            Hire interns without sorting endless
                                            resumes
                                          </span>
                                          <p className="fs-7">
                                            Discover pre-vetted talent with
                                            proven project experience in one
                                            place.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel category-section">
                                      <h5 className="h6">Start with ease!</h5>
                                      <ul className="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                        <li>
                                          <Link href={`/hire-team`}>
                                            Assemble a Team
                                          </Link>
                                        </li>
                                        <li>
                                          <a href="#">Customer stories</a>
                                        </li>
                                        <li>
                                          <a href="#">Resources</a>
                                        </li>
                                        <li>
                                          <Link href={`/blog-sidebar`}>
                                            Blog
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href={`/page-career`}>
                                            Career
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href={`/page-contact`}>
                                            Help Center
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white">
                          <div className="container">
                            <ul className="nav-x gap-4 fs-8 fw-medium">
                              <li>
                                <a href="hire-team">
                                  <i className="fs-8 unicon-api fw-bold"></i>
                                  <span className="border-bottom hover:border-primary duration-150">
                                    Explore Profiles
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="find-job">
                                  <i className="fs-8 unicon-airplay fw-bold"></i>
                                  <span className="border-bottom hover:border-primary duration-150">
                                    Our Solutions
                                  </span>
                                </a>
                              </li>
                              <li>
                                {/* <a href="#">
                                  <i className="fs-8 unicon-cloud-lightning fw-bold"></i>
                                  <span className="border-bottom hover:border-primary duration-150">
                                    Join
                                  </span>
                                </a> */}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Pro Access */}
                    {/* <li>
                      <Link href="/pro" className="text-primary fw-bold flex items-center gap-1">
                        <i className="unicon-star text-yellow-400"></i> Pro Access
                        <span className="badge bg-yellow-400 text-dark text-xs px-2 py-0.5 rounded-full">New</span>
                      </Link>
                    </li> */}

                    {/* Insights & Pricing */}
                    <li>
                      <Link href="/blog-sidebar">Insights</Link>
                    </li>
                    <li>
                      <Link href="/page-pricing-2">Pricing</Link>
                    </li>
                    

                    {/* Demo */}
                    {/* <li>
                      <a
                        href="https://lexend-nextjs-preview.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon unicon-cube fw-bold text-primary dark:text-tertiary me-1"></i>
                        <span>All Demo Pages</span>
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div className="uc-navbar-right">
                  <ul className="nav-x d-none lg:d-flex">
                    <li className="d-none xl:d-inline-flex">
                      <Link href={`/page-contact-2`}>Contact Sales</Link>
                    </li>
                    <li>
                      <Link href={`/sign-in`}>Log in</Link>
                    </li>
                  </ul>

                  {/* Updated Sign Up Button */}
                  <Link
                    className="btn btn-sm btn-primary text-tertiary dark:bg-tertiary dark:text-primary dark:hover:bg-tertiary fw-bold rounded-pill lg:px-3 text-none hover:contrast-shadow d-none lg:d-inline-flex"
                    href={`/sign-up`}
                  >
                    Sign up
                  </Link>

                  {/* Mobile Menu Toggle */}
                  <a
                    className="d-block lg:d-none uc-icon uc-navbar-toggle-icon"
                    onClick={openMobileMenu}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      {/* <style>.uc-navbar-toggle-icon svg&gt;[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg&gt;.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg&gt;.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg&gt;.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg&gt;.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg&gt;.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style> */}
                      <rect
                        className="line-1"
                        y="3"
                        width="20"
                        height="2"
                      ></rect>
                      <rect
                        className="line-2"
                        y="9"
                        width="20"
                        height="2"
                      ></rect>
                      <rect
                        className="line-3"
                        y="9"
                        width="20"
                        height="2"
                      ></rect>
                      <rect
                        className="line-4"
                        y="15"
                        width="20"
                        height="2"
                      ></rect>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>{" "}
      <ModalVideo
        isOpen={isOpen}
        src="/assets/images/media/lexend_vid.webm"
        setIsOpen={() => setIsOpen(false)}
      />{" "}
    </>
  );
}
