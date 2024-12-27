import Link from "next/link";
import React from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";

import Button from "@/components/button/Button";
import SlickSlider from "@/components/SlickSlider/SlickSlider";

import styles from "./CardSectionWithSlider.module.scss";

export default function CardSectionWithSlider({ cardSectionWithSliderProps }) {
  const {
    src,
    src2,
    title,
    title2,
    subtitle,
    subtitle2,
    buttonText,
    buttonText2,
    slides,
    fontSizeTitle,
    mobileFontSizeTitle,
    link,
  } = cardSectionWithSliderProps || {};

  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link
          href={link || "/"}
          className={cn(styles.wrapper, {
            [styles.wrapperSlider]: slides,
          })}
        >
          <div
            className={styles.picWrapper}
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className={styles.content}>
              <div className={styles.title}>
                <span
                  style={{ fontSize: fontSizeTitle }}
                  className={styles.desktop}
                >
                  {t(title)}
                </span>
                <span
                  style={{ fontSize: mobileFontSizeTitle }}
                  className={styles.mobile}
                >
                  {t(title)}
                </span>
              </div>
              <div className={styles.subtitle}>{t(subtitle)}</div>
              {buttonText ? (
                <Button className={styles.button}>{t(buttonText)}</Button>
              ) : null}
            </div>
          </div>
        </Link>
        {slides ? (
          <SlickSlider slides={slides}></SlickSlider>
        ) : (
          <Link href={"/"} className={styles.wideCard}>
            <div
              className={styles.picWrapper2}
              style={{ backgroundImage: `url(${src2})` }}
            >
              <div className={styles.content}>
                <div className={styles.title}>{t(title2)}</div>
                <div className={styles.subtitle}>{t(subtitle2)}</div>
                {buttonText ? (
                  <Button className={styles.button}>{t(buttonText2)}</Button>
                ) : null}
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
