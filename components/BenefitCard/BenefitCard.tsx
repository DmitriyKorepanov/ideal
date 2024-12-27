import cn from "classnames";
import React from "react";
import {useTranslation} from "next-i18next";

import styles from "./BenefitCard.module.scss";

export default function BenefitCard({ title, points, className }) {
    const { t } = useTranslation();

  return <div className={cn(styles.card, className)}>
      <div className={styles.title}>{t(title)}</div>
      <ul className={styles.list}>
          {points.map((text, index) => (
              <li key={index} className={styles.point}>
                  {t(text)}
              </li>
          ))}
      </ul>
  </div>;
}
