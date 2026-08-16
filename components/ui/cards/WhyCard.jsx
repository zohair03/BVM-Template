'use client';
import React, { useEffect, useState, useRef } from "react";
import WhyCardContent from "./WhyCardContent";

const WhyCard = ({ card }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // The image has entered the viewport
          setIsVisible(true);
        } else {
          // If scrolled down past the image, keep it visible
          if (entry.boundingClientRect.top < 0) {
            setIsVisible(true);
          } else {
            // If scrolled back up above the image, reset the animation
            setIsVisible(false);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4, // Triggers when 30% of the image is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`border border-black/14  w-full xl:w-1/3 p-4 pb-6 rounded-2xl flex items-start gap-4 transition-all duration-[1500ms] ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}>
      <div className="flex items-start gap-4 w-full">
        <WhyCardContent card={card} />
      </div>
    </div>
  );
};

export default WhyCard;