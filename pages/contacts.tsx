import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";
import CardSection from "@/components/sections/CardSection/CardSection";
import Map from "@/components/Map/Map";
import FormSection from "@/components/sections/FormSection/FormSection";
import TitleWithImageSection from "@/components/sections/TitleWithImageSection/TitleWithImageSection";

import background from '../public/images/TitleWithImageSection/background.png'

export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contacts"])),
    },
  };
}

export default function Contacts() {
  const cardSection = {
    src: "/images/contacts/background-short.png",
    title: "contacts:section1.title",
    subtitle: "contacts:section1.subtitle",
    list: [
      {
        title: "contacts:section1.list.first.title",
        subtitle: "contacts:section1.list.first.subtitle",
      },
      {
        title: "contacts:section1.list.second.title",
        subtitle: "contacts:section1.list.second.subtitle",
      },
      {
        title: "contacts:section1.list.third.title",
        subtitle: "contacts:section1.list.third.subtitle",
      },
      {
        title: "contacts:section1.list.fourth.title",
        subtitle: "contacts:section1.list.fourth.subtitle",
      },
    ],
  };
  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={6} />
        <main>
          <CardSection cardSection={cardSection}></CardSection>
          <FormSection></FormSection>
          <Map></Map>
          <TitleWithImageSection
              title={"main.titleWithImageSection"}
              background={background.src}
          ></TitleWithImageSection>
        </main>
        <Footer />
      </div>
    </>
  );
}
