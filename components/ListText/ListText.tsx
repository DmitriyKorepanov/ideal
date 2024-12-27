import { useTranslation } from "next-i18next";
import cn from "classnames";

import styles from "./ListText.module.scss";

interface ListItem {
  title: string;
  subtitle: string;
}

interface ListTextProps {
  list: ListItem[];
}

export default function ListText({ list }: ListTextProps) {
  const { t } = useTranslation();
  const count = list.length;
  let modificatorClassName = "";
  switch (count) {
    case 4:
      modificatorClassName = styles.list_4;
      break;
    default:
      break;
  }

  return (
    <ul className={cn(styles.list, modificatorClassName)}>
      {list?.map((el, index) => {
        return (
          <div key={index}>
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: t(el?.title) }}
            ></div>
            <div
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: t(el?.subtitle) }}
            ></div>
          </div>
        );
      })}
    </ul>
  );
}
