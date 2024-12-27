import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import ProductSection from "@/components/sections/ProductSection/ProductSection";
import FormSection from "@/components/sections/FormSection/FormSection";
import TextSection from "@/components/sections/TextSection/TextSection";

import mainSectionSlide from "../public/images/robots/robots.png";
import robotsProduct1 from "../public/images/robots/robots-product1.png";
import robotsProduct2 from "../public/images/robots/robots-product2.png";
import robotsProduct3 from "../public/images/robots/robots-product3.png";
import robotsProduct4 from "../public/images/robots/robots-product4.png";
import cardBackground from "../public/images/common/background-card.png";

export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "robots"])),
    },
  };
}

export default function Robots() {
  const cardSectionWithSliderProps = {
    title: "robots:section1.title",
    src: cardBackground.src,
    src2: mainSectionSlide.src,
    fontSizeTitle: "49px",
    mobileFontSizeTitle: "36px",
  };

  const textSectionProps = {
    title: "robots:section2.title",
    subtitle: "robots:section2.subtitle",
    subtitle2: "robots:section2.subtitle2",
    variantGrid: true,
  };

  const products = [
    {
      name: "robots:card1.title",
      link: "/card/card-1",
      image: robotsProduct1.src,
    },
    {
      name: "robots:card2.title",
      link: "/card/card-2",
      image: robotsProduct2.src,
    },
    {
      name: "robots:card3.title",
      link: "/card/card-3",
      image: robotsProduct3.src,
    },
    {
      name: "robots:card4.title",
      link: "/card/card-4",
      image: robotsProduct4.src,
    },
  ];
  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={3} />
        <main>
          <CardSectionWithSlider
            cardSectionWithSliderProps={cardSectionWithSliderProps}
          ></CardSectionWithSlider>
          <TextSection {...textSectionProps}></TextSection>
          <ProductSection products={products}></ProductSection>
          <FormSection></FormSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
