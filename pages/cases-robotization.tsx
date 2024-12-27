import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSection from "@/components/sections/CardSection/CardSection";

import cardBackground from "@/public/images/common/background-card.png";
import card1 from "../public/images/casesRobotization/card1.png";
import card2 from "../public/images/casesRobotization/card2.png";
import card3 from "../public/images/casesRobotization/card3.png";
import card4 from "../public/images/casesRobotization/card4.png";
import card5 from "../public/images/casesRobotization/card5.png";
import section1 from "../public/images/casesRobotization/casesRobatizatonS1.png";

import FormSection from "@/components/sections/FormSection/FormSection";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import TextSection from "@/components/sections/TextSection/TextSection";

export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "casesRobotization",
      ])),
    },
  };
}

const cardSectionWithSliderProps = {
  title: "casesRobotization:mainSection.title",
  src: cardBackground.src,
  src2: section1.src,
  fontSizeTitle: "44px",
  mobileFontSizeTitle: "29px",
};

const textSectionProps = {
  title: "casesRobotization:textSection.title",
  subtitle: "casesRobotization:textSection.subtitle",
};

const cardSection = {
  src: card1.src,
  isBigCard: true,
  list: [
    {
      title: "casesRobotization:section1.first.title",
      subtitle: "casesRobotization:section1.first.subtitle",
    },
    {
      title: "casesRobotization:section1.second.title",
      subtitle: "casesRobotization:section1.second.subtitle",
    },
  ],
};

const cardSection2 = {
  src: card2.src,
  isBigCard: true,
  list: [
    {
      title: "casesRobotization:section2.first.title",
      subtitle: "casesRobotization:section2.first.subtitle",
    },
    {
      title: "casesRobotization:section2.second.title",
      subtitle: "casesRobotization:section2.second.subtitle",
    },
  ],
};
const cardSection3 = {
  src: card3.src,
  isBigCard: true,
  list: [
    {
      title: "casesRobotization:section3.first.title",
      subtitle: "casesRobotization:section3.first.subtitle",
    },
    {
      title: "casesRobotization:section3.second.title",
      subtitle: "casesRobotization:section3.second.subtitle",
    },
  ],
};
const cardSection4 = {
  src: card4.src,
  isBigCard: true,
  list: [
    {
      title: "casesRobotization:section4.first.title",
      subtitle: "casesRobotization:section4.first.subtitle",
    },
  ],
};
const cardSection5 = {
  src: card5.src,
  isBigCard: true,
  list: [
    {
      title: "casesRobotization:section5.first.title",
      subtitle: "casesRobotization:section5.first.subtitle",
    },
    {
      title: "casesRobotization:section5.second.title",
      subtitle: "casesRobotization:section5.second.subtitle",
    },
  ],
};

export default function CasesRobotization() {
  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={5} />
        <main>
          <CardSectionWithSlider
            cardSectionWithSliderProps={cardSectionWithSliderProps}
          ></CardSectionWithSlider>
          <TextSection {...textSectionProps}></TextSection>
          <CardSection cardSection={cardSection}></CardSection>
          <CardSection cardSection={cardSection2}></CardSection>
          <CardSection cardSection={cardSection3}></CardSection>
          <CardSection cardSection={cardSection4}></CardSection>
          <CardSection cardSection={cardSection5}></CardSection>
          <FormSection></FormSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
