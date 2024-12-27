import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import Button from "@/components/button/Button";
import ListText from "@/components/ListText/ListText";
import cn from "classnames";

import styles from "./CardSection.module.scss";

interface CardSectionProps {
  cardSection: {
    button?: string;
    position?: number;
    title?: string;
    subtitle?: string;
    src?: string;
    textBlock?: string;
    list?: any[];
    isBigCard?: boolean;
    backgroundColor?: string;
    marginTop?: string;
  };
}

export default function CardSection({ cardSection }: CardSectionProps) {
  const { t } = useTranslation();
  const {
    button,
    position = 0,
    list,
    isBigCard,
    textBlock = "",
    src,
    title = "",
    subtitle = "",
    backgroundColor,
    marginTop,
  } = cardSection || {};

  const buttonText = button;
  return (
    <section  style={{ marginTop: marginTop }} className={styles.section}>
      <div
        className={cn(styles.container, {
          [styles.alignTop]: isBigCard,
        })}
      >
        <Link href={"/"} className={styles.wrapper} style={{ order: position }}>
          <div
            className={cn(styles.imgWrapper, {
              [styles.bigImage]: isBigCard,
            })}
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className={styles.content}>
              <div className={styles.title}>{t(title)}</div>
              <div className={styles.subtitle}>{t(subtitle)}</div>
              {buttonText ? (
                <Button className={styles.button}>{t(buttonText)}</Button>
              ) : null}
            </div>
          </div>
        </Link>
        <div
          className={cn(styles.textBlock, {
            [styles.textBlock_big]: isBigCard,
          })}
          style={{ backgroundColor: backgroundColor }}
        >
          {list ? (
            <ListText list={list}></ListText>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: t(textBlock) }}></div>
          )}
        </div>
      </div>
    </section>
  );
}
