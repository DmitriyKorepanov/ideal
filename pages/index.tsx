import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import TitleSection from "@/components/sections/TitleSection/TitleSection";
import MosaicSection from "@/components/sections/MosaicSection/MosaicSection";
import UniversalCardSection from "@/components/sections/UniversalCardSection/UniversalCardSection";
import TitleWithImageSection from "@/components/sections/TitleWithImageSection/TitleWithImageSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";

import background from '../public/images/TitleWithImageSection/background.png'
import whatsapp from '../public/images/common/whatsapp.png'
import cardBackground from "@/public/images/common/background-card.png";

export async function getStaticProps(props: TPage) {
  const { locale } = props;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const cards = [
    {
      name: "main.blog.blog1",
      link: "/drones",
      image: "images/MosaicSection/mosaic1.png",
    },
    {
      name: "main.blog.blog2",
      link: "/ideal-techno-step",
      image: "images/MosaicSection/mosaic2.png",
    },
    {
      name: "main.blog.blog3",
      link: "/kalashnikov",
      image: "images/MosaicSection/mosaic3.png",
    },
  ];
  const cardSectionWithSliderProps = {
    title: "main.CardSectionWithSlider.title",
    subtitle: "main.CardSectionWithSlider.subtitle",
    buttonText: "main.CardSectionWithSlider.button",
    link: "/about-us",
    src: cardBackground.src,
    slides: [
      {
        title: "main.slide1",
        link: "/robots",
        image: "images/MosaicSection/mosaic2.png",
      },
      {
        title: "main.slide2",
        link: "/drones",
        image: "images/MosaicSection/mosaic1.png",
      },
      {
        title: "main.slide3",
        link: "/kalashnikov",
        image: "images/MosaicSection/mosaic3.png",
      },
    ],
  };
  const universalCard = {
    title: "main.universalCard.title",
    subtitle: "main.universalCard.subtitle",
    video:
      "https://vk.com/video_ext.php?oid=-151675737&id=456239060&hd=2&autoplay=1",
    button: "main.universalCard.button",
    link: "/contacts"
  };

  const contactSection = {
    src: whatsapp.src
  }

  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={0} />
        <main>
          <CardSectionWithSlider
              cardSectionWithSliderProps={cardSectionWithSliderProps}
          ></CardSectionWithSlider>
          <TitleSection title={"main.titleSection"}></TitleSection>
          <MosaicSection cards={cards} />
          <UniversalCardSection props={universalCard}></UniversalCardSection>
          <TitleWithImageSection
            title={"main.titleWithImageSection"}
            background={background.src}
          ></TitleWithImageSection>
          <ContactSection contactSection={contactSection}></ContactSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
