import React from "react";
import BenefitCard from "@/components/BenefitCard/BenefitCard";
import cn from "classnames";

import styles from "./AutomationSection.module.scss";

interface AutomationSectionProps {
  backgroundImage: string;
  mobileImage: string;
  benefits: any;
}

const AutomationSection: React.FC<AutomationSectionProps> = ({
  backgroundImage,
  mobileImage,
  benefits,
}) => {
  return (
    <>
      <section
        className={cn(styles.container, styles.containerDesktop)}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.features}>
          <BenefitCard
            title={benefits.benefit1.title}
            points={benefits.benefit1.points}
            className={styles.benefit1}
          ></BenefitCard>
          <BenefitCard
            title={benefits.benefit2.title}
            points={benefits.benefit2.points}
            className={styles.benefit2}
          ></BenefitCard>
          <BenefitCard
            title={benefits.benefit3.title}
            points={benefits.benefit3.points}
            className={styles.benefit3}
          ></BenefitCard>
        </div>
      </section>
      <section className={cn(styles.container, styles.containerMobile)}>
        <div className={cn(styles.features, styles.featureMobile)}>
          <BenefitCard
            title={benefits.benefit1.title}
            points={benefits.benefit1.points}
            className={cn(styles.benefit1, styles.benefitMobile)}
          ></BenefitCard>
          <BenefitCard
            title={benefits.benefit2.title}
            points={benefits.benefit2.points}
            className={styles.benefit2}
          ></BenefitCard>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${mobileImage})` }}
          ></div>
          <BenefitCard
            title={benefits.benefit3.title}
            points={benefits.benefit3.points}
            className={styles.benefit3}
          ></BenefitCard>
        </div>
      </section>
    </>
  );
};

export default AutomationSection;
