import React from "react";
import H2 from "../ui/texts/H2";
import Label from "../ui/texts/Label";
import { FinalCtaContent } from "@/cms/content/content.js";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import SecondaryBtn from "../ui/buttons/SecondaryBtn";

const CallIconSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="60px"
    viewBox="0 -960 960 960"
    width="60px"
    fill="#00000"
  >
    <path d="M756.5-484q-1-114.5-81.25-194.75T480.5-760v-75q73 .5 136.5 28.25t111 75.25q47.5 47.5 75.25 111T831.5-484h-75Zm-158 0q-1-49-35-83t-83-35v-75q80 1 136 57t57 136h-75ZM789-130q-120 0-238.5-53.25t-216-151.25q-98-97.5-151.25-216T130-789q0-17.5 11.75-29.25T171-830h155q14 0 24.25 8.75T363-799l26 136q2 13.5-1.25 24.25T377-620l-94.5 96q20.5 37 47.25 71t58.75 65.5q30 30 63.75 56.5T524-282l95-94q8.5-8.5 20-12t24-2l135 27q14 3.5 23 14.25t9 23.75v154q0 17.5-11.75 29.25T789-130Z" />
  </svg>
);

const ShortFinalCtaSection = () => {
  return (
    <section className="bg-primary flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-12 px-8 py-14 lg:py-18 lg:px-16 xl:py-6 2xl:px-50">
      
      <CallIconSVG/>

      <div className="relative z-10 w-full flex flex-col xl:justify-center xl:flex-row gap-4 lg:gap-5 items-center xl:items-center">
        <div className="flex flex-col items-center w-full xl:items-start gap-4">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center items-center w-fit">
            <div className="flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
              <Label label={FinalCtaContent.label} custom="text-black!"/>
              <H2 text={FinalCtaContent.heading} custom="xl:text-left!" />
            </div>
          </div>
          {/* Content */}
          <div className="flex items-center justify-center gap-3 mb-2 lg:gap-10 xl:gap-16 w-full">
            {/* Text Content */}
            <div className="flex flex-col gap-6 w-full items-center xl:items-start">
              <p className="text-black max-[380px]:text-sm text-xl 2xl:text-xl text-center xl:text-left font-sans">
                {FinalCtaContent.subtitle}
              </p>
            </div>
          </div>
        </div>
        <SecondaryBtn
          btnText={FinalCtaContent.btn2Text}
          href={FinalCtaContent.href2}
        />
      </div>

    </section>
  );
};

export default ShortFinalCtaSection;
