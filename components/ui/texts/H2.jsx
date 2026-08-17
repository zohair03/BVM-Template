import React from "react";

const H2 = ({ text, custom }) => {
  return (
    <h2 className={`text-black font-serif font-extrabold leading-10 uppercase text-h2-mobile md:text-h2-tablet xl:text-h2-laptop 2xl:text-h2-large ${custom}`}>
      {text}
    </h2>
  );
};

export default H2;
