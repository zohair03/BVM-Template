import WhyChooseUs from "@/components/sections/whyChooseUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Hero from "@/components/sections/heroSection";
import Reviews from "@/components/sections/reviewsSection";
import TextAndImage from "@/components/sections/textAndImageSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import Faqs from "@/components/sections/faqSection";
import SimpleMarquee from "@/components/ui/simpleMarqueeText";
import Welcome from "@/components/sections/welcomeSection";
import { AboutUsContent, FaqsContent } from "@/cms/content/content";


export default function Home() {
  return (
    <main>
      <Hero />
      <SimpleMarquee/>
      <Welcome/>
      <AboutUsSection content={AboutUsContent}/>
      <WhyChooseUs />
      <ServicesSection />
      <Reviews />
      <Faqs bgColor="bg-[url('/images/image6.webp')]" content={FaqsContent} customAns="text-white" customQus="text-white" />
    </main>
  );
}