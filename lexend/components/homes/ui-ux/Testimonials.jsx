import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
  {
    name: "Aanya Verma",
    role: "UI/UX Intern at CRED",
    quote:
      "StartupChaser’s UI/UX Workshop helped me master Figma and design real interfaces. I saw my wireframes and prototypes come to life in actual products used by real users!",
  },
  {
    name: "Manish Rathi",
    role: "Product Designer Intern at Razorpay",
    quote:
      "Designing for real startups pushed my creativity. From research to high-fidelity prototypes, I built solutions that solved actual user problems and improved my portfolio.",
  },
  {
    name: "Riya Kapoor",
    role: "Junior UX Designer at Zomato",
    quote:
      "The mentorship and feedback I got during the UI/UX workshop were amazing. I finally understood how design decisions impact users and collaborated like in a real team.",
  },
];


  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0 text-center">
                Hear Our Students
              </h2>

              <div className="row child-cols-12 md:child-cols-4 justify-center col-match g-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="panel vstack justify-center gap-3 rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 overflow-hidden text-center h-100">
                      <div className="panel vstack justify-center gap-3 px-3 py-4 lg:px-4 lg:py-5">
                        <div className="panel vstack items-center gap-2">
                          <Image
                            src={`/assets/images/avatars/0${index + 1}.jpg`}
                            width={80}
                            height={80}
                            alt={`Photo of ${testimonial.name}`}
                            className="rounded-full"
                          />
                          <p className="fs-7 lg:fs-6 text-dark dark:text-white lg:px-2">
                            "{testimonial.quote.slice(0, 120)}..."
                          </p>
                        </div>
                        <div className="panel mt-2">
                          <div className="panel vstack items-center gap-0">
                            <h6 className="h6 lg:h5 m-0">{testimonial.name}</h6>
                            <span className="fs-7 lg:h6 opacity-70">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
