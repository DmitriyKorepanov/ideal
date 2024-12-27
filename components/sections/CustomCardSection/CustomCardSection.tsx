import React from "react";
import { useTranslation } from "next-i18next";

import styles from "./CustomCardSection.module.scss";
import cn from "classnames";

export default function CustomCardSection({
  title,
  title2,
  subtitle,
  subtitle2,
  src,
  list,
}: any) {
  const { t } = useTranslation();

  return (
    <>
      <section className={cn(styles.section, styles.sectionDesktop)}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>{t(title)}</div>
            <div className={styles.subtitle}>{t(subtitle)}</div>
            <div
              className={styles.imgWrapper}
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </div>
          <div className={styles.wrapper2}>
            <div className={styles.title2}>{t(title2)}</div>
            <div className={styles.subtitle2}>{t(subtitle2)}</div>

            {list ? (
              <ul className={styles.list}>
                {list?.map((el: any, index: number) => {
                  return (
                    <li key={index} className={styles.item}>
                      <div
                        className={styles.itemTitle}
                        dangerouslySetInnerHTML={{ __html: t(el?.title) }}
                      ></div>
                      <div
                        className={styles.itemSubtitle}
                        dangerouslySetInnerHTML={{ __html: t(el?.subtitle) }}
                      ></div>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </section>

      <section className={cn(styles.section, styles.sectionMobile)}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div
              className={styles.imgWrapper}
              style={{ backgroundImage: `url(${src})` }}
            ></div>
            <div className={styles.title}>{t(title)}</div>
            <div className={styles.title2}>{t(title2)}</div>
            <div className={styles.subtitle2}>{t(subtitle2)}</div>
            <div className={styles.subtitle}>{t(subtitle)}</div>
          </div>

          {list ? (
            <ul className={styles.list}>
              {list?.map((el: any, index: number) => {
                return (
                  <li key={index} className={styles.item}>
                    <div
                      className={styles.itemTitle}
                      dangerouslySetInnerHTML={{ __html: t(el?.title) }}
                    ></div>
                    <div
                      className={styles.itemSubtitle}
                      dangerouslySetInnerHTML={{ __html: t(el?.subtitle) }}
                    ></div>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </section>
    </>
  );
}
