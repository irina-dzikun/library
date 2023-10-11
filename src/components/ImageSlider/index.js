import React, { useState } from "react";

import styles from "./style.module.css";

import sliderData from "../../sliderData";

const ImageSlider = () => {
  const allImages = sliderData;
  const [selectedImages, setSelectedImages] = useState(allImages.slice(0, 3));

  function sliderStart() {
    setSelectedImages(allImages.slice(0, 3));
  }

  function sliderRight() {
    setSelectedImages(allImages.slice(1, 4));
  }

  function sliderEnd() {
    setSelectedImages(allImages.slice(2, 5));
  }

  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img src={selectedImages[0]} alt="slider" />
        <img src={selectedImages[1]} alt="slider" />
        <img src={selectedImages[2]} alt="slider" />
      </div>
      <div className={styles.scroll}>
        <button
          className={styles.slider_dot}
          onClick={() => {
            sliderStart();
          }}
        ></button>
        <button
          className={styles.slider_dot}
          onClick={() => {
            sliderRight();
          }}
        ></button>
        <button
          className={styles.slider_dot}
          onClick={() => {
            sliderEnd();
          }}
        ></button>
      </div>
    </div>
  );
};

export default ImageSlider;
