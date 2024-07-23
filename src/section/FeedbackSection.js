import React from "react";
import Feedback from "../components/Feedback";

const FeedbackSection = () => {
  return (
    <div class="flex flex-col md:flex-row mt-32 md:mx-32 md:gap-6">
      <Feedback
        imagePath="./person1.jpeg"
        feedback="The Simple Notes is a game-changer! It makes organizing my thoughts easy and adds a professional touch to every note I take."
        feedbackAuthor="Errol B.Tiozon II"
      />
      <Feedback
        imagePath="./person2.jpeg"
        feedback="I love the versatility of the Simple Notes! It transforms my plain notes into structured, visually appealing documents with just a few clicks."
        feedbackAuthor="Diego Dalla Costa"
      />
    </div>
  );
};

export default FeedbackSection;
