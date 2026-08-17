import React from "react";

const HeroHeading = ({ text, custom }) => {
  return (
    <h1
      className={`flex justify-center items-center font-serif font-extrabold text-h1-mobile md:text-h1-tablet xl:text-h1-laptop 2xl:text-h1-large text-color-herotext leading-9 md:leading-12 pt-25 text-center uppercase sm:w-4/5
              transition-all duration-700 ease-out ${custom}`}
      style={{ transitionDelay: "100ms" }}
    >
      {text}
    </h1>
  );
};

export default HeroHeading;

// ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
