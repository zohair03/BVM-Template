import FaqItemContent from "./FaqItemContent";

const FaqItem = ({ faq, isOpen, onToggle, customAns, customQus }) => (
  <div
    className={`px-2 py-4 md:px-2 md:py-4 mb-0 border-b border-white cursor-pointer transition-all duration-700 ease-out transform`}
    onClick={onToggle}
  >
    <div className="flex justify-between items-start gap-4">
      <FaqItemContent faq={faq} isOpen={isOpen} customAns={customAns} customQus={customQus}/>
      <div className="bg-plus-bg flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-md  flex items-center justify-center transition-transform duration-300">
        <div className="flex items-center justify-center text-plus-icon max-[380px]:text-base text-xl font-light">
          {isOpen ? "−" : "+"}
        </div>
      </div>
    </div>
  </div>
);

export default FaqItem;