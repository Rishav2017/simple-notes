import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  return (
    <div className="flex flex-col mt-28 mb-28 w-full items-center justify-center">
      <video controls autoPlay muted className="px-8 md:px-32 rounded-lg">
        <source src="/videos/notes.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="flex flex-col md:flex-row pt-16  md:mx-32 w-full">
        <div class="flex flex-col gap-3 items-center md:border-r md:border-gray-500 md:w-[30%]">
          <h1 class="font-bold text-3xl">Capterra</h1>
          <h1 class="text-md">5/5 Rating</h1>
          <div>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          </div>
        </div>

        {/* <div class="inline-block h-[150px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div> */}

        <div class="md:w-1/2  md:ml-10">
          <h6 class="font-medium text-[18px] text-center md:text-left">
            “Well-balanced: The notepad application combines simplicity with
            functionality, offering an intuitive interface that’s easy to
            navigate. It’s versatile enough to meet the needs of designers,
            developers, and marketers alike, making it a comprehensive solution
            for managing and organizing notes efficiently”
          </h6>
          <p class="pt-10 text-center md:text-left">
            – Julian S | Strategic Director
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
