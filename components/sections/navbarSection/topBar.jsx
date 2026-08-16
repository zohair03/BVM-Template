import Image from "next/image";
import Link from "next/link";
import BusinessInfo from "../../../cms/business Info/businessInfo"

const TopBar = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="bg-topbar-bg flex justify-between items-center py-2 px-4 md:px-4 xl:px-8 2xl:px-30 relative border-b border-black/5">
      {/* Left group: Reviews */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-topbar-text tracking-tight">
            {BusinessInfo.SocialMedia.GoogleReviews.rating}
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/icons/reviews-star.svg"
                alt="Reviews stars"
                width={16}
                height={16}
                className="color-review-star"
              />
            ))}
          </div>
          <Link
            href= {BusinessInfo.GoogleMaps}
            className="text-[0.85rem] text-topbar-text underline decoration-white hover:decoration-topbar-text-hover underline-offset-2 hover:text-topbar-text-hover transition-colors"
          >
            {BusinessInfo.SocialMedia.GoogleReviews.reviews}
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center flex-row-reverse">
          {/* Location */}
          <Link href={BusinessInfo.GoogleMaps} target="_blank" className="hover:[filter:var(--color-topbar-icon-hover)] text-topbar-text hover:text-topbar-text-hover flex items-center gap-2 pr-2 border-l border-black/10">
            <Image
              src="/icons/location-fill.svg"
              alt="Location"
              width={18}
              height={18}
              className="[filter:var(--color-topbar-icon)]"
            />
            <span className="text-md">
              <span className="">{BusinessInfo.ShortAddress}</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;