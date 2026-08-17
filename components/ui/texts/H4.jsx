import React from "react";

const H4 = ({ text, custom }) => {
  return (
    <h4 className={`text-black font-serif text-center md:text-start font-extrabold leading-snug uppercase text-h4-mobile md:text-h4-tablet xl:text-h4-laptop 2xl:text-h4-large ${custom}`}>
      {text}
    </h4>
  );
};

export default H4;
