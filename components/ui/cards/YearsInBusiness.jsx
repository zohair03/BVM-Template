"use client";
import { useEffect, useState } from "react";

const YearsInBusiness = ({ years, sectionRef, whenVisible }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set up the Intersection Observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // The section has entered the viewport
                    setIsVisible(true);
                } else {
                    // The section is no longer intersecting.
                    // If the section's top is less than 0, it means it is ABOVE the viewport 
                    // (the user scrolled down past the section). In this case, keep it visible.
                    if (entry.boundingClientRect.top < 0) {
                        setIsVisible(true);
                    } else {
                        // Otherwise, the section is BELOW the viewport 
                        // (the user scrolled back up to the top of the page). Hide it.
                        setIsVisible(false);
                    }
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: whenVisible, // Triggers when 80% of the section is visible. Adjust as needed.
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup the observer on unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [sectionRef]); // Added sectionRef to dependencies

    return (
        <div className={`z-1 absolute -bottom-8 -left-4 md:-left-8 flex flex-col items-center justify-center w-[250px] h-[130px] md:h-[150px] xl:h-[160px] bg-primary border-[4px] border-white rounded-3xl text-white transition-all duration-[800ms] ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}>
            <h2 className="text-4xl xl:text-6xl font-bold leading-none">{years}+</h2>
            <p className="mt-2 text-base md:text-md xl:text-base font-semibold uppercase leading-tight text-center">
                Years in Business
            </p>
        </div>
    );
};

export default YearsInBusiness;