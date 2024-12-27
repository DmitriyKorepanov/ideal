import React from "react";
import styles from "./MobileVisionSection.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface MobileVisionSectionProps {
  backgroundImage: string;
  benefits: {
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    benefit5: string;
    benefit6: string;
    benefit7: string;
    benefit8: string;
  };
}

const MobileVisionSection: React.FC<MobileVisionSectionProps> = ({
  backgroundImage,
  benefits = {},
}) => {
  const {
    benefit1 = "",
    benefit2 = "",
    benefit3 = "",
    benefit4 = "",
    benefit5 = "",
    benefit6 = "",
    benefit7 = "",
    benefit8 = "",
  } = benefits;

  const { t } = useTranslation();

  const TEXTS = {
    visionPoints: [benefit1, benefit2, benefit3, benefit4],
    missionPoints: [benefit5, benefit6, benefit7, benefit8],
  };

  return (
    <section className={styles.MobileVisionSection}>
      <div className={styles.container}>
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

export default MobileVisionSection;
