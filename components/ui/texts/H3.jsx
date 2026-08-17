import React from "react";

const H3 = ({ text, custom }) => {
  return (
    <h4 className={`text-black font-serif text-center md:text-start font-extrabold leading-snug uppercase text-h3-mobile md:text-h3-tablet xl:text-h3-laptop 2xl:text-h3-large ${custom}`}>
      {text}
    </h4>
  );
};

export default H3;
