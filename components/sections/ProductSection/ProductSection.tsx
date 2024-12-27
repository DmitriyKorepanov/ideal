import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "@/components/button/Button";

import styles from "./ProductSection.module.scss";

type TProduct = {
  name: string;
  link: string;
  image: string;
};

export default function ProductSection({ products }: { products: TProduct[] }) {
  const { t } = useTranslation();
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {products?.map((el: any, index: number) => {
          return (
            <div
              key={index}
              className={styles.card}
              style={{ backgroundImage: `url(${el.image})` }}
            >
              <div className={styles.content}>
                <div className={styles.title}>{t(el.name)}</div>
                <Button
                  className={styles.button}
                  onClick={() => handleClick(el.link)}
                >
                  {t("mosaicSection.button")}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
