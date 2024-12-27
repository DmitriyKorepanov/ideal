import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import HeaderMenu from "./components/HeaderMenu/HeaderSocial";
import { useTranslation } from "next-i18next";
import Button from "@/components/button/Button";
import DropdownLng from "@/components/DropdownLng/DropdownLng";
import Modal from "@/components/Modal/Modal";

import styles from "./Header.module.scss";

type THeader = {
  activeNavIndex: number;
  isPositionAbsolute?: boolean;
};

export default function Header(props: THeader) {
  const { activeNavIndex, isPositionAbsolute } = props;
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [isShowed, setIsShowed] = useState(false);

  const handleClickItem = () => {
    setIsShowed(!isShowed);
  };

  const modalTexts = {
    title: t("modal.title"),
    fio: t("modal.fio"),
    mail: t("modal.mail"),
    phone: t("modal.phone"),
    comment: t("modal.comment"),
    button: t("modal.button"),
    legal: t("modal.legal")
  }

  const src = isShowed ? `url(/icons/cross.svg)` : `url(/icons/burger.svg)`;

  return (
    <header
      className={cn(styles.header, {
        [styles.header_absolute]: isPositionAbsolute,
        [styles.header_mobile]: isShowed,
      })}
    >
      <div className={styles.containerDesktop}>
        <Link href={"/"}>
          <div className={styles.logo}></div>
        </Link>

        <HeaderNav activeNavIndex={activeNavIndex} />
        <DropdownLng></DropdownLng>
        <HeaderMenu />
        <Button onClick={toggleModal}>{t("header.button")}</Button>
      </div>
      <div className={styles.containerMobile}>
        <div className={styles.top}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              priority
              src="/icons/logo.svg"
              width={40}
              height={35}
              alt="Logo idealTechno"
            />
          </Link>
          <div className={styles.burgerWrapper}>
            <div
              className={styles.burger}
              onClick={handleClickItem}
              style={{ backgroundImage: src }}
            ></div>
          </div>
        </div>
      </div>
      {isShowed ? (
        <>
          <div className={styles.mobileContent}>
            <HeaderNav activeNavIndex={activeNavIndex} />
            <DropdownLng></DropdownLng>
            <HeaderMenu />
            <Button onClick={toggleModal}>{t("header.button")}</Button>
          </div>
        </>
      ) : null}
      <Modal isOpen={isModalOpen} onClose={toggleModal} modalTexts={modalTexts} />
    </header>
  );
}
