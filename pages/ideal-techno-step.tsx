import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import UniversalCardSection from "@/components/sections/UniversalCardSection/UniversalCardSection";
import TitleWithImageSection from "@/components/sections/TitleWithImageSection/TitleWithImageSection";
import CardSection from "@/components/sections/CardSection/CardSection";

import mainSectionSlide from "../public/images/idealTechnoStep/mainSection.png";
import stepImage from "../public/images/idealTechnoStep/stepImage.png";
import cardBackground from "@/public/images/common/background-card.png";

export async function getStaticProps(props: TPage) {
  const { locale } = props;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "idealTechnoStep"])),
    },
  };
}

export default function IdealTechnoStep() {

  const mainSection = {
    title: "idealTechnoStep:section1.title",
    subtitle: "idealTechnoStep:section1.subtitle",
    src: cardBackground.src,
    src2: mainSectionSlide.src,
  };

  const cardSection2 = {
    src: stepImage.src,
    textBlock: "idealTechnoStep:section2.subtitle",
    backgroundColor: "transparent",
    position: 1,
  };

  const videoSection = {
    title: "idealTechnoStep:section5Video.title",
    subtitle: "idealTechnoStep:section5Video.subtitle",
    video:
      "https://vkvideo.ru/video_ext.php?oid=-151675737&id=456239060&hd=2&autoplay=1",
    button: "idealTechnoStep:section5Video.button",
  };

  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={0} />
        <main>
          <CardSectionWithSlider
            cardSectionWithSliderProps={mainSection}
          ></CardSectionWithSlider>
          <CardSection cardSection={cardSection2}></CardSection>
          <UniversalCardSection props={videoSection}></UniversalCardSection>
          <TitleWithImageSection
            title={"titleWithImageSection.innovation"}
          ></TitleWithImageSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
