import { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./DropdownLng.module.scss";

export default function DropdownLng() {
  const [isShowed, setIsShowed] = useState(false);
  const { locale } = useRouter();
  const currentLanguage = locale?.toUpperCase() || "RU";
  const [language, setLanguage] = useState(currentLanguage);

  const handleClickDropdown = () => {
    setIsShowed(!isShowed);
  };

  const handleClickItem = (lang: string) => {
    setLanguage(lang);
    setIsShowed(!isShowed);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdown} onClick={handleClickDropdown}>
        {language}
      </div>
      <ul
        className={cn(styles.list, {
          [styles.listActive]: isShowed,
        })}
      >
        <li className={styles.item} onClick={() => handleClickItem("EN")}>
          <Link href="" locale="en" className={styles.lang}>
            EN
          </Link>
        </li>
        <li className={styles.item} onClick={() => handleClickItem("RU")}>
          <Link href="" locale="ru">
            RU
          </Link>
        </li>
      </ul>
    </div>
  );
}
