import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { TPage } from "@/constants/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TitleWithImageSection from "@/components/sections/TitleWithImageSection/TitleWithImageSection";
import ImageGrid from "@/components/sections/ImageGrid/ImageGrid";
import FormSection from "@/components/sections/FormSection/FormSection";

import background from "../../public/images/robotCard/background.png";
import card1_1 from "../../public/images/robotCard/card1_1.png";
import card1_2 from "../../public/images/robotCard/card1_2.png";
import card1_3 from "../../public/images/robotCard/card1_3.png";
import card1_4 from "../../public/images/robotCard/card1_4.png";
import card2_1 from "../../public/images/robotCard/card2_1.png";
import card2_2 from "../../public/images/robotCard/card2_2.png";
import card2_3 from "../../public/images/robotCard/card2_3.png";
import card2_4 from "../../public/images/robotCard/card2_4.png";
import card3_1 from "../../public/images/robotCard/card3_1.png";
import card3_2 from "../../public/images/robotCard/card3_2.png";
import card3_3 from "../../public/images/robotCard/card3_3.png";
import card3_4 from "../../public/images/robotCard/card3_4.png";
import card4_1 from "../../public/images/robotCard/card4_1.png";
import card4_2 from "../../public/images/robotCard/card4_2.png";

import styles from "./Card.module.scss";

interface CardData {
  imageUrl: string;
  title: string;
  table?: string[][];
  images: any;
}

// Функция для получения статичных путей
export async function getStaticPaths({ locales }: { locales: string[] }) {
  const ids = ["card-1", "card-2", "card-3", "card-4"];
  const paths = locales.flatMap((locale) =>
    ids.map((id) => ({
      params: { id },
      locale,
    }))
  );

  return {
    paths,
    fallback: false, // Если путь не найден, показываем 404
  };
}

// Получаем данные для страницы
export async function getStaticProps({ locale }: TPage) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "robotCard"])),
    },
  };
}

const RobotCardPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);

  const data: Record<string, CardData> = {
    "card-1": {
      imageUrl: background.src,
      title: "robotCard:card1.title",
      images: [card1_1.src, card1_2.src, card1_3.src, card1_4.src],
    },
    "card-2": {
      title: "robotCard:card2.title",
      imageUrl: background.src,
      images: [card2_1.src, card2_2.src, card2_3.src, card2_4.src],
    },
    "card-3": {
      title: "robotCard:card3.title",
      imageUrl: background.src,
      images: [card3_1.src, card3_2.src, card3_3.src, card3_4.src],
    },
    "card-4": {
      title: "robotCard:card4.title",
      imageUrl: background.src,
      images: [card4_1.src, card4_2.src],
    },
  };

  const cardData = data[id as string]; // Получаем данные для текущего id

  useEffect(() => {
    if (id && !cardData) {
      router.push("/404");
    } else {
      setLoading(false);
    }
  }, [id, cardData, router]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!cardData) {
    return null;
  }

  return (
    <div className={"layout"}>
      <Header activeNavIndex={1} />
      <main>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <TitleWithImageSection
            title={cardData.title}
            background={cardData.imageUrl}
            hideIcon
            color={"white"}
          ></TitleWithImageSection>
          <ImageGrid images={cardData.images} />

          <div className={styles.tableContainer}>
            {id === "card-1" ? (
              <table className="table" cellSpacing="15px" cellPadding="5px">
                <thead>
                  <tr>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "left" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        Specifications
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O" />
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        UNIT
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SD3/500
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SD7/700
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SD7/900
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Maximum working radius</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>mm</td>
                    <td style={{ textAlign: "center" }}>500</td>
                    <td style={{ textAlign: "center" }}>723</td>
                    <td style={{ textAlign: "center" }}>912</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Repeat positioning accuracy</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>mm</td>
                    <td style={{ textAlign: "center" }}>0.02</td>
                    <td style={{ textAlign: "center" }}>0.02</td>
                    <td style={{ textAlign: "center" }}>0.03</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Portable weight</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>kg</td>
                    <td style={{ textAlign: "center" }}>3</td>
                    <td style={{ textAlign: "center" }}>7</td>
                    <td style={{ textAlign: "center" }}>7</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Freedom</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>-</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>6</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J1</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>370</td>
                    <td style={{ textAlign: "center" }}>450</td>
                    <td style={{ textAlign: "center" }}>300</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J2</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>370</td>
                    <td style={{ textAlign: "center" }}>450</td>
                    <td style={{ textAlign: "center" }}>300</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Max. speed of single axle</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J3</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>430</td>
                    <td style={{ textAlign: "center" }}>450</td>
                    <td style={{ textAlign: "center" }}>300</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>300</td>
                    <td style={{ textAlign: "center" }}>450</td>
                    <td style={{ textAlign: "center" }}>300</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>460</td>
                    <td style={{ textAlign: "center" }}>450</td>
                    <td style={{ textAlign: "center" }}>300</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>600</td>
                    <td style={{ textAlign: "center" }}>450</td>
                    <td style={{ textAlign: "center" }}>300</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J1</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±170</td>
                    <td style={{ textAlign: "center" }}>±170</td>
                    <td style={{ textAlign: "center" }}>±170</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J2</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±170</td>
                    <td style={{ textAlign: "center" }}>-80~135</td>
                    <td style={{ textAlign: "center" }}>-80~135</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Joint range</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J3</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>40~-220</td>
                    <td style={{ textAlign: "center" }}>-194~63</td>
                    <td style={{ textAlign: "center" }}>-195~65</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±185</td>
                    <td style={{ textAlign: "center" }}>±190</td>
                    <td style={{ textAlign: "center" }}>±190</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±125</td>
                    <td style={{ textAlign: "center" }}>±120</td>
                    <td style={{ textAlign: "center" }}>±120</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>4.41</td>
                    <td style={{ textAlign: "center" }}>16.6</td>
                    <td style={{ textAlign: "center" }}>16.6</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Allowable static load torque of wrist</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>4.41</td>
                    <td style={{ textAlign: "center" }}>16.6</td>
                    <td style={{ textAlign: "center" }}>16.6</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>2.94</td>
                    <td style={{ textAlign: "center" }}>9.4</td>
                    <td style={{ textAlign: "center" }}>9.4</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>0.15</td>
                    <td style={{ textAlign: "center" }}>0.45</td>
                    <td style={{ textAlign: "center" }}>0.45</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Allowable load inertia of joint</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>0.15</td>
                    <td style={{ textAlign: "center" }}>0.45</td>
                    <td style={{ textAlign: "center" }}>0.45</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>0.15</td>
                    <td style={{ textAlign: "center" }}>0.15</td>
                    <td style={{ textAlign: "center" }}>0.15</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Mounting position</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>-</td>
                    <td style={{ textAlign: "center" }}>Floor,wall or slope</td>
                    <td style={{ textAlign: "center" }}>Floor,wall or slope</td>
                    <td style={{ textAlign: "center" }}>Floor,wall or slope</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Setting conditions</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>ºC</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Weight</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>kg</td>
                    <td style={{ textAlign: "center" }}>28</td>
                    <td style={{ textAlign: "center" }}>33</td>
                    <td style={{ textAlign: "center" }}>35</td>
                  </tr>
                </tbody>
              </table>
            ) : null}
            {id === "card-2" ? (
              <table className="table" cellSpacing="15px" cellPadding="5px">
                <thead>
                  <tr>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "left" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        Specifications
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O" />
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        UNIT
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SA6/1400
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SA6/1440H
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SA8/1800
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Maximum working radius</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>mm</td>
                    <td style={{ textAlign: "center" }}>1405</td>
                    <td style={{ textAlign: "center" }}>1445</td>
                    <td style={{ textAlign: "center" }}>1818</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Repeat positioning accuracy</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>mm</td>
                    <td style={{ textAlign: "center" }}>0.05</td>
                    <td style={{ textAlign: "center" }}>0.05</td>
                    <td style={{ textAlign: "center" }}>0.05</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Portable weight</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>kg</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>8</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Freedom</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>-</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>6</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J1</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>180</td>
                    <td style={{ textAlign: "center" }}>220</td>
                    <td style={{ textAlign: "center" }}>150</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J2</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>180</td>
                    <td style={{ textAlign: "center" }}>220</td>
                    <td style={{ textAlign: "center" }}>150</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Max. speed of single axle</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J3</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>200</td>
                    <td style={{ textAlign: "center" }}>250</td>
                    <td style={{ textAlign: "center" }}>160</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>450</td>
                    <td style={{ textAlign: "center" }}>430</td>
                    <td style={{ textAlign: "center" }}>360</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>320</td>
                    <td style={{ textAlign: "center" }}>400</td>
                    <td style={{ textAlign: "center" }}>320</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>450</td>
                    <td style={{ textAlign: "center" }}>600</td>
                    <td style={{ textAlign: "center" }}>360</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J1</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±165</td>
                    <td style={{ textAlign: "center" }}>±165</td>
                    <td style={{ textAlign: "center" }}>±165</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J2</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>155~-90</td>
                    <td style={{ textAlign: "center" }}>155~-90</td>
                    <td style={{ textAlign: "center" }}>155~-90</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Joint range</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J3</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>70~-200</td>
                    <td style={{ textAlign: "center" }}>70~-180</td>
                    <td style={{ textAlign: "center" }}>70~-190</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±170</td>
                    <td style={{ textAlign: "center" }}>±170</td>
                    <td style={{ textAlign: "center" }}>±185</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±120</td>
                    <td style={{ textAlign: "center" }}>±130</td>
                    <td style={{ textAlign: "center" }}>±120</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>11.8</td>
                    <td style={{ textAlign: "center" }}>11.8</td>
                    <td style={{ textAlign: "center" }}>22</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Allowable static load torque of wrist</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>9.8</td>
                    <td style={{ textAlign: "center" }}>9.8</td>
                    <td style={{ textAlign: "center" }}>16.5</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>5.9</td>
                    <td style={{ textAlign: "center" }}>4.2</td>
                    <td style={{ textAlign: "center" }}>6.7</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>0.6</td>
                    <td style={{ textAlign: "center" }}>0.6</td>
                    <td style={{ textAlign: "center" }}>0.75</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Allowable load inertia of joint</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>0.25</td>
                    <td style={{ textAlign: "center" }}>0.45</td>
                    <td style={{ textAlign: "center" }}>0.35</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>0.06</td>
                    <td style={{ textAlign: "center" }}>0.06</td>
                    <td style={{ textAlign: "center" }}>0.1</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Mounting position</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>-</td>
                    <td style={{ textAlign: "center" }}>Floor,wall or slope</td>
                    <td style={{ textAlign: "center" }}>Floor,wall or slope</td>
                    <td style={{ textAlign: "center" }}>Floor,wall or slope</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Setting conditions</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>ºC</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Weight</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>kg</td>
                    <td style={{ textAlign: "center" }}>143</td>
                    <td style={{ textAlign: "center" }}>165</td>
                    <td style={{ textAlign: "center" }}>160</td>
                  </tr>
                </tbody>
              </table>
            ) : null}
            {id === "card-3" ? (
              <table className="table" cellSpacing="15px" cellPadding="5px">
                <thead>
                  <tr>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "left" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        Specifications
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O" />
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        UNIT
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SR20/1700
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SR50/2180
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SR60/2280B
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SR90/2280B
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Maximum working radius</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>mm</td>
                    <td style={{ textAlign: "center" }}>1718</td>
                    <td style={{ textAlign: "center" }}>2180.5</td>
                    <td style={{ textAlign: "center" }}>2281</td>
                    <td style={{ textAlign: "center" }}>2281</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Repeat positioning accuracy</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>mm</td>
                    <td style={{ textAlign: "center" }}>0.05</td>
                    <td style={{ textAlign: "center" }}>0.1</td>
                    <td style={{ textAlign: "center" }}>0.1</td>
                    <td style={{ textAlign: "center" }}>0.1</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Portable weight</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>kg</td>
                    <td style={{ textAlign: "center" }}>20</td>
                    <td style={{ textAlign: "center" }}>50</td>
                    <td style={{ textAlign: "center" }}>55</td>
                    <td style={{ textAlign: "center" }}>90</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Freedom</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>-</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>6</td>
                    <td style={{ textAlign: "center" }}>6</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J1</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>170</td>
                    <td style={{ textAlign: "center" }}>140</td>
                    <td style={{ textAlign: "center" }}>150</td>
                    <td style={{ textAlign: "center" }}>125</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J2</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>170</td>
                    <td style={{ textAlign: "center" }}>120</td>
                    <td style={{ textAlign: "center" }}>150</td>
                    <td style={{ textAlign: "center" }}>105</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Max. speed of single axle</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J3</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>170</td>
                    <td style={{ textAlign: "center" }}>120</td>
                    <td style={{ textAlign: "center" }}>150</td>
                    <td style={{ textAlign: "center" }}>125</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>360</td>
                    <td style={{ textAlign: "center" }}>220</td>
                    <td style={{ textAlign: "center" }}>215</td>
                    <td style={{ textAlign: "center" }}>215</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>360</td>
                    <td style={{ textAlign: "center" }}>220</td>
                    <td style={{ textAlign: "center" }}>190</td>
                    <td style={{ textAlign: "center" }}>165</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>600</td>
                    <td style={{ textAlign: "center" }}>320</td>
                    <td style={{ textAlign: "center" }}>280</td>
                    <td style={{ textAlign: "center" }}>230</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J1</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±165</td>
                    <td style={{ textAlign: "center" }}>±160</td>
                    <td style={{ textAlign: "center" }}>±180</td>
                    <td style={{ textAlign: "center" }}>±180</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J2</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>155~-90</td>
                    <td style={{ textAlign: "center" }}>130~-60</td>
                    <td style={{ textAlign: "center" }}>135~-126</td>
                    <td style={{ textAlign: "center" }}>135~-126</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Joint range</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J3</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>70~-200</td>
                    <td style={{ textAlign: "center" }}>75~-195</td>
                    <td style={{ textAlign: "center" }}>55~-230</td>
                    <td style={{ textAlign: "center" }}>55~-230</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±185</td>
                    <td style={{ textAlign: "center" }}>±185</td>
                    <td style={{ textAlign: "center" }}>±180</td>
                    <td style={{ textAlign: "center" }}>±180</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±120</td>
                    <td style={{ textAlign: "center" }}>±120</td>
                    <td style={{ textAlign: "center" }}>±120</td>
                    <td style={{ textAlign: "center" }}>±120</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>50</td>
                    <td style={{ textAlign: "center" }}>260</td>
                    <td style={{ textAlign: "center" }}>229</td>
                    <td style={{ textAlign: "center" }}>321</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Allowable static load torque of wrist</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>50</td>
                    <td style={{ textAlign: "center" }}>260</td>
                    <td style={{ textAlign: "center" }}>229</td>
                    <td style={{ textAlign: "center" }}>321</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>19.6</td>
                    <td style={{ textAlign: "center" }}>147</td>
                    <td style={{ textAlign: "center" }}>136</td>
                    <td style={{ textAlign: "center" }}>165</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>1.6</td>
                    <td style={{ textAlign: "center" }}>28</td>
                    <td style={{ textAlign: "center" }}>32</td>
                    <td style={{ textAlign: "center" }}>52</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Allowable load inertia of joint</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>1.6</td>
                    <td style={{ textAlign: "center" }}>28</td>
                    <td style={{ textAlign: "center" }}>32</td>
                    <td style={{ textAlign: "center" }}>52</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>0.8</td>
                    <td style={{ textAlign: "center" }}>11</td>
                    <td style={{ textAlign: "center" }}>28</td>
                    <td style={{ textAlign: "center" }}>45</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Mounting position</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>-</td>
                    <td style={{ textAlign: "center" }}>Floor,wall or slope</td>
                    <td style={{ textAlign: "center" }}>Floor</td>
                    <td style={{ textAlign: "center" }}>Floor</td>
                    <td style={{ textAlign: "center" }}>Floor</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Setting conditions</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>ºC</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Weight</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>kg</td>
                    <td style={{ textAlign: "center" }}>235</td>
                    <td style={{ textAlign: "center" }}>560</td>
                    <td style={{ textAlign: "center" }}>756</td>
                    <td style={{ textAlign: "center" }}>759</td>
                  </tr>
                </tbody>
              </table>
            ) : null}
            {id === "card-4" ? (
              <table className="table" cellSpacing="15px" cellPadding="5px">
                <thead>
                  <tr>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "left" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        Specifications
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O" />
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        UNIT
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SP120/2400
                      </span>
                    </th>
                    <th
                      className="CardCNCMachine_machine_tech_values_item__vJhCf"
                      style={{ textAlign: "center" }}
                    >
                      <span className="CardCNCMachine_machine_tech_name_value__Ode7O">
                        SP180/3200
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Maximum working radius</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>mm</td>
                    <td style={{ textAlign: "center" }}>2403</td>
                    <td style={{ textAlign: "center" }}>3238</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Repeat positioning accuracy</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>mm</td>
                    <td style={{ textAlign: "center" }}>0.2</td>
                    <td style={{ textAlign: "center" }}>0.3</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Portable weight</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>kg</td>
                    <td style={{ textAlign: "center" }}>120</td>
                    <td style={{ textAlign: "center" }}>180</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Freedom</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>-</td>
                    <td style={{ textAlign: "center" }}>4</td>
                    <td style={{ textAlign: "center" }}>4</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J1</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>145</td>
                    <td style={{ textAlign: "center" }}>140</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J2</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>110</td>
                    <td style={{ textAlign: "center" }}>80</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Max. speed of single axle</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J3</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>120</td>
                    <td style={{ textAlign: "center" }}>120</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>400</td>
                    <td style={{ textAlign: "center" }}>340</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>/</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>º/s</td>
                    <td style={{ textAlign: "center" }}>/</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J1</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±165</td>
                    <td style={{ textAlign: "center" }}>±170</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J2</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>+85~-90</td>
                    <td style={{ textAlign: "center" }}>-43~+88</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Joint range</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J3</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>+65~-65</td>
                    <td style={{ textAlign: "center" }}>-65~+75</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                    <td style={{ textAlign: "center" }}>±360</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>/</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>º</td>
                    <td style={{ textAlign: "center" }}>/</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>250</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Allowable static load torque of wrist</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>/</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>Nm</td>
                    <td style={{ textAlign: "center" }}>/</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J4</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>70</td>
                    <td style={{ textAlign: "center" }}>70</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Allowable load inertia of joint</b>
                    </td>
                    <td style={{ textAlign: "center" }}>J5</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>/</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b />
                    </td>
                    <td style={{ textAlign: "center" }}>J6</td>
                    <td style={{ textAlign: "center" }}>kgm2</td>
                    <td style={{ textAlign: "center" }}>/</td>
                    <td style={{ textAlign: "center" }}>/</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Mounting position</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>-</td>
                    <td style={{ textAlign: "center" }}>Floor</td>
                    <td style={{ textAlign: "center" }}>Floor</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Setting conditions</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>ºC</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                    <td style={{ textAlign: "center" }}>0-40</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <b>Weight</b>
                    </td>
                    <td style={{ textAlign: "center" }} />
                    <td style={{ textAlign: "center" }}>kg</td>
                    <td style={{ textAlign: "center" }}>1045</td>
                    <td style={{ textAlign: "center" }}>1530</td>
                  </tr>
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
        <FormSection></FormSection>
      </main>
      <Footer />
    </div>
  );
};

export default RobotCardPage;
