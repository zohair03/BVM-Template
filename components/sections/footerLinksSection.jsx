import Link from "next/link";
import Image from "next/image";
import CallButton from "../ui/buttons/callButton";
import BusinessInfo from "@/cms/business Info/businessInfo";
import { ServicesContent } from "@/cms/content/content";
import { navLinks, aboutLinks, privacyPolicy } from "@/cms/content/navLink";


// Call Icon
const CallIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#e3e3e3"
  >
    <path d="M756.5-484q-1-114.5-81.25-194.75T480.5-760v-75q73 .5 136.5 28.25t111 75.25q47.5 47.5 75.25 111T831.5-484h-75Zm-158 0q-1-49-35-83t-83-35v-75q80 1 136 57t57 136h-75ZM789-130q-120 0-238.5-53.25t-216-151.25q-98-97.5-151.25-216T130-789q0-17.5 11.75-29.25T171-830h155q14 0 24.25 8.75T363-799l26 136q2 13.5-1.25 24.25T377-620l-94.5 96q20.5 37 47.25 71t58.75 65.5q30 30 63.75 56.5T524-282l95-94q8.5-8.5 20-12t24-2l135 27q14 3.5 23 14.25t9 23.75v154q0 17.5-11.75 29.25T789-130Z" />
  </svg>
);

// Instagram Icon
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
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
    stroke="#ffffff"
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
    stroke="#ffffff"
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

// YoutubeIcon
const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
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
      fill="#ffffff"
      transform="translate(230,195) rotate(22)"
    />
    <rect
      x="-28"
      y="-65"
      width="56"
      height="130"
      rx="28"
      ry="28"
      fill="#ffffff"
      transform="translate(305,215) rotate(22)"
    />
    <g transform="translate(112,195) scale(0.72)">
      <path
        d="M0,-80 C44,-80 80,-44 80,0 C80,55 0,140 0,140 C0,140 -80,55 -80,0 C-80,-44 -44,-80 0,-80 Z"
        fill="#ffffff"
      />
      <circle cx="0" cy="0" r="34" fill="#0000000" />
    </g>
  </svg>
);



const quickLinks1 = [
  { title: "Home", href: "/" },
  { title: "About Us", href: navLinks[1].href },
  { title: "FAQs", href: aboutLinks[1].href },
];

const quickLinks2 = [
  { title: "Contact Us", href: navLinks[4].href },
  { title: "Services", href: navLinks[2].href },
  { title: "Gallery", href: aboutLinks[2].href },
];

const servicesLinks1 = [
  { title: "Computer & Mac Repairs", href: "/" },
  { title: "Gaming Console Repair", href: "/" },
  { title: "New & Used Computers", href: "/" },
  { title: "Networking Services", href: "/" },
  { title: "Server & IT Support", href: "/" },
  { title: "Recycle & Disposal", href: "/" },
];

const FooterLinks = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-footer-bg via-footer-bg to-footer-bg-gradient text-white font-sans">
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-1 top-[20%] left-[5%] opacity-50" />
      <div className="floating-orb floating-orb-3 bottom-[15%] right-[8%] opacity-40" />

      {/* Main Footer */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        {/* Col 1 - Logo + CTA + Social */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-1/4">
          {/* Logo */}
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="logo-glow text-5xl lg:text-3xl xl:text-5xl text-red-500 flex flex-col items-center"
            >
              {BusinessInfo.isLogo ? (
                <Image
                  src={BusinessInfo.Logo}
                  alt={`${BusinessInfo.Name} Logo`}
                  width={BusinessInfo.LogoSize + 50}
                  height={BusinessInfo.LogoSize + 50}
                  className="object-cover rounded-lg"
                />
              ) : (
                <p className="text-xl font-serif text-center tracking-widest text-primary uppercase">
                  Apex! Computer
                </p>
              )}
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <CallButton btnText="Call Us Now" />
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex gap-7 flex-wrap items-center justify-center xl:w-[70%]">
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Linkedin} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </a>
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Linkedin} target="_blank" rel="noopener noreferrer">
              <Image height={30} width={30} src="/icons/yelp.svg" alt="yelp logo" className="brightness-0 invert" />
            </a>
            <a className="hover:scale-120 active:scale-95 transition-all duration-200" href={BusinessInfo.SocialMedia.Linkedin} target="_blank" rel="noopener noreferrer">
              <WhereeIcon />
            </a>
          </div>
        </div>

        {/* Col 2 - Quick Links — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4 p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div className="flex flex-col gap-3">
                {quickLinks1.map((link) => (
                  <Link
                    key={link.title + link.href}
                    href={link.href}
                    className="text-footer-text hover:text-footer-text-hover text-sm md:text-base transition-colors pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {quickLinks2.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-footer-text hover:text-footer-text-hover text-sm md:text-base transition-colors pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Col 3 - Services — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4 p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Services
            </h4>
            <div className="">
              <div className="flex flex-col gap-3">
                {ServicesContent.cards.map((link) => (
                  <Link
                    key={link.title + link.href}
                    href={link.href}
                    className="text-footer-text hover:text-footer-text-hover text-sm md:text-base transition-colors pb-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Col 4 - Contact Us — Glass Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4 p-6">
          <div className="glass-content flex flex-col gap-4">
            <h4 className="text-white text-left text-base lg:text-lg font-bold tracking-widest uppercase border-b border-white/20 pb-3">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${BusinessInfo.PrimaryContactNumber}`} className="text-footer-text hover:text-footer-text-hover text-sm md:text-base transition-colors">
                {BusinessInfo.PrimaryContactNumber}
              </a>
              <a href={`mailto:${BusinessInfo.Email}`} className="text-footer-text hover:text-footer-text-hover text-sm md:text-base transition-colors">
                {BusinessInfo.Email}
              </a>
              <a
                href={BusinessInfo.GoogleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text hover:text-footer-text-hover text-sm md:text-base leading-relaxed transition-colors"
              >
                {BusinessInfo.Address}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 px-6 sm:px-10 lg:px-16 py-6 flex flex-col items-center gap-2 text-center">
        <p className="text-footer-text text-xs sm:text-sm">
          © 2026 &nbsp; The content on this website is owned by us and our
          licensors
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-footer-text">
          <Link href={privacyPolicy.href} className="hover:text-footer-text-hover transition-colors">
            Privacy Policy
          </Link>
          <Link href={privacyPolicy.href} className="hover:text-footer-text-hover transition-colors">
            Do Not Sell/Share My Personal Information
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
