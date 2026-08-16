"use client";
import { useState } from "react";
import H2 from "../ui/texts/H2";
import Label from "../ui/texts/Label";
import FaqItem from "../ui/FaqItem";
import ImageTransBottom from "../ui/ImageTransBottom";


const Faqs = ({
  bgColor = "bg-white",
  isImage = true,
  content,
  customAns,
  customQus,
}) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className={`${bgColor} relative flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-10 overflow-hidden max-[380px]:px-5 px-8 py-12 lg:py-12 lg:px-16 xl:py-16 2xl:px-50`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="z-1 flex flex-col items-center w-full xl:w-1/2 xl:items-start gap-6">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center w-fit">
          <div className="z-1 flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
            <Label label={content.label} custom="text-white" />
            <H2 text={content.heading} custom="xl:text-left! text-white" />
          </div>
        </div>
        {/* Content */}
        <div>
          {content.questions.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
              customAns={customAns}
              customQus={customQus}
            />
          ))}
        </div>
      </div>
      {isImage && (
        <div
          className={`w-full xl:w-1/2 z-1 transition-all duration-700 ease-out delay-500`}
        >
          <ImageTransBottom image={content.image} />
        </div>
      )}
    </section>
  );
};

export default Faqs;