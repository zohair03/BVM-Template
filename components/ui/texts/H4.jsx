import React from "react";

const H4 = ({ text, custom }) => {
  return (
    <h4 className={`text-black font-serif text-lg leading-relaxed ${custom}`}>
      {text}
    </h4>
  );
};

export default H4;
