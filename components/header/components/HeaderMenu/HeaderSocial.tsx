import Image from "next/image";
import Link from "next/link";

import styles from "./HeaderSocial.module.scss";

export default function HeaderSocial() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href=" https://vk.com/idealtechno_cases"
        >
          <Image
            className={styles.icon}
            priority
            src="/icons/vk.svg"
            width={30}
            height={30}
            alt="icon"
          />
        </a>
      </li>
      <li className={styles.item}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/idealtechno_ru"
        >
          <Image
            className={styles.icon}
            priority
            src="/icons/tg.svg"
            width={30}
            height={30}
            alt="icon"
          />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href={"https://www.youtube.com/@idealtechno"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.icon}
            priority
            src="/icons/youtube.svg"
            width={30}
            height={30}
            alt="icon"
          />
        </a>
      </li>
    </ul>
  );
}
