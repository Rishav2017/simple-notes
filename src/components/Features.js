import React from "react";

const Features = ({ iconPath, featureHeading, featureText, bgColor }) => {
  return (
    <div class="flex flex-col items-center justify-center w-[18rem] gap-2">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        <img src={iconPath} alt="My Example" class="h-6 w-6" />
      </div>
      <h3 class="text-center font-semibold">{featureHeading}</h3>
      <p class="text-center">{featureText}</p>
    </div>
  );
};

export default Features;
