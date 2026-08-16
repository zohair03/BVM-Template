import SubpageHero from "@/components/sections/subpageHero";
import {Abouthero, AboutSection1, AboutSection2} from "@/cms/content/content";
import TextAndImage from "@/components/sections/textAndImageSection";


const AboutUs = () => {
    return(
        <>
            <SubpageHero content={Abouthero} />
            <TextAndImage content={AboutSection1}/>
            <TextAndImage imageLeft={true} content={AboutSection2}/>
        </>
    )
}

export default AboutUs;
