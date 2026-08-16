import ReviewCardContent from "./ReviewCardContent";

const ReviewCard = ({ review }) => {

  return (
    <div className={`bg-white border border-black/14 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-xl max-[380px]:px-4 max-[380px]:py-8 px-8 py-8 md:py-10 lg:max-xl:px-0 text-center flex flex-col items-center justify-center gap-5 flex-shrink-0 `}>
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <ReviewCardContent review={review} />
      </div>
    </div>
  );
};

export default ReviewCard;