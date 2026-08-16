import BusinessInfo from "@/cms/business Info/businessInfo";

const MapSection = () => {

  return (
    <div className="p-0 w-full">
      <div className="w-full h-[200px] md:h-[350px] lg:h-[350px] xl:h-[360px]">
        <iframe
          src={BusinessInfo.SocialMedia.GoogleMapsiframe}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${BusinessInfo.BusinessName} Location`}
        />
      </div>
    </div>
  );
};

export default MapSection;