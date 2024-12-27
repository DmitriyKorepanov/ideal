import styles from "./TitleSection.module.scss";
import cn from "classnames";
import { useTranslation } from "next-i18next";

export default function TitleSection({
  title,
  align,
  size,
}: {
  title: string;
  align?: string;
  size?: 36 | 38 | 42 | 46;
}) {
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
      <div className={cn(styles.text, fontSizeClass)}>{t(title)}</div>
    </section>
  );
}
