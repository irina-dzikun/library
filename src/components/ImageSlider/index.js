import React from "react";

import styles from "./style.module.css";

import sliderOne from "../../images/slider-one.png";
import sliderTwo from "../../images/slider-two.png";
import sliderThree from "../../images/slider-three.png";
// import SliderFour from "../../images/slider-four.png"
// import SliderFive from "../../images/slider-five.png"

const ImageSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img src={sliderOne} alt="slider" />
        <img src={sliderTwo} alt="slider" />
        <img src={sliderThree} alt="slider" />
      </div>
      <div className={styles.scroll}>
        <button className={styles.slider_dot}></button>
        <button className={styles.slider_dot}></button>
        <button className={styles.slider_dot}></button>
      </div>
    </div>
  );
};

export default ImageSlider;
