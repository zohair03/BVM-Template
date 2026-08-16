import PrimaryBtn from "../ui/buttons/primaryBtn";
import Label from "../ui/texts/Label";
import H2 from "../ui/texts/H2";
import ReviewCard from "../ui/cards/ReviewCard";
import { TestimonialsContent } from "@/cms/content/content";


const Reviews = () => {

  return (
    <section
      className="bg-[image:var(--color-section-bg-testimonials)] relative overflow-hidden p-8 lg:py-12 lg:px-16 2xl:px-35"
    >
      <div className="relative z-10 flex flex-col gap-6 md:gap-8">
        {/* Header */}
        <div className="relative z-10 w-full flex flex-col xl:justify-center xl:flex-row gap-4 lg:gap-5 items-center xl:items-center">
          <div className="flex flex-col items-center w-full xl:items-start gap-4">
            {/* Header */}
            <div className="flex flex-col gap-2 text-center items-center w-fit">
              <div className="flex flex-col items-center xl:items-start gap-1 md:gap-1 lg:gap-0">
                <Label label={TestimonialsContent.label} />
                <H2 text={TestimonialsContent.heading} custom="xl:text-left!" />
              </div>
            </div>
            {/* Content */}
            <div className="flex items-center justify-center gap-3 mb-2 lg:gap-10 xl:gap-16 w-full">
              {/* Text Content */}
              <div className="flex flex-col gap-6 w-full items-center xl:items-start">
                <p className="text-color-bodytext max-[380px]:text-sm text-lg 2xl:text-xl text-center xl:text-left font-sans">
                  {TestimonialsContent.subtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[80%] gap-3 md:flex-row md:w-fit justify-center">
            <PrimaryBtn btnText={TestimonialsContent.btnText} />
            <PrimaryBtn btnText={TestimonialsContent.btnText} />
          </div>
        </div>

        {/* Review Cards */}
        <div className={`flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-stretch`}>
          {TestimonialsContent.cards.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;