"use client";
import { useEffect, useRef, useState } from "react";

const ImageTransBottom = ({ image }) => {
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
                threshold: 0.3, // Triggers when 30% of the image is visible
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
        <div 
            ref={sectionRef}
            className={`${image} bg-cover bg-center w-full h-[280px] md:h-[400px] xl:h-[500px] rounded-3xl transition-all duration-[1500ms] ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}
        ></div>
    );
};

export default ImageTransBottom;