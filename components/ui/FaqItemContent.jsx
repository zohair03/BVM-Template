const FaqItemContent = ({ faq, isOpen, customQus, customAns }) => (
  <div className="flex flex-col">
    <p className={`font-bold uppercase font-sans max-[380px]:text-lg text-xl md:text-2xl leading-snug text-gray-800 ${customQus}`}>
      {faq.question}
    </p>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className={`mt-3 font-sans max-[380px]:text-sm text-base md:text-lg text-gray-800 max-[380px]:leading-5 leading-relaxed pr-8 ${customAns}`}>
        {faq.answer}
      </p>
    </div>
  </div>
);

export default FaqItemContent;