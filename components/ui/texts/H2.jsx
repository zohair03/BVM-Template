import React from "react";

const H2 = ({ text, custom }) => {
  return (
    <h2 className={`text-black text-h2 font-serif tracking-wide sm:text-3xl leading-relaxed ${custom}`}>
      {text}
    </h2>
  );
};

export default H2;
