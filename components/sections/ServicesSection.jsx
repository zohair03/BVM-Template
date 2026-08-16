import React from "react";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import Label from "../ui/texts/Label";
import H2 from "../ui/texts/H2";
import { ServicesContent } from "../../cms/content/content";
import H4 from "../ui/texts/H4";

const ServicesSection = () => {
  return (
    <section className={`relative ${ServicesContent.bgImage} flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-8 px-4 pt-14 md:pt-8 pb-6 m-4 xl:px-10 xl:py-16 xl:m-10 rounded-4xl`}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 rounded-4xl" />

      <div className="w-full xl:w-1/2">
        <div className="sticky top-40 fixed-top w-full flex flex-col xl:justify-start xl:items-start gap-6 lg:gap-5 items-center">
          <div className="flex flex-col items-center w-full xl:items-start gap-2">
            {/* Header */}
            <div className="flex flex-col text-center items-center w-fit">
              <div className="flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
                <Label label={ServicesContent.label} custom="text-white" />
                <H2
                  text={ServicesContent.heading}
                  custom="xl:text-left! text-white"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex items-center justify-center gap-3 lg:gap-10 xl:gap-16 w-full">
              {/* Text Content */}
              <div className="flex flex-col gap-6 w-full items-center xl:items-start">
                <p className="text-white/90 max-[380px]:text-sm text-lg 2xl:text-xl text-center xl:text-left font-sans">
                  {ServicesContent.subtitle}
                </p>
              </div>
            </div>
          </div>
          <PrimaryBtn btnText={ServicesContent.btnText} href={ServicesContent.href} />
          <div className={`${ServicesContent.bgImage} bg-cover mt-2 w-full h-[280px] md:h-[400px] xl:h-[360px] border border-white rounded-3xl`}></div>
        </div>
      </div>

      <div className="w-full xl:w-1/2 flex flex-col gap-6 z-1">
        {ServicesContent.cards.map((card, index) => (
          <div key={index} className="bg-white rounded-3xl flex flex-col md:flex-row gap-5 xl:gap-6 p-6 md:p-5 xl:p-6 transition-transform duration-600 hover:translate-x-2">
            <div className={`${card.image} bg-cover bg-center flex-shrink-0 rounded-2xl w-full md:w-[250px] lg:w-[40%] xl:w-[35%] h-[170px] md:h-[180px] xl:h-[95%]`}></div>
            <div className="relative xl:w-1/2 z-10 flex flex-col gap-2 md:gap-3 items-center justify-center md:items-start">
              <div className="flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
                <H4
                  text={card.title}
                  custom="xl:text-left!"
                />
              </div>
              <div className="flex w-full">
                <p className="text-color-bodytext max-[380px]:text-sm text-base 2xl:text-xl text-center md:text-start font-sans">
                  {card.description}
                </p>
              </div>
              <PrimaryBtn btnText={card.btnText} href={card.href}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
