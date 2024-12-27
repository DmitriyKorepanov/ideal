import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSectionWithSlider from "@/components/sections/CardSectionWithSlider/CardSectionWithSlider";
import TileSection from "@/components/sections/TileSection/TileSection";
import TitleSection from "@/components/sections/TitleSection/TitleSection";
import FormSection from "@/components/sections/FormSection/FormSection";
import VisionSection from "@/components/sections/VisionSection/VisionSection";
import FAQ from "@/components/sections/FAQ/FAQ";
import TitleWithImageSection from "@/components/sections/TitleWithImageSection/TitleWithImageSection";
import MobileVisionSection from "@/components/sections/MobileVisionSection/MobileVisionSection";

import background from "../public/images/common/background-card.png";
import eye from "../public/images/machineVision/eye.png";
import mobileEye from "../public/images/machineVision/mobile-eye.png";
import slide from "../public/images/machineVision/machine-vision-img.png";
import backgroundInnovation from "../public/images/TitleWithImageSection/background.png";

export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "machineVision"])),
    },
  };
}

export default function MachineVision() {
  const cardSectionWithSliderProps = {
    title: "machineVision:section1.title",
    subtitle: "machineVision:section1.subtitle",
    src: background.src,
    src2: slide.src,
  };
  const tileCards = [
    { title: "1", subtitle: "machineVision:tileSection.subtitle1", src: "" },
    {
      title: "2",
      subtitle: "machineVision:tileSection.subtitle2",
      image: "text2",
      mobile: true,
    },
    {
      title: "2",
      subtitle: "machineVision:tileSection.subtitle2",
      title2: "3",
      subtitle2: "machineVision:tileSection.subtitle3",
      src: "",
      src2: "",
      double: true,
    },
    {
      title: "3",
      subtitle: "machineVision:tileSection.subtitle3",
      image: "text3",
      mobile: true,
    },
    { title: "4", subtitle: "machineVision:tileSection.subtitle4", image: "" },
    { title: "5",   subtitle: "machineVision:tileSection.subtitle5", image: "" },
  ];

  const faqData = [
    {
      question: "machineVision:faq.question1",
      answer: "machineVision:faq.answer1",
    },
    {
      question: "machineVision:faq.question2",
      answer: "machineVision:faq.answer2",
    },
    {
      question: "machineVision:faq.question3",
      answer: "machineVision:faq.answer3",
    },
  ];

  const benefits = {
    benefit1: "machineVision:benefits.benefit1",
    benefit2: "machineVision:benefits.benefit2",
    benefit3: "machineVision:benefits.benefit3",
    benefit4: "machineVision:benefits.benefit4",
    benefit5: "machineVision:benefits.benefit5",
    benefit6: "machineVision:benefits.benefit6",
    benefit7: "machineVision:benefits.benefit7",
    benefit8: "machineVision:benefits.benefit8",
  };

  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={4} />
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
          <VisionSection
            backgroundImage={eye.src}
            benefits={benefits}
          ></VisionSection>
          <MobileVisionSection
            backgroundImage={mobileEye.src}
            benefits={benefits}
          ></MobileVisionSection>
          <FAQ faqData={faqData} />
          <TitleWithImageSection
            title={"main.titleWithImageSection"}
            background={backgroundInnovation.src}
          ></TitleWithImageSection>
          <FormSection></FormSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
