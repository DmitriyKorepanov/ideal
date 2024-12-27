import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSection from "@/components/sections/CardSection/CardSection";
import FormSection from "@/components/sections/FormSection/FormSection";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import TextSection from "@/components/sections/TextSection/TextSection";

import cardBackground from "@/public/images/common/background-card.png";
import card1 from '../public/images/casesMachineVision/card1.png'
import card2 from '../public/images/casesMachineVision/card2.png'
import card3 from '../public/images/casesMachineVision/card3.png'
import card4 from '../public/images/casesMachineVision/card4.png'
import card5 from '../public/images/casesMachineVision/card5.png'
import card6 from '../public/images/casesMachineVision/card6.png'
import mainSlide from '../public/images/casesMachineVision/casesMachineVisionS1.png'




export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "casesMachineVision"])),
    },
  };
}

const cardSectionWithSliderProps = {title: 'casesMachineVision:mainSection.title', src: cardBackground.src, src2: mainSlide.src}

const cardSection = {
  src: card1.src,
  isBigCard: true,
  list: [
    {
      title: "casesMachineVision:section1.first.title",
      subtitle: "casesMachineVision:section1.first.subtitle",
    },
    {
      title: "casesMachineVision:section1.second.title",
      subtitle: "casesMachineVision:section1.second.subtitle",
    },
  ],
};

const cardSection2 = {
  src: card2.src,
  isBigCard: true,
  list: [
    {
      title: "casesMachineVision:section2.first.title",
      subtitle: "casesMachineVision:section2.first.subtitle",
    },
    {
      title: "casesMachineVision:section2.second.title",
      subtitle: "casesMachineVision:section2.second.subtitle",
    },
  ],
};
const cardSection3 = {
  src: card3.src,
  isBigCard: true,
  list: [
    {
      title: "casesMachineVision:section3.first.title",
      subtitle: "casesMachineVision:section3.first.subtitle",
    },
    {
      title: "casesMachineVision:section3.second.title",
      subtitle: "casesMachineVision:section3.second.subtitle",
    },
  ],
};
const cardSection4 = {
  src: card4.src,
  isBigCard: true,
  list: [
    {
      title: "casesMachineVision:section4.first.title",
      subtitle: "casesMachineVision:section4.first.subtitle",
    },
    {
      title: "casesMachineVision:section4.second.title",
      subtitle: "casesMachineVision:section4.second.subtitle",
    },
  ],
};
const cardSection5 = {
  src: card5.src,
  isBigCard: true,
  list: [
    {
      title: "casesMachineVision:section5.first.title",
      subtitle: "casesMachineVision:section5.first.subtitle",
    },
    {
      title: "casesMachineVision:section5.second.title",
      subtitle: "casesMachineVision:section5.second.subtitle",
    },
  ],
};

const cardSection6 = {
  src: card6.src,
  isBigCard: true,
  list: [
    {
      title: "casesMachineVision:section6.first.title",
      subtitle: "casesMachineVision:section6.first.subtitle",
    },
    {
      title: "casesMachineVision:section6.second.title",
      subtitle: "casesMachineVision:section6.second.subtitle",
    },
  ],
};

const textSectionProps = {
  title: "casesMachineVision:textSection.title",
  subtitle: "casesMachineVision:textSection.subtitle",
};

export default function CasesMachineVision() {
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
          <CardSection cardSection={cardSection6}></CardSection>
          <FormSection></FormSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
