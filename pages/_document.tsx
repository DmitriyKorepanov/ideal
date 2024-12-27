import { Html, Head, Main, NextScript } from "next/document";
import { TPage } from "@/constants/types";
import React from "react";

export function getStaticProps(props: TPage) {
  const { locale } = props;
  return {
    props: {
      locale,
    },
  };
}

export default function Document(props: TPage) {
  const { locale } = props;
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <div id="Modal" />
        <NextScript />
      </body>
    </Html>
  );
}
