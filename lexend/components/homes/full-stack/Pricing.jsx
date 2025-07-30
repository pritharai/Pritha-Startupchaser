"use client";
import { pricingPlans } from "@/data/pricing";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 15,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return {
            ...prev,
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden bg-secondary dark:bg-gray-800 dark:text-white rounded-1-5"
    >
      <div className="section-outer panel pt-4 md:pt-6 xl:pt-9 pb-4 md:pb-6 xl:pb-9">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h2
  className="title h3 lg:h2 xl:h1 m-0"
  style={{ color: "#000000" }} // black
>
  Access Amazing Bonuses If You Register Before The Timer Hits 0!
</h2>

<p className="text-lg xl:text-xl">
  <span
    style={{
      color: "#dc2626",
      textDecoration: "line-through",
      marginRight: "1rem", // increased spacing
      fontSize: "1.25rem", // slightly larger
    }}
  >
    ₹10,000
  </span>
  <span
    style={{
      color: "#16a34a",
      fontWeight: 700,
      fontSize: "1.4rem", // slightly larger
    }}
  >
    ₹4,999
  </span>
</p>



                <div className="timer-container hstack justify-center gap-2 my-3">
                  {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                    <div
                      key={unit}
                      className="timer-box bg-white text-dark p-2 rounded text-center"
                      style={{ minWidth: "60px" }}
                    >
                      <div className="h3 m-0">
                        {timeLeft[unit].toString().padStart(2, "0")}
                      </div>
                      <div className="fs-7 text-uppercase">
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/sign-in"
                  className="btn btn-md btn-primary rounded-default text-white w-auto mx-auto"
                >
                  Join Now
                </Link>
              </div>

              {/* PRICING PLANS SECTION */}
              <div className="content panel w-100">
                <div
                  className="row child-cols-12 sm:child-cols-6 col-match justify-center g-2"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {pricingPlans.map((plan, index) => (
                    <div key={index}>
                      <div
                        className={`tier panel vstack justify-between p-3 md:p-4 lg:p-6 xl:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 text-dark dark:text-white text-center ${plan.additionalClasses}`}
                      >
                        {plan.badge && (
                          <span className="fs-7 position-absolute top-0 end-0 fw-bold text-uppercase text-primary dark:text-white my-2 mx-3">
                            {plan.badge}
                          </span>
                        )}
                        <header className="tier-header vstack gap-2 items-center">
                          <h5 className="h5 lg:h4 m-0 text-primary dark:text-white">
                            {plan.title}
                          </h5>
                          <div className="d-flex gap-narrow items-end mt-1">
                            <h3 className="h1 lg:display-6 price m-0 text-dark dark:text-white">
                              {plan.price}
                            </h3>
                          </div>
                          <p className="desc lg:fs-5">{plan.description}</p>
                          <Link
                            className="btn btn-md lg:btn-lg btn-primary text-white rounded-default w-100 mt-2"
                            href={`/sign-up`}
                          >
                            <span>{plan.linkText}</span>
                          </Link>
                        </header>
                        <hr className="my-2 md:my-3 lg:my-4" />
                        <div className="tier-body">
                          <ul className="nav-y gap-2 text-start">
                            {plan.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="hstack items-start gap-1"
                              >
                                <i className="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold" />
                                <span className="d-inline">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div
                className="footer panel text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
              >
               {/* <Link
                  href={`/page-pricing`}
                  className="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs mt-1"
                >
                  <span>Compare plans</span>
                </Link>*/}
                <p className="mt-2">Prices exclude any applicable taxes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
