import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import plusIcon from "@/public/icons/plusIcon.png";
import minusIcon from "@/public/icons/minus_icon.png";

import styles from "./FAQ.module.scss";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    faqData: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { t } = useTranslation();
  return (
    <div className={styles.faq}>
      <h1 className={styles.title}>FAQ</h1>
      <ul className={styles.list}>
        {faqData.map((item: any, index: number) => (
          <li key={index} className={styles.item}>
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              {t(item.question)}
              <span className={styles.toggle}>
                {openIndex === index ? (
                  <img
                    src={minusIcon.src}
                    alt="Minus"
                    className={styles.icon}
                  />
                ) : (
                  <img src={plusIcon.src} alt="Plus" className={styles.icon} />
                )}
              </span>
            </div>
            {openIndex === index && (
              <div className={styles.answer}>{t(item.answer)}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
