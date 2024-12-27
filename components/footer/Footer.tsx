import Image from "next/image";
import { LINKS_GROUP } from "./constants";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import cn from "classnames";
import Button from "@/components/button/Button";
import SocialList from "@/components/SocialList/SocialList";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

import styles from "./Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const modalTexts = {
    title: t("modal.title"),
    fio: t("modal.fio"),
    mail: t("modal.mail"),
    phone: t("modal.phone"),
    comment: t("modal.comment"),
    button: t("modal.button"),
    legal: t("modal.legal")
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <Image
            className={styles.logo}
            priority
            src="/icons/logo.svg"
            width={120}
            height={106}
            alt="Logo idealtechno"
          />
          <p className={styles.subtitle}>{t(`footer.about.description`)}</p>
          <SocialList isMobile></SocialList>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            {LINKS_GROUP.map((el: any, index: number) => {
              return (
                <div key={index} className={styles.column}>
                  <ul>
                    {el.links.map((el: any, index: number) => {
                      return (
                        <li key={index} className={styles.item}>
                          <Link
                            href={el.link}
                            className={cn(styles.link, {
                              [styles.linkDisabled]: el.disabled,
                            })}
                          >
                            {t(`footer.links.${el.name}`)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div className={styles.social}>
              <Button onClick={toggleModal}>{t("header.button")}</Button>
              <ul className={styles.socialList}>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href=" https://vk.com/idealtechno_cases"
                  >
                    <Image
                      className={styles.socialIcon}
                      priority
                      src="/icons/vk_footer.svg"
                      height={25}
                      width={25}
                      alt="Logo vk"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://t.me/idealtechno_ru"
                  >
                    <Image
                      className={styles.socialIcon}
                      priority
                      src="/icons/tg_footer.svg"
                      height={25}
                      width={25}
                      alt="Logo tg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={"https://www.youtube.com/@idealtechno"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles.socialIcon}
                      priority
                      src="/icons/youtube_footer.svg"
                      height={25}
                      width={25}
                      alt="Logo youtube"
                    />
                  </a>
                </li>
                <li>
                  <Link
                    href={"/contacts"}
                  >
                    <Image
                      className={styles.socialIcon}
                      priority
                      src="/icons/whatsapp_footer.svg"
                      height={25}
                      width={25}
                      alt="Logo youtube"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <SocialList></SocialList>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} modalTexts={modalTexts} />
    </footer>
  );
}
