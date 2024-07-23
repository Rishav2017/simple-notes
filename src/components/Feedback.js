import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Feedback = ({ imagePath, feedback, feedbackAuthor }) => {
  return (
    <div class="flex flex-row border p-8 md:w-1/2 w-full gap-x-4 rounded-md">
      <img
        src={imagePath}
        alt="image"
        class="h-16 w-16 md:h-24 md:w-24 rounded-full"
      />
      <div class="flex flex-col gap-3 flex-1">
        <div>
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
        </div>
        <p class="w-4/5">{feedback}</p>
        <h4 class="font-semibold">– {feedbackAuthor}</h4>
      </div>
    </div>
  );
};

export default Feedback;
