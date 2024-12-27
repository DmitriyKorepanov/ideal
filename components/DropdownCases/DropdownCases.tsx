import Link from "next/link";
import cn from "classnames";
import { useTranslation } from "next-i18next";

import styles from "./DropdownCases.module.scss";

export default function DropdownCases({
  isDropdownShowed,
}: {
  isDropdownShowed: boolean;
}) {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <ul
        className={cn(styles.list, {
          [styles.listActive]: isDropdownShowed,
        })}
      >
        <li className={styles.item}>
          <Link href="cases-robotization" className={styles.link}>
              {t('header.dropdown.link1')}
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="cases-machine-vision" className={styles.link}>
              {t('header.dropdown.link2')}
          </Link>
        </li>
      </ul>
    </div>
  );
}
