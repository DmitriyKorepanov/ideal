import {useTranslation} from "next-i18next";

import styles from "./FormSection.module.scss";
import Button from "@/components/button/Button";

export default function FormSection() {
    const { t } = useTranslation();
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('contactForm.title')}</h2>
          <form action="" className={styles.form}>
            <div className={styles.inputWrapper}>
              <input className={styles.input} type="text" placeholder={'12345abcd@mail.ru'} />
            </div>
            <Button className={styles.button}>{t("header.button")}</Button>
          </form>
          <div className={styles.disclaimer}>{t('contactForm.disclaimer')}</div>
        </div>
      </section>
    );
}
