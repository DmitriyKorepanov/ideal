import styles from "./TitleWithImageSection.module.scss";
import { useTranslation } from "next-i18next";

export default function TitleWithImageSection({
  title,
  background,
  color,
  hideIcon,
}: {
  title: string;
  background?: string;
  color?: string;
  hideIcon?: boolean;
}): JSX.Element {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${background})`,
          color: color,
        }}
      >
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: t(title) }}
        ></div>
        {!hideIcon && <div className={styles.icon}></div>}
      </div>
    </section>
  );
}
