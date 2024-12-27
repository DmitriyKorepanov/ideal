import cn from "classnames";
import { useTranslation } from "next-i18next";
import React from "react";

import styles from "./TileSection.module.scss";

export default function TileSection(props: { tileCards: any }) {
  const { t } = useTranslation();
  const { tileCards } = props;

  return (
    <section className={cn(styles.section)}>
      {tileCards?.map((el: any, index: number) => {
        if (el.double) {
          return (
            <div className={styles.wrapperCard} key={index}>
              <div
                className={cn(styles.doubleCard)}
                style={{ backgroundImage: `url(${el.src})` }}
              >
                <div className={styles.title}>{t(el.title)}</div>
                <div className={styles.subtitle}>{t(el.subtitle)}</div>
              </div>
              <div
                className={cn(styles.doubleCard)}
                style={{ backgroundImage: `url(${el.src2})` }}
              >
                <div className={styles.title}>{t(el.title2)}</div>
                <div className={styles.subtitle}>{t(el.subtitle)}</div>
              </div>
            </div>
          );
        }

        return (
          <div
            key={index}
            className={cn(styles.card, {
              [styles.mobile]: el.mobile,
            })}
            style={{ backgroundImage: `url(${el.image})` }}
          >
            <div className={styles.title}>{t(el.title)}</div>
            <div className={styles.subtitle}>{t(el.subtitle)}</div>
          </div>
        );
      })}
    </section>
  );
}
