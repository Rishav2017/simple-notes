import React from "react";
// import HeroSection from "../section/HeroSection";
// import Review from "../section/Review";
// import FeatureSection from "../section/FeatureSection";
import HeroSection from "../../section/HeroSection";
import Review from "../../section/Review";
import FeatureSection from "../../section/FeatureSection";
import FeedbackSection from "../../section/FeedbackSection";

const Footer = () => {
  return (
    <div className="mx-auto max-w-[2000px]">
      <HeroSection />
      <Review />
      <FeatureSection />
      <FeedbackSection />
    </div>
  );
};

export default Footer;
