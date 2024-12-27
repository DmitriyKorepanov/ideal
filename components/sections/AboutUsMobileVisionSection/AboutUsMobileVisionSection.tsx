import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import styles from "./AboutUsMobileVisionSection.module.scss";

interface MobileVisionSectionProps {
  backgroundImage: string;
  content: {
    title1?: string;
    point1?: string;
    point2?: string;
    point3?: string;
    title2?: string;
    point4?: string;
    point5?: string;
    point6?: string;
  };
}

const AboutUsMobileVisionSection: React.FC<MobileVisionSectionProps> = ({
  backgroundImage,
  content = {},
}) => {
  const {
    title1 = "",
    point1 = "",
    point2 = "",
    point3 = "",
    title2 = "",
    point4 = "",
    point5 = "",
    point6 = "",
  } = content;

  const { t } = useTranslation();

  const TEXTS = {
    visionTitle: title1,
    visionPoints: [
      point1,
      point2,
      point3,
    ],
    missionTitle: title2,
    missionPoints: [
      point4,
      point5,
      point6,
    ],
  };

  return (
    <section className={styles.AboutUsMobileVisionSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t(TEXTS.visionTitle)}</h2>
        <ul className={styles.list}>
          {TEXTS.visionPoints.map((point, index) => (
            <li key={index} className={styles.item}>
              {t(point)}
            </li>
          ))}
        </ul>
        <div className={styles.imageWrapper}>
          <Image
            src={backgroundImage}
            alt="IdealTechno"
            className={styles.image}
            width={340}
            height={340}
          />
        </div>
        <h2 className={styles.title}>{t(TEXTS.missionTitle)}</h2>
        <ul className={styles.list}>
          {TEXTS.missionPoints.map((point, index) => (
            <li key={index} className={styles.item}>
              {t(point)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUsMobileVisionSection;
