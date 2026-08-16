"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopBar from "./topBar";
import NavLinks from "./navLinks";
import MegaMenu from "./megaMenu";
import MobileMenu from "./mobileMenu";
import CallButton from "../../ui/buttons/callButton";
import { aboutLinks } from "@/cms/content/navLink.js";
import {
  ServicesContent,
  AboutUsMegaMenuContent,
  ServicesMegaMenuContent,
} from "@/cms/content/content.js";
import BusinessInfo from "@/cms/business Info/businessInfo";

const CallIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="35px"
      viewBox="0 -960 960 960"
      width="35px"
      fill="#ffffff"
    >
      <path d="M789-130q-120 0-238.5-53.25t-216-151.25q-98-97.5-151.25-216T130-789q0-17.5 11.75-29.25T171-830h155q14 0 24.25 8.75T363-799l26 136q2 13.5-1.25 24.25T377-620l-94.5 96q20.5 37 47.25 71t58.75 65.5q30 30 63.75 56.5T524-282l95-94q8.5-8.5 20-12t24-2l135 27q14 3.5 23 14.25t9 23.75v154q0 17.5-11.75 29.25T789-130Z" />
    </svg>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [megaClosing, setMegaClosing] = useState(false);
  const [navbarBottom, setNavbarBottom] = useState(0);
  const navbarRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveMega(null);
    setMegaClosing(false);
    setMenuOpen(false);
  }, [pathname]);

  const updateNavbarBottom = () => {
    if (navbarRef.current) {
      const rect = navbarRef.current.getBoundingClientRect();
      setNavbarBottom(rect.bottom);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateNavbarBottom();
    }, 100);

    window.addEventListener("scroll", updateNavbarBottom);
    window.addEventListener("resize", updateNavbarBottom);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateNavbarBottom);
      window.removeEventListener("resize", updateNavbarBottom);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const openMega = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    updateNavbarBottom();
    setMegaClosing(false);
    setActiveMega(name);
  };

  const closeMega = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaClosing(true);
      setTimeout(() => {
        setActiveMega(null);
        setMegaClosing(false);
      }, 300);
    }, 100);
  };

  const cancelClose = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMegaClosing(false);
    setActiveMega(name);
  };

  const CallIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="35px"
        viewBox="0 -960 960 960"
        width="35px"
        fill= {scrolled ? "#000000" : "#ffffff"}
      >
        <path d="M789-130q-120 0-238.5-53.25t-216-151.25q-98-97.5-151.25-216T130-789q0-17.5 11.75-29.25T171-830h155q14 0 24.25 8.75T363-799l26 136q2 13.5-1.25 24.25T377-620l-94.5 96q20.5 37 47.25 71t58.75 65.5q30 30 63.75 56.5T524-282l95-94q8.5-8.5 20-12t24-2l135 27q14 3.5 23 14.25t9 23.75v154q0 17.5-11.75 29.25T789-130Z" />
      </svg>
    );
  };

  return (
    <nav className="">
      <div className="top-0 inset-x-0 fixed z-50 font-sans" ref={navbarRef}>
        {/* Row 1: TopBar (Responsive logic inside TopBar) */}
        <TopBar menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Row 2 (Desktop) / Rows 2 & 3 (Mobile) */}
        <div
          className={`mx-0 relative px-4 md:px-16 2xl:px-30 py-4 lg:py-4 transition-colors duration-300 ${scrolled ? "bg-navbar-color-after-scroll backdrop-blur-md" : "bg-transparent"}`}
        >
          {/* Desktop Layout */}
          <div
            className="hidden xl:flex justify-between items-center"
            onMouseLeave={closeMega}
          >
            {/* Logo */}
            <Link href="/">
              {BusinessInfo.isLogo ? (
                <Image
                  src={BusinessInfo.Logo}
                  alt={`${BusinessInfo.Name} Logo`}
                  width={BusinessInfo.LogoSize}
                  height={BusinessInfo.LogoSize}
                  className="object-cover rounded-lg"
                />
              ) : (
                <p className="text-2xl font-serif  text-center text-primary tracking-widest uppercase">
                  {BusinessInfo.Logo}
                </p>
              )}
            </Link>

            {/* Desktop Nav Links */}
            <div className="flex-1 flex justify-center">
              <NavLinks
                activeMega={activeMega}
                setActiveMega={openMega}
                scrolled={scrolled}
              />
            </div>

            {/* CTA Button */}
            <CallButton btnText="Call Us Now" />
          </div>

          {/* Mobile Layout */}
          <div className="xl:hidden flex justify-between items-center gap-3">
            {/* call icon */}
            {/* <div className="w-[45px] h-[45px] bg-[url('/icons/call.svg')] bg-cover bg-center [filter: brightness(1) invert(0)]" /> */}

            <Link href={`tel:${BusinessInfo.Phone}`}>
              <CallIcon />
            </Link>

            {/* Mobile Logo (Centered) */}
            <Link href="/" className="flex justify-center">
              {BusinessInfo.isLogo ? (
                <Image
                  src={BusinessInfo.Logo}
                  alt={`${BusinessInfo.Name} Logo`}
                  width={BusinessInfo.LogoSize}
                  height={BusinessInfo.LogoSize}
                  className="object-cover rounded-lg"
                />
              ) : (
                <p className="text-base md:text-2xl font-serif text-center tracking-widest text-primary tracking-widest uppercase">
                  {BusinessInfo.Logo}
                </p>
              )}
            </Link>

            {/* Hamburger */}
            <div className="flex items-center">
              <button
                className="xl:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-l border-black/20"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <div
                  className={`w-6 h-0.5  ${scrolled ? "bg-navbar-link-after-scroll" : "bg-navbar-link"} transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <div
                  className={`w-6 h-0.5 ${scrolled ? "bg-navbar-link-after-scroll" : "bg-navbar-link"} transition-all ${menuOpen ? "opacity-0" : ""}`}
                />
                <div
                  className={`w-6 h-0.5 ${scrolled ? "bg-navbar-link-after-scroll" : "bg-navbar-link"} transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <MobileMenu closeMenu={toggleMenu} isClosing={menuClosing} />
        )}
      </div>

      {/* Mega Menus Portals */}
      {activeMega === "about" && (
        <MegaMenu
          items={aboutLinks}
          content={AboutUsMegaMenuContent}
          isClosing={megaClosing}
          navbarBottom={navbarBottom}
          onMouseEnter={() => cancelClose("about")}
          onMouseLeave={closeMega}
        />
      )}
      {activeMega === "services" && (
        <MegaMenu
          items={ServicesContent.cards}
          content={ServicesMegaMenuContent}
          isClosing={megaClosing}
          navbarBottom={navbarBottom}
          onMouseEnter={() => cancelClose("services")}
          onMouseLeave={closeMega}
        />
      )}
    </nav>
  );
};

export default Navbar;
