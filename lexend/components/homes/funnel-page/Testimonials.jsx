import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Brown",
      role: "Owner of Brown Marketing",
      quote:
        "The course on Business Owners & Entrepreneurs has been a valuable resource for me. It provided insights on how to improve my business strategy and make more informed decisions. The networking opportunities and access to resources have also been helpful. I would recommend it to any entrepreneurial looking to take their business to the next level.",
    },
    {
      name: "Emily Davis",
      role: "Founder of Davis Solutions",
      quote:
        "As a first-time business owner, I was looking for guidance and support in navigating the challenges of entrepreneurship. The course provided me with the skills and knowledge I needed to succeed. The mentorship opportunities and networking opportunities have been invaluable. I highly recommend it to anyone looking to start or grow their business.",
    },
    {
      name: "Michael Johnson",
      role: "CEO of Johnson & Associates",
      quote:
        "This course has been an invaluable resource for me as a business owner. It has helped me develop the skills I need to make better financial decisions that have increased my revenue. Highly recommended to other entrepreneurs.",
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
