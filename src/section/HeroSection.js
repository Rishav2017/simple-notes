import React from "react";

const HeroSection = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-[32px] md:text-[52px] font-extrabold text-gray-900 text-center">
        Simplify Your Thoughts with <br />
        <span className="text-blue-500">Ease & Clarity</span>
      </h1>
      <h3 className="text-[14px] md:text-[22px] text-center w-[75%]">
        {/* Quickly create insanely fast, mobile optimized AMP landing pages without
        any code using Swipe Pages, the landing page builder for ROI driven
        marketers. */}
        Discover the ultimate notepad solution designed to help you capture,
        organize, and manage your ideas effortlessly.Enjoy
        enhanced productivity and a clutter-free mind with our advanced features
        tailored to meet all your note-taking needs.
      </h3>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Try Simple Notes for Free
      </button>
      <p>No credit card required</p>
    </div>
  );
};

export default HeroSection;
