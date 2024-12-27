import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import {useTranslation} from "next-i18next";

import styles from "./SlickSlider.module.scss";

export default function SlickSlider({ slides }) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { t } = useTranslation();
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {slides.map((el: any, index: number) => {
          return (
            <div key={index}>
              <div
                className={styles.slide}
                style={{ backgroundImage: `url(${slides[index].image})` }}
              >
                <Link href={el.link}>
                  <div className={styles.sliderButton}>
                    {t(slides[index].title)}
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
