"use client";
import Image from "next/image";
import { useRef } from "react";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import Label from "../ui/texts/Label";
import H2 from "../ui/texts/H2";
import ImageFlash from "../ui/ImageFlash";
import YearsInBusiness from "../ui/cards/YearsInBusiness";

const AboutUsSection = ({ content, isFlashImg = false, imageLeft = false }) => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={`flex items-center flex-col ${imageLeft ? "xl:flex-row-reverse" : "xl:flex-row"} gap-6 relative overflow-hidden py-8 px-6 sm:px-10 lg:px-12 lg:py-12 xl:px-15 2xl:px-50`}>
      {/* Content */}
      <div className="relative xl:w-1/2 z-10 flex flex-col gap-4 lg:gap-5 items-center xl:items-start">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center w-fit">
          <div className="flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
            <Label label={content.label} />
            <H2 text={content.heading} custom="xl:text-left!" />
          </div>
        </div>
        {/* Content */}
        <div className="flex items-center justify-center gap-3 lg:gap-10 xl:gap-16 w-full">
          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full text-center items-center">
            <p className="text-color-bodytext max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              {content.description}
            </p>
          </div>
        </div>
        <PrimaryBtn btnText={content.btnText} />
      </div>

      {/* Image */}
      {
        isFlashImg ?
          <ImageFlash image1={content.image1} image2={content.image2} />
          : <div className="flex items-center justify-center xl:w-1/2">
            <div className="relative w-fit">
              <Image
                src={content.image1}
                alt="About Us"
                width={500}
                height={500}
                className="w-[500px] h-[285px] md:w-[500px] md:h-[500px] md:w-full object-cover shadow-xl rounded-3xl"
              />
              <YearsInBusiness years="20" whenVisible={0.9} sectionRef={sectionRef} />
            </div>
          </div>
      }

    </section>
  );
};

export default AboutUsSection;