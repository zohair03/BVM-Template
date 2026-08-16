import { MarqueeText } from "../../cms/content/content";


const SimpleMarquee = () => {
  return (
    <div className="font-sans w-full overflow-hidden bg-white py-4 md:py-4 group">
      <div
        className="flex led-scroll-track whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {/* First set */}
        {MarqueeText.map((item, i) => (
          <span
            key={`a-${i}`}
            className="text-xl md:text-xl font-normal text-black mx-6 md:mx-10"
          >
            {item}
          </span>
        ))}

        {/* Duplicate set for seamless loop */}
        {MarqueeText.map((item, i) => (
          <span
            key={`b-${i}`}
            className="text-xl md:text-xl font-normal text-black mx-6 md:mx-10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimpleMarquee;