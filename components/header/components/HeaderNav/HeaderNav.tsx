import Link from "next/link";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import styles from "./HeaderNav.module.scss";
import DropdownCases from "@/components/DropdownCases/DropdownCases";

export default function HeaderNav(props: any) {
  const { activeNavIndex } = props;
  const { t } = useTranslation();
  const CATEGORIES = [
    { name: "Home", link: "/" },
    { name: "About_us", link: "/about-us" },
    { name: "Automation", link: "/automation" },
    { name: "Robots", link: "/robots" },
    { name: "Machine_vision", link: "/machine-vision" },
    { name: "Cases", link: "/cases", dropdown: true },
    { name: "Contacts", link: "/contacts" },
  ];
  const [isDropdownShowed, setIsDropdownShowed] = useState(false);
  const showDropdown = () => {
    setIsDropdownShowed(!isDropdownShowed);
  };
  return (
    <ul className={styles.list}>
      {CATEGORIES.map((el: any, index: number) => {
        const isActiveCategory = activeNavIndex === index;
        if (el.dropdown) {
          return (
            <li
              className={styles.item}
              key={index}
              onClick={() => showDropdown()}
            >
              <div
                className={cn(styles.link, {
                  [styles.linkActive]: isActiveCategory,
                  [styles.linkDisabled]: el.disabled,
                })}
              >
                {t(`header.headerNav.${el.name}`)}
              </div>
              <DropdownCases isDropdownShowed={isDropdownShowed}></DropdownCases>
            </li>
          );
        }
        return (
          <li className={styles.item} key={index}>
            <Link
              href={el.link}
              className={cn(styles.link, {
                [styles.linkActive]: isActiveCategory,
                [styles.linkDisabled]: el.disabled,
              })}
            >
              {t(`header.headerNav.${el.name}`)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
