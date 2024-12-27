import {useTranslation} from "next-i18next";
import Button from "@/components/button/Button";
import React from "react";
import {useRouter} from "next/router";
import cn from "classnames";

import styles from "./UniversalCardSection.module.scss";

export default function UniversalCardSection({props}) {
  const { t } = useTranslation();
  const {title, subtitle, video, button, link} = props;
  const router = useRouter();

  const handleClick = () => {
    if (link) router.push(link)
  }

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>{t(title)}</div>
          <div className={styles.subtitle}>{t(subtitle)}</div>
          {button ? (
              <Button className={cn(styles.button, styles.buttonDesktop)} onClick={()=> handleClick()}>{t(button)}</Button>
          ) : null}
        </div>
        <div className={styles.video}>
          <iframe
            src={video}
            width="100%"
            height="100%"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        {button ? (
            <Button className={cn(styles.button, styles.buttonMobile)} onClick={()=> handleClick()}>{t(button)}</Button>
        ) : null}
      </div>
    </section>
  );
}
