import React from "react";

const HeroSubtitle = ({ text, custom }) => {
  return (
    <p
      className={`max-[450px]:mt-[-5px] mt-[-20px] mb-[15px] font-sans font-medium max-[380px]:w-full w-[90%] max-[380px]:text-sm text-lg 2xl:text-2xl leading-tight sm:w-4/5 md:w-3/5 text-center sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-white/90
              transition-all duration-700 ease-out ${custom}`}
      style={{ transitionDelay: "250ms" }}
    >
      {text}
    </p>
  );
};

export default HeroSubtitle;

// ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
