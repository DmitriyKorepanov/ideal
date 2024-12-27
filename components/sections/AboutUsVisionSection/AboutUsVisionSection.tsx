import React from "react";
import { useTranslation } from "next-i18next";

import styles from "./AboutUsVisionSection.module.scss";

interface VisionSectionProps {
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

const AboutUsVisionSection: React.FC<VisionSectionProps> = ({
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

  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.features}>
        <div className={styles.title} style={{ top: "10%", left: "10%" }}>
          <span>{t(title1)}</span>
        </div>
        <div className={styles.title} style={{ top: "10%", left: "64%" }}>
          <span>{t(title2)}</span>
        </div>
        <div className={styles.feature} style={{ top: "23%", left: "7%" }}>
          <span>{t(point1)}</span>
        </div>
        <div className={styles.feature} style={{ top: "42%", left: "5%" }}>
          <span>{t(point2)}</span>
        </div>
        <div className={styles.feature} style={{ top: "65%", left: "7%" }}>
          <span>{t(point3)}</span>
        </div>
        <div className={styles.feature} style={{ top: "22%", right: "17%" }}>
          <span>{t(point4)}</span>
        </div>
        <div
          className={`${styles.feature} ${styles.rightAlign}`}
          style={{ top: "41%", right: "5%" }}
        >
          <span>{t(point5)}</span>
        </div>
        <div className={styles.feature} style={{ top: "73%", right: "16%" }}>
          <span>{t(point6)}</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUsVisionSection;
