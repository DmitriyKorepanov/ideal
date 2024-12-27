import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import {useTranslation} from "next-i18next";

import styles from "./SlickSliderMultiSlide.module.scss";

export default function SlickSliderMultiSlide({ slides }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className:'multi-slide',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  };
  const { t } = useTranslation();
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {slides.map((el, index) => {
          return (
            <div key={index}>
              <div
                className={styles.slide}
                style={{ backgroundImage: `url(${el.image})` }}
              >
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
