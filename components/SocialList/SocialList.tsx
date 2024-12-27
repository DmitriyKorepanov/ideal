import { useTranslation } from "next-i18next";
import cn from "classnames";

import styles from "./SocialList.module.scss";

export default function SocialList({ isMobile }: { isMobile?: boolean }) {
  const { t } = useTranslation();
  return (
    <ul
      className={cn(styles.legals, {
        [styles.legalsMobile]: isMobile,
        [styles.legalsDesktop]: !isMobile,
      })}
    >
      <li className={styles.legal}> {t(`footer.legals.legal_1`)}</li>
      <li className={styles.legal}> {t(`footer.legals.legal_2`)}</li>
      <li className={styles.legal}> {t(`footer.legals.legal_3`)}</li>
      <li className={styles.legal}> {t(`footer.legals.legal_4`)}</li>
    </ul>
  );
}
