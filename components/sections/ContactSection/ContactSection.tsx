import Link from "next/link";
import React from "react";

import styles from "./ContactSection.module.scss";

interface ContactSectionProps {
  contactSection: {
    src: string;
    marginTop?: string;
  };
}

export default function ContactSection({ contactSection }: ContactSectionProps) {
  const {
    src,
    marginTop = "30px",
  } = contactSection || {};

  return (
    <section style={{ marginTop: marginTop }} className={styles.section}>
      <div className={styles.container}>
        <Link href={"/contacts"}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </Link>
      </div>
    </section>
  );
}
