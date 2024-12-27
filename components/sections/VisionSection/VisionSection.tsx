import React from "react";
import { useTranslation } from "next-i18next";

import styles from "./VisionSection.module.scss";

interface VisionSectionProps {
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

const VisionSection: React.FC<VisionSectionProps> = ({
  backgroundImage,
  benefits,
}) => {
  const { t } = useTranslation();
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
  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Устанавливаем фон через пропс
    >
      <div className={styles.features}>
        <div className={styles.feature} style={{ top: "9%", left: "17%" }}>
          <span>{t(benefit1)}</span>
        </div>
        <div className={styles.feature} style={{ top: "25%", left: "10%" }}>
          <span>{t(benefit2)}</span>
        </div>
        <div className={styles.feature} style={{ top: "53%", left: "13%" }}>
          <span>{t(benefit3)}</span>
        </div>
        <div className={styles.feature} style={{ top: "87%", left: "9%" }}>
          <span>{t(benefit4)}</span>
        </div>
        <div className={styles.feature} style={{ top: "8%", right: "15%" }}>
          <span>{t(benefit5)}</span>
        </div>
        <div className={styles.feature} style={{ top: "22%", right: "5%" }}>
          <span>{t(benefit6)}</span>
        </div>
        <div className={styles.feature} style={{ top: "51%", right: "4%" }}>
          <span>{t(benefit7)}</span>
        </div>
        <div className={styles.feature} style={{ top: "87%", right: "18%" }}>
          <span>{t(benefit8)}</span>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
