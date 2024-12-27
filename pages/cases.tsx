import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TPage } from "@/constants/types";

export async function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Cases() {
  return (
    <>
      <div className={"layout"}>
        <Header activeNavIndex={0} />
        <main></main>
        <Footer />
      </div>
    </>
  );
}
