"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import H2 from "../../ui/texts/H2";
import PrimaryBtn from "../../ui/buttons/primaryBtn";



const MegaMenu = ({
  items,
  content,
  isClosing,
  navbarBottom,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const rowHeight = 155;
  const visibleRows = 2;
  const peekAmount = 60;

  const totalRows = Math.ceil(items.length / 3);
  const needsScroll = totalRows > visibleRows;

  const maxHeight = needsScroll ? rowHeight * visibleRows + peekAmount : "auto";

  return createPortal(
    <div
      style={{ top: navbarBottom }}
      className={`flex  bg-white mt-[-5px] mx-20 inset-x-0 fixed left-0 z-[45] ${
        isClosing ? "animate-slideUp" : "animate-slideDown"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-secondary w-[25%] flex flex-col gap-4 lg:gap-5 p-10">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center w-fit">
          <div className="flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
            <H2 text={content.heading} custom="xl:text-left! font-extrabold!" />
          </div>
        </div>
        {/* Content */}
        <div className="flex items-center justify-center gap-3 lg:gap-10 xl:gap-16 w-full">
          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full text-center items-center">
            <p className="text-color-bodytext max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              {content.subtitle}
            </p>
          </div>
        </div>
        <PrimaryBtn btnText={content.btnText} href={content.href} />
      </div>

      <div className="w-[75%]">
        {/* Scrollable container with dynamic max height */}
        <div
          className="overflow-y-auto px-8 py-8 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent"
          style={{
            maxHeight: needsScroll ? `${maxHeight}px` : "auto",
          }}
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="transition-transform duration-400 hover:-translate-y-2 flex items-start gap-6 group p-3 transition-colors transition-all ease-in-out duration-600"
              >
                {/* image */}
                <div className={`${item.image} bg-cover bg-center flex-shrink-0 w-[95px] h-[110px] relative rounded-md overflow-hidden`}></div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-serif text-left text-gray-900 font-bold leading-snug uppercase text-h4-mobile md:text-h4-tablet xl:text-h4-laptop 2xl:text-h4-large">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 font-sans text-sm leading-5">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll indicator - only shows when there are more cards below */}
        {needsScroll && (
          <div className="flex justify-center items-center py-2 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex flex-col items-center gap-1 text-white/60">
              <p className="text-sm text-white font-medium">Scroll for more</p>
              <svg
                className="w-4 h-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default MegaMenu;
