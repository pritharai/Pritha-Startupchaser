import React from "react";
import Image from "next/image";

export default function Comparison() {
  const comparisonItems = [
    {
      feature: "Personalized Learning",
      startupChaser: "Tailored for early-stage founders",
      traditional: "One-size-fits-all courses",
    },
    {
      feature: "Real Startup Tools",
      startupChaser: "MVP builders, funding tools, pitch decks",
      traditional: "Mostly theory",
    },
    {
      feature: "Fast Iteration",
      startupChaser: "Launch & validate quickly",
      traditional: "Long, slow cycles",
    },
    {
      feature: "Community & Mentors",
      startupChaser: "Active startup community with real mentors",
      traditional: "Passive or generic support",
    },
    {
      feature: "Gamified Experience",
      startupChaser: "Level up as you grow",
      traditional: "No progress tracking",
    },
  ];

  return (
    <div
      id="why_startupchaser"
      className="why-startupchaser section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0 text-center">
                Why StartupChaser Stands Out
              </h2>

              <div className="comparison-table w-100 overflow-auto">
                <table className="table table-hover border-top">
                  <thead>
                    <tr>
                      <th className="fw-bold">Features</th>
                      <th className="fw-bold text-primary">StartupChaser</th>
                      <th className="fw-bold">Traditional Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonItems.map((item, index) => (
                      <tr key={index}>
                        <td className="fw-medium">{item.feature}</td>
                        <td>
                          <div className="hstack gap-2">
                            <span className="icon-box w-24px h-24px rounded-circle cstack bg-primary text-white">
                              <i className="unicon-checkmark fw-bold"></i>
                            </span>
                            <span>{item.startupChaser}</span>
                          </div>
                        </td>
                        <td>
                          <div className="hstack gap-2">
                            <span className="icon-box w-24px h-24px rounded-circle cstack bg-danger text-white">
                              <i className="unicon-close fw-bold"></i>
                            </span>
                            <span>{item.traditional}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}