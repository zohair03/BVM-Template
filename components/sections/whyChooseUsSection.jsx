import React from "react";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import H2 from "../ui/texts/H2";
import Label from "../ui/texts/Label";
import WhyCard from "../ui/cards/WhyCard";
import { WhyChooseUsContent } from "@/cms/content/content";


const WhyChooseUs = () => {

  return (
    <section
      className="relative overflow-hidden px-8 py-14 lg:py-18 lg:px-16 2xl:px-50"
    >
      <div className="relative z-10 h-full">
        <div className="flex gap-8 md:gap-10 flex-col items-center justify-center xl:items-start">
          
          <div className="relative z-10 w-full flex flex-col xl:justify-center xl:flex-row gap-4 lg:gap-5 items-center xl:items-center">
            <div className="flex flex-col items-center w-full xl:items-start gap-4">
              {/* Header */}
              <div className="flex flex-col gap-2 text-center items-center w-fit">
                <div className="flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
                  <Label label={WhyChooseUsContent.label} />
                  <H2
                    text={WhyChooseUsContent.heading}
                    custom="xl:text-left!"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="flex items-center justify-center gap-3 mb-2 lg:gap-10 xl:gap-16 w-full">
                {/* Text Content */}
                <div className="flex flex-col gap-6 w-full items-center xl:items-start">
                  <p className="text-color-bodytext max-[380px]:text-sm text-lg 2xl:text-xl text-center xl:text-left font-sans">
                    {WhyChooseUsContent.description}
                  </p>
                </div>
              </div>
            </div>
            <PrimaryBtn btnText={WhyChooseUsContent.btnText} />
          </div>

          <div className="w-full flex flex-col xl:flex-row gap-5 justify-between">
            {WhyChooseUsContent.cards.map((card, index) => (
              <WhyCard
                key={index}
                card={card}
              />
            ))}
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-5 justify-between">
            {WhyChooseUsContent.cards2.map((card, index) => (
              <WhyCard
                key={index}
                card={card}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
