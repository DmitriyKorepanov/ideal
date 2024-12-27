import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import UniversalCardSection from "@/components/sections/UniversalCardSection/UniversalCardSection";
import TitleWithImageSection from "@/components/sections/TitleWithImageSection/TitleWithImageSection";
import CardSection from "@/components/sections/CardSection/CardSection";

import mainSlide from "../public/images/kalashnikov/kalashnikov-card1.png";
import background from "../public/images/kalashnikov/backgroundInnovation.png";
import cardBackground from "@/public/images/common/background-card.png";

export async function getStaticProps(props: TPage) {
  const { locale } = props;

  console.log("locale", locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "kalashnikov"])),
    },
  };
}

export default function Kalashnikov() {
  const cardSectionWithSliderProps = {
    title: "kalashnikov:section1.title",
    subtitle: "kalashnikov:section1.subtitle",
    src: cardBackground.src,
    src2: mainSlide.src,
  };

  const cardSection1 = {
    src: "/images/kalashnikov/kalashnikov1.png",
    textBlock: "kalashnikov:section2.subtitle",
    backgroundColor: "transparent",
    marginTop: "60px",
  };
  const cardSection2 = {
    src: "/images/kalashnikov/group.png",
    textBlock: "kalashnikov:section3.subtitle",
    backgroundColor: "transparent",
    position: 1,
  };

  const universalCard = {
    title: "kalashnikov:section4.title",
    subtitle: "kalashnikov:section4.subtitle",
    video:
      "https://vkvideo.ru/video_ext.php?oid=-151675737&id=456239088&hd=2&autoplay=1",
    button: "kalashnikov:section4.button",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfzwJJAj5-VQ3K8AW759GLB3eprv3oKPRd-nOKAsoG_vjp1ow/viewform?pli=1"
  };

  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={0} />
        <main>
          <CardSectionWithSlider
            cardSectionWithSliderProps={cardSectionWithSliderProps}
          ></CardSectionWithSlider>
          <CardSection cardSection={cardSection1}></CardSection>
          <CardSection cardSection={cardSection2}></CardSection>
          <UniversalCardSection props={universalCard}></UniversalCardSection>
          <TitleWithImageSection
            title={"titleWithImageSection.innovation"}
            background={background.src}
            color={"white"}
          ></TitleWithImageSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
