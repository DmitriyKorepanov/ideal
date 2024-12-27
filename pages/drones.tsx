import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import TileSection from "@/components/sections/TileSection/TileSection";
import TitleSection from "@/components/sections/TitleSection/TitleSection";
import TitleWithImageSection from "@/components/sections/TitleWithImageSection/TitleWithImageSection";

import background from "../public/images/common/background-card.png";
import slide from "../public/images/drones/drone.png";
import backgroundInnovation from "../public/images/TitleWithImageSection/background.png";
import UniversalCardSection from "@/components/sections/UniversalCardSection/UniversalCardSection";


export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "drones"])),
    },
  };
}

export default function Drones() {
  const cardSectionWithSliderProps = {
    title: "drones:section1.title",
    subtitle: "drones:section1.subtitle",
    src: background.src,
    src2: slide.src,
  };
  const tileCards = [
    { title: "1", subtitle: "Фармацевтические препараты", src: "" },
    {
      title: "2",
      subtitle: "Фармацевтические препараты",
      image: "text2",
      mobile: true,
    },
    {
      title: "2",
      subtitle: "Фармацевтические препараты",
      title2: "3",
      subtitle2: "Фармацевтические препараты2",
      src: "",
      src2: "",
      double: true,
    },
    {
      title: "3",
      subtitle: "Фармацевтические препараты",
      image: "text3",
      mobile: true,
    },
    { title: "4", subtitle: "Фармацевтические препараты", image: "" },
    { title: "5", subtitle: "Фармацевтические препараты", image: "" },
  ];

  const universalCard = {
    title: "drones:section4.title",
    subtitle: "drones:section4.subtitle",
    video:
        "https://vkvideo.ru/video_ext.php?oid=-151675737&id=456239080&hd=2&autoplay=1",
  };

  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={0} />
        <main>
          <CardSectionWithSlider
            cardSectionWithSliderProps={cardSectionWithSliderProps}
          ></CardSectionWithSlider>
          <TitleSection
            title={
              "Мы поставляем решения для различных отраслей промышленности"
            }
            align="left"
            size={36}
          ></TitleSection>
          <TileSection tileCards={tileCards}></TileSection>
          <UniversalCardSection props={universalCard}></UniversalCardSection>
          <TitleWithImageSection
            title={"main.titleWithImageSection"}
            background={backgroundInnovation.src}
          ></TitleWithImageSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
