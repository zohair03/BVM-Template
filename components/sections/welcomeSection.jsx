import Image from "next/image";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import Label from "../ui/texts/Label";
import H2 from "../ui/texts/H2";
import { WelcomeContent } from "../../cms/content/content";

const Welcome = () => {
  return (
    <section className="bg-section-bg relative overflow-hidden py-8 px-6 sm:px-10 lg:px-12 lg:py-12 xl:px-15 2xl:px-50">
      <div className="relative z-10 flex flex-col gap-4 lg:gap-5 items-center">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center w-full">
          <div className="flex flex-col items-center gap-1 md:gap-1 lg:gap-0">
            <Label label={WelcomeContent.label} />
            <H2 text={WelcomeContent.heading} />
          </div>
        </div>

        {/* Content */}
        <div className="flex items-center justify-center gap-3 lg:gap-10 xl:gap-16 w-full">
          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full text-center items-center">
            <p className="text-color-bodytext max-[380px]:text-sm text-lg 2xl:text-xl text-center font-sans">
              {WelcomeContent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
