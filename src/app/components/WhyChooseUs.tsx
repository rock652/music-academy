"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from experienced musicians and educators who are passionate about sharing their knowledge. Our instructors bring a wealth of expertise in various instruments and musical styles, providing personalized guidance to help you reach your goals. Whether you're a beginner or an advanced student, you'll receive the support and mentorship you need to excel.",
  },
  {
    title: "Diverse Course Offerings",
    description:
      "We offer a wide range of courses, from music theory and composition to instrument-specific lessons. Explore genres such as classical, jazz, rock, and pop, ensuring there's something for everyone. Our curriculum is designed to cater to different skill levels and musical interests, fostering a love for music in every student.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Showcase your talent and gain valuable experience through regular performance opportunities. Participate in recitals, masterclasses, and community events that allow you to perform in front of an audience. These experiences not only build confidence but also help you connect with fellow musicians and the local music community.",
  },
  {
    title: "Flexible Learning Options",
    description:
      "Our music school offers flexible learning options to fit your busy schedule. Choose from in-person lessons, online classes, or hybrid formats that combine both. This adaptability ensures that you can pursue your musical journey at your own pace, making it easier to balance your studies with other commitments.",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Train in a creative and inspiring environment with our state-of-the-art facilities. Our classrooms are equipped with the latest technology, instruments, and resources to enhance your learning experience. Whether you're rehearsing, recording, or taking lessons, our facilities provide the perfect backdrop for your musical education.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
