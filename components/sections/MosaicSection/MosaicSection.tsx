import Link from "next/link";

import styles from "./MosaicSection.module.scss";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import Button from "@/components/button/Button";

type TCard = {
  name: string;
  link: string;
  image: string;
};

export default function MosaicSection({ cards }: { cards: TCard[] }) {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {cards?.map((el: any, index: number) => {
          return (
            <li key={index} className={styles.item}>
              <Link
                href={el.link}
                className={cn(styles.link, {
                  [styles.linkDisabled]: el.disabled,
                })}
              >
                <div
                  className={styles.card}
                  style={{ backgroundImage: `url(${el.image})` }}
                >
                  <div className={styles.content}>
                    <div className={styles.title}>{t(cards[index].name)}</div>
                    <Button className={styles.button}>
                      {t("mosaicSection.button")}
                    </Button>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </div>
    </section>
  );
}
