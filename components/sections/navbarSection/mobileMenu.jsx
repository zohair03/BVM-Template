"use client";
import Link from "next/link";
import CallButton from "../../ui/buttons/callButton";
import { useState } from "react";
import { aboutLinks } from "../../../cms/content/navLink.js";
import { ServicesContent } from "../../../cms/content/content.js";
import BusinessInfo from "@/cms/business Info/businessInfo";
import Image from "next/image";

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

// Instagram Icon
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 shrink-0 text-zinc-600"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Facebook Icon
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 shrink-0 text-zinc-600"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// LinkedIn Icon
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 shrink-0 text-zinc-600"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 shrink-0 text-zinc-600"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const WhereeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 400 400"
    className="w-8 h-8 shrink-0"
  >
    <rect
      x="-34"
      y="-150"
      width="68"
      height="300"
      rx="34"
      ry="34"
      fill="#000000"
      transform="translate(230,195) rotate(22)"
    />
    <rect
      x="-28"
      y="-65"
      width="56"
      height="130"
      rx="28"
      ry="28"
      fill="#000000"
      transform="translate(305,215) rotate(22)"
    />
    <g transform="translate(112,195) scale(0.72)">
      <path
        d="M0,-80 C44,-80 80,-44 80,0 C80,55 0,140 0,140 C0,140 -80,55 -80,0 C-80,-44 -44,-80 0,-80 Z"
        fill="#000000"
      />
      <circle cx="0" cy="0" r="34" fill="#ffffff" />
    </g>
  </svg>
);



const MobileMenu = ({ closeMenu, isClosing }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="flex flex-col gap-5 bg-white py-8 px-8 md:px-12 lg:px-16 lg:py-12">
      {/* Backdrop - click outside to close */}
      <div className="fixed inset-0 z-[-1] bg-black/50" onClick={closeMenu} />

      {/* Menu Panel */}
      <div
        className={`bg-white mt-[-5px] relative xl:hidden flex flex-col justify-start gap-10 font-medium text-2xl tracking-wider ${
          isClosing ? "animate-slideUp" : "animate-slideDown"
        }`}
        style={{ maxHeight: "75vh", overflowY: "auto" }}
      >
        <div className="flex flex-col">
          {/* Home */}
          <Link
            href="/"
            className="text-mobile-navbar-link hover:text-navbar-link-hover w-fit text-center py-3 transition-colors"
          >
            HOME
          </Link>

          {/* About - link + separate arrow toggle */}
          <div className="w-fit flex flex-col gap-4">
            <div className="flex justify-start gap-2">
              <Link
                href="/about"
                className="text-mobile-navbar-link hover:text-navbar-link-hover w-fit py-3 transition-colors"
              >
                ABOUT
              </Link>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="p-2 hover:text-navbar-link-hover transition-colors"
              >
                <svg
                  className={`w-8 h-8 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="#000000"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* About Sublinks */}
            {aboutOpen && (
              <div className="flex flex-col gap-4 pb-3 ml-8 animate-slideDown">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-xl font-normal uppercase text-mobile-navbar-link hover:text-navbar-link-hover transition-colors py-1"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services - link + separate arrow toggle */}
          <div className="w-fit flex flex-col gap-4">
            <div className="flex justify-start w-fit gap-2">
              <Link
                href="/services"
                onClick={closeMenu}
                className="py-3 text-mobile-navbar-link hover:text-navbar-link-hover w-fit transition-colors"
              >
                SERVICES
              </Link>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="p-2 hover:text-navbar-link-hover transition-colors"
              >
                <svg
                  className={`w-8 h-8 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="#000000"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Services Sublinks */}
            {servicesOpen && (
              <div className="flex flex-col justify-start gap-4 pb-3 ml-8 animate-slideDown">
                {ServicesContent.cards.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-xl font-normal uppercase text-mobile-navbar-link hover:text-navbar-link-hover transition-colors py-1"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Gallery */}
          <Link
            href="/gallery"
            className="w-fit text-center py-3 text-mobile-navbar-link hover:text-navbar-link-hover transition-colors"
          >
            GALLERY
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="w-fit text-center py-3 text-mobile-navbar-link hover:text-navbar-link-hover transition-colors"
          >
            CONTACT
          </Link>
        </div>

        {/* Email and Contact Number */}
        <div className="flex flex-col gap-2">
          {contactInfo.map((item) => (
            <div
              key={item.alt}
              className="flex gap-4 md:gap-5 w-full py-2 md:py-2 items-center"
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={26}
                height={26}
                className="[filter:var(--color-footer-form-icon)] md:w-[27px] md:h-[27px] flex-shrink-0"
              />
              <a
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-mobile-navbar-link text-lg tracking-wide font-sans md:text-lg font-medium hover:text-footer-form-text-hover transition-colors"
                suppressHydrationWarning={true}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex gap-7">
          <a
            className="hover:scale-120 active:scale-95 transition-all duration-200"
            href={BusinessInfo.SocialMedia.Facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            className="hover:scale-120 active:scale-95 transition-all duration-200"
            href={BusinessInfo.SocialMedia.Instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            className="hover:scale-120 active:scale-95 transition-all duration-200"
            href={BusinessInfo.SocialMedia.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            className="hover:scale-120 active:scale-95 transition-all duration-200"
            href={BusinessInfo.SocialMedia.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
          </a>
          <a
            className="hover:scale-120 active:scale-95 transition-all duration-200"
            href={BusinessInfo.SocialMedia.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image height={30} width={30} src="/icons/yelp.svg" alt="yelp logo"/>
          </a>
          <a
            className="hover:scale-120 active:scale-95 transition-all duration-200"
            href={BusinessInfo.SocialMedia.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhereeIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
