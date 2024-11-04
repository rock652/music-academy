"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolAcademyTestimonials = [
  {
    name: "Harmony of Sound",
    title: "Exploring Musical Emotions",
    quote: "Music is the shorthand of emotion.",
  },
  {
    name: "Rhythm of Life",
    title: "Understanding the Pulse of Music",
    quote: "Where words fail, music speaks.",
  },
  {
    name: "Melody in Motion",
    title: "Crafting Beautiful Tunes",
    quote: "Music can change the world because it can change people.",
  },
  {
    name: "The Art of Composition",
    title: "Structuring Your Musical Ideas",
    quote: "Composition gives shape to the chaotic flow of sound.",
  },
  {
    name: "Voices of Tomorrow",
    title: "Nurturing Future Artists",
    quote: "Every artist was first an amateur.",
  },
];

const TestimonialCard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony: voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolAcademyTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
