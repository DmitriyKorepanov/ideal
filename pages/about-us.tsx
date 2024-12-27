import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { TPage } from "@/constants/types";
import UniversalCardSection from "@/components/sections/UniversalCardSection/UniversalCardSection";
import SlickSliderMultiSlide from "@/components/SlickSliderMultiSlide/SlickSliderMultiSlide";
import TitleSection from "@/components/sections/TitleSection/TitleSection";
import FormSection from "@/components/sections/FormSection/FormSection";
import CustomCardSection from "@/components/sections/CustomCardSection/CustomCardSection";
import AboutUsVisionSection from "@/components/sections/AboutUsVisionSection/AboutUsVisionSection";
import AboutUsMobileVisionSection from "@/components/sections/AboutUsMobileVisionSection/AboutUsMobileVisionSection";

import backgroundSection from "../public/images/aboutUs/section-background.png";
import work from "../public/images/aboutUs/work.png";
import sertificate1 from "../public/images/aboutUs/sertificate1.png";
import sertificate2 from "../public/images/aboutUs/sertificate2.png";
import sertificate3 from "../public/images/aboutUs/sertificate3.png";
import mobileAutomation from "../public/images/aboutUs/about-us-mobile.png";


export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "aboutUs"])),
    },
  };
}

export default function AboutUs() {
  const universalCard = {
    title: "main.universalCard.title",
    subtitle: "main.universalCard.subtitle",
    video:
      "https://vk.com/video_ext.php?oid=-151675737&id=456239060&hd=2&autoplay=1",
    button: "main.universalCard.button",
    link: "/contacts"
  };
  const section2Vision = {
    title1: "aboutUs:section2Vision.title1",
    point1: "aboutUs:section2Vision.point1",
    point2: "aboutUs:section2Vision.point2",
    point3: "aboutUs:section2Vision.point3",
    title2: "aboutUs:section2Vision.title2",
    point4: "aboutUs:section2Vision.point4",
    point5: "aboutUs:section2Vision.point5",
    point6: "aboutUs:section2Vision.point6",
  };
  const slides = [
    { title: "", link: "", image: sertificate1.src },
    { title: "", link: "", image: sertificate2.src },
    { title: "", link: "", image: sertificate3.src },
  ];
  const customCardSection = {
    title: "aboutUs:customCardSection.title",
    subtitle: "aboutUs:customCardSection.subtitle",
    subtitle2: "aboutUs:customCardSection.subtitle2",
    src: work.src,
    list: [
      { title: "1", subtitle: "aboutUs:customCardSection.list.item1.subtitle" },
      { title: "2", subtitle: "aboutUs:customCardSection.list.item2.subtitle" },
      { title: "3", subtitle: "aboutUs:customCardSection.list.item3.subtitle" },
      { title: "4", subtitle: "aboutUs:customCardSection.list.item4.subtitle" },
      { title: "5", subtitle: "aboutUs:customCardSection.list.item5.subtitle" },
    ],
  };
  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={1} />
        <main>
          <CustomCardSection {...customCardSection}></CustomCardSection>
          <AboutUsVisionSection
            backgroundImage={backgroundSection.src} content={section2Vision}
          ></AboutUsVisionSection>
          <AboutUsMobileVisionSection
              backgroundImage={mobileAutomation.src}
              content={section2Vision}
          ></AboutUsMobileVisionSection>
          <UniversalCardSection props={universalCard}></UniversalCardSection>
          <TitleSection
            title={"aboutUs:certificate.title"}
            align={"left"}
          ></TitleSection>

          <SlickSliderMultiSlide slides={slides}></SlickSliderMultiSlide>
          <FormSection></FormSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
