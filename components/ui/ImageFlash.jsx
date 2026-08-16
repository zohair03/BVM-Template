"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ImageFlash({ image1, image2 }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // The images have entered the viewport
          setIsVisible(true);
        } else {
          // If scrolled down past the images, keep them visible
          if (entry.boundingClientRect.top < 0) {
            setIsVisible(true);
          } else {
            // If scrolled back up above the images, reset the animation
            setIsVisible(false);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
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
    <div ref={sectionRef} className="flex justify-center items-center gap-4 md:gap-6 pt-5 md:py-20">
      
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 100 
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={image1}
          alt="Team"
          width={350}
          height={500}
          className="w-[170px] h-[240px] md:w-[350px] md:h-[500px] object-cover rounded-3xl"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -100 
        }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src={image2}
          alt="Office"
          width={350}
          height={500}
          className="w-[170px] h-[240px] md:w-[350px] md:h-[500px] object-cover rounded-3xl"
        />
      </motion.div>
    </div>
  );
}