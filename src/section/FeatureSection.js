import React from "react";
import Features from "../components/Features";

const FeatureSection = () => {
  return (
    <div class="flex flex-col md:flex-row justify-between mt-16 md:mx-32 items-center gap-y-5">
      <Features
        bgColor="#fee2e2"
        iconPath={"./server.png"}
        featureHeading="Cloud Storage"
        featureText="Experience Unmatched Accessibility and Security with Our Cloud Storage"
      />
      <Features
        bgColor="#fed7aa"
        iconPath={"./file-read.png"}
        featureHeading="Notes Formatter"
        featureText="Elevate Your Note-Taking Experience with Our Advanced Formatter"
      />
      <Features
        bgColor="#e0f2fe"
        iconPath={"./search.png"}
        featureHeading="Trusted by Leaders"
        featureText="Simple Notes is recommended by Google and is used by top companies like BMW"
      />
    </div>
  );
};

export default FeatureSection;
