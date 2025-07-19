import React from "react";

export default function Topbar() {
  return (
    <div
      className="uc-banner-top py-1 p-2 m-0 hide-on-sticky text-center bg-gradient-to-r from-primary dark:from-tertiary-200 to-primary-700 dark:to-tertiary text-white dark:text-dark"
      data-uc-alert=""
      data-anime="opacity: [0, 1]; easing: easeInOutcubic; duration: 500; delay: 0;"
    >
      <a
        href="#"
        className="uc-alert-close top-0 end-0"
        style={{ margin: 14 }}
        data-uc-close=""
      />
      <p>
          🚀 Supercharge your career with real startup projects!{" "}
        <br className="d-block lg:d-none" />
        <a
          href="/projects"
          className="uc-link text-tertiary dark:text-primary border-bottom"
          target="_blank"
          rel="nofollow"
        >
          Explore Projects Now
        </a>
      </p>
    </div>
  );
}
