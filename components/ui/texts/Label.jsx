import React from "react";

const Label = ({ label, custom }) => {
  return (
    <p className={`text-label-text w-fit font-sans uppercase font-medium tracking-widest text-center text-base md:text-lg ${custom}`}>
      {label}
    </p>
  );
};

export default Label;
