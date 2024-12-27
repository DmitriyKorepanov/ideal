import cn from "classnames";
import { useTranslation } from "next-i18next";

import styles from "./TextSection.module.scss";

type TTextSection = {
  title: string;
  subtitle: string;
  subtitle2?: string;
  variantGrid?: boolean;
  src?: string;
  align?: string;
  size?: 36 | 38 | 42 | 46;
};

export default function TextSection(props: TTextSection) {
  const {
    title,
    subtitle,
    subtitle2 = "",
    src,
    align,
    size,
    variantGrid,
  } = props;
  let fontSizeClass = "";

  switch (size) {
    case 36:
      fontSizeClass = styles.text36;
      break;
    case 38:
      fontSizeClass = styles.text38;
      break;
    case 42:
      fontSizeClass = styles.text42;
      break;
    case 46:
      fontSizeClass = styles.text46;
      break;
    default:
      break;
  }

  const { t } = useTranslation();
  const alignText = align ? styles.alignLeft : "";

  return (
    <section className={cn(styles.section, alignText)}>
      {variantGrid ? (
        <div className={styles.containerColumn}>
          <div className={styles.wrapper}>
            <div className={cn(styles.subtitle, fontSizeClass)}>
              {t(subtitle)}
            </div>
            <div className={cn(styles.subtitle, fontSizeClass)}>
              {t(subtitle2)}
            </div>
          </div>
          <div className={cn(styles.title, fontSizeClass)}>{t(title)}</div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={cn(styles.title, fontSizeClass)}>{t(title)}</div>
          <div className={cn(styles.subtitle, fontSizeClass)}>
            {t(subtitle)}
          </div>
        </div>
      )}
    </section>
  );
}
