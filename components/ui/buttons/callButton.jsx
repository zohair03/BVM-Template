"use client";
import { useState } from "react";
import Image from "next/image";
import BusinessInfo from "../../../cms/business Info/businessInfo.js";

const CallIconSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="22px"
    fill="#ffffff"
  >
    <path d="M756.5-484q-1-114.5-81.25-194.75T480.5-760v-75q73 .5 136.5 28.25t111 75.25q47.5 47.5 75.25 111T831.5-484h-75Zm-158 0q-1-49-35-83t-83-35v-75q80 1 136 57t57 136h-75ZM789-130q-120 0-238.5-53.25t-216-151.25q-98-97.5-151.25-216T130-789q0-17.5 11.75-29.25T171-830h155q14 0 24.25 8.75T363-799l26 136q2 13.5-1.25 24.25T377-620l-94.5 96q20.5 37 47.25 71t58.75 65.5q30 30 63.75 56.5T524-282l95-94q8.5-8.5 20-12t24-2l135 27q14 3.5 23 14.25t9 23.75v154q0 17.5-11.75 29.25T789-130Z" />
  </svg>
);

const CallIcon = () => {
  return <svg 
  xmlns="http://www.w3.org/2000/svg" 
  height="22px" 
  viewBox="0 -960 960 960" 
  width="24px" 
  fill="#ffffff">
    <path d="M789-130q-120 0-238.5-53.25t-216-151.25q-98-97.5-151.25-216T130-789q0-17.5 11.75-29.25T171-830h155q14 0 24.25 8.75T363-799l26 136q2 13.5-1.25 24.25T377-620l-94.5 96q20.5 37 47.25 71t58.75 65.5q30 30 63.75 56.5T524-282l95-94q8.5-8.5 20-12t24-2l135 27q14 3.5 23 14.25t9 23.75v154q0 17.5-11.75 29.25T789-130Z"/>
  </svg>
}

const PHONE_NUMBER = BusinessInfo.PrimaryContactNumber;

// Theme colors — change here to retheme
const theme = {
  bg: "bg-primary-btn",
  bgHover: "hover:bg-primary-btn-hover",
  bgDisabled: "disabled:bg-gray-400",
  text: "text-primary-btn-text",
  textHover: "hover:text-primary-btn-text-hover",
};

const sharedClasses = `
  cursor-pointer font-serif font-medium text-[16px] uppercase
  rounded-md px-8 transition-all ease-in-out duration-300
  min-w-[90%] md:min-w-[220px] min-h-[50px]
  flex items-center justify-center
  relative overflow-hidden border border-white
`;

const CallButton = ({ btnText, custom, disabled }) => {
  const [showNumber, setShowNumber] = useState(false);

  const colorClasses = `
    ${theme.bg} ${theme.bgHover} ${theme.text} ${theme.textHover}
    ${disabled ? theme.bgDisabled : ""}
  `;

  const handleClick = () => {
    setShowNumber(!showNumber);
  };

  return (
    <>
      {/* Desktop - toggle number on click */}
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`${sharedClasses} ${colorClasses} w-[240px] px-8 transition-all ease-in-out duration-300 min-w-[220px] min-h-[50px] hidden sm:flex items-center justify-center gap-1.5 ${custom ? custom : ""}`}
      >
        {showNumber ?

          <><CallIconSVG /> {PHONE_NUMBER}</> : 
          <> <CallIcon /> {btnText}</>}
      </button>

      {/* Mobile - direct phone call */}
      <a
        href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
        className={`${sharedClasses} ${colorClasses} w-[214px] px-8 transition-all ease-in-out duration-300 min-w-[90%]  min-h-[50px] sm:hidden flex items-center justify-center gap-1 tracking-wider`}
        style={custom}
        suppressHydrationWarning={true}
      >
        <CallIcon />
        <div className="shimmer" />
        {btnText}
      </a>
    </>
  );
};

export default CallButton;
