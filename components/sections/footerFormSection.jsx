import React from "react";
import Image from "next/image";
import ContactForm from "../ui/contactForm";
import CallButton from "../ui/buttons/callButton";
import BusinessInfo from "@/cms/business Info/businessInfo";
import { ContactUsContent } from "@/cms/content/content";
import H2 from "../ui/texts/H2";
import Label from "../ui/texts/Label";

const contactInfo = [
  {
    icon: "/icons/call.svg",
    alt: "call icon",
    text: BusinessInfo.PrimaryContactNumber,
    link: `tel:${BusinessInfo.PrimaryContactNumber}`,
    border: true,
  },
  {
    icon: "/icons/mail.svg",
    alt: "email icon",
    text: BusinessInfo.Email,
    link: `mailto:${BusinessInfo.Email}`,
    border: true,
  },
  {
    icon: "/icons/location.svg",
    alt: "location icon",
    text: BusinessInfo.Address,
    link: BusinessInfo.GoogleMaps,
    border: true,
  },
];

const FooterForm = () => {
  return (
    <section className="bg-footer-form-bg relative overflow-hidden bg-cover bg-center flex flex-col xl:flex-row gap-6 py-10 px-5 md:py-12 md:px-8 lg:py-12 lg:px-16 2xl:px-35 2xl:py-15">
      {/* Left - Contact Info */}
      <div className="relative z-10 flex flex-col gap-5 items-start xl:justify-center w-full xl:w-[60%]">
        <div className="flex flex-col gap-5 w-full">
          <div className="relative z-10 w-full flex flex-col xl:justify-center xl:flex-row gap-4 lg:gap-5 items-center xl:items-center">
            <div className="flex flex-col items-center w-full xl:items-start gap-4">
              <div className="flex flex-col gap-2 text-center items-center w-fit">
                <div className="flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
                  <Label label={ContactUsContent.label} />
                  <H2
                    text={ContactUsContent.heading}
                    custom="xl:text-left!"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mb-2 lg:gap-10 xl:gap-16 w-full">
                <div className="flex flex-col gap-6 w-full items-center xl:items-start">
                  <p className="text-color-bodytext max-[380px]:text-sm text-lg 2xl:text-xl text-center xl:text-left font-sans">
                    {ContactUsContent.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border border-black/20 rounded-3xl p-6">
            {/* Contact info rows */}
            {contactInfo.map((item) => (
              <div
                key={item.alt}
                className="flex gap-4 md:gap-5 w-full py-2 md:py-2 items-center"
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="[filter:var(--color-footer-form-icon)] md:w-[27px] md:h-[27px] flex-shrink-0"
                />
                <a
                  href={item?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-footer-form-text/80 text-base font-sans md:text-lg font-medium hover:text-footer-form-text-hover transition-colors"
                  suppressHydrationWarning={true}
                >
                  {item.text}
                </a>
              </div>
            ))}

            {/* Hours */}
            <div className="flex gap-4 md:gap-5 w-full py-2 md:py-2">
              <Image
                src="/icons/clock.svg"
                alt="time icon"
                width={24}
                height={24}
                className="[filter:var(--color-footer-form-icon)] md:w-[27px] md:h-[27px] flex-shrink-0 self-start mt-1"
              />
              <div className="flex flex-col gap-1">
                {BusinessInfo.BusinessHours.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <p className="text-base font-sans md:text-lg font-medium w-20 md:w-27">
                      {item.Day}
                    </p>
                    <p className="text-base font-sans md:text-lg">
                      {item.Timing}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Contact Form — Liquid Glass */}
      <div className="bg-white relative flex flex-col gap-5 items-start w-full xl:w-[40%] border border-black/10 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl md:text-2xl 2xl:text-3xl text-black">
              Send Us A Message
            </h3>
          </div>
          <div className="w-full">
            <ContactForm isGlass={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
