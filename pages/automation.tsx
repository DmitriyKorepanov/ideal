import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { TPage } from "@/constants/types";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import FormSection from "@/components/sections/FormSection/FormSection";
import TextSection from "@/components/sections/TextSection/TextSection";
import FAQ from "@/components/sections/FAQ/FAQ";
import TitleWithImageSection from "@/components/sections/TitleWithImageSection/TitleWithImageSection";
import AutomationSection from "@/components/sections/AutomationSection/AutomationSection";

import backgroundInnovation from "../public/images/TitleWithImageSection/background.png";
import automation from "../public/images/automation/automation.png";
import mobileAutomation from "../public/images/automation/mobile-automation.png";
import backgroundCard from "../public/images/common/background-card.png";
import automationCard1 from "../public/images/automation/automation-card1.png";

export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "automation"])),
    },
  };
}

export default function Automation() {
  const cardSectionWithSliderProps = {
    title: "automation:section1.title",
    subtitle: "automation:section1.subtitle",
    src: backgroundCard.src,
    src2: automationCard1.src,
  };
  const textSectionProps = {
    title: "automation:section2.title",
    subtitle: "automation:section2.subtitle",
    src: backgroundCard.src,
  };

  const faqData = [
    {
      question: "automation:faq.question1",
      answer: "automation:faq.answer1",
    },
    {
      question: "automation:faq.question2",
      answer: "automation:faq.answer2",
    },
    {
      question: "automation:faq.question3",
      answer: "automation:faq.answer3",
    },
  ];

  const benefits = {
    benefit1: {
      title: "automation:section3.benefit1.title",
      points: [
        "automation:section3.benefit1.point1",
        "automation:section3.benefit1.point2",
        "automation:section3.benefit1.point3",
      ],
    },
    benefit2: {
      title: "automation:section3.benefit2.title",
      points: [
        "automation:section3.benefit2.point1",
        "automation:section3.benefit2.point2",
        "automation:section3.benefit2.point3",
        "automation:section3.benefit2.point4",
      ],
    },
    benefit3: {
      title: "automation:section3.benefit3.title",
      points: [
        "automation:section3.benefit3.point1",
        "automation:section3.benefit3.point2",
        "automation:section3.benefit3.point3",
        "automation:section3.benefit2.point4",
      ],
    },
  };

  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={2} />
        <main>
          <CardSectionWithSlider
            cardSectionWithSliderProps={cardSectionWithSliderProps}
          ></CardSectionWithSlider>
          <TextSection {...textSectionProps}></TextSection>
          <AutomationSection
            backgroundImage={automation.src}
            mobileImage={mobileAutomation.src}
            benefits={benefits}
          ></AutomationSection>
          <FAQ faqData={faqData} />
          <FormSection></FormSection>
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
