import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Home.module.css";
import stylesTypography from "../styles/Typography.module.css";
import { BrowserView, MobileView } from "react-device-detect";

const SliderComponent = () => {
  return (
    <div>
      <div className={styles.sliderContainer}>
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <p>
                Every smoothie is an{" "}
                <span className={stylesTypography.importantWord}>
                  experience
                </span>
                . Make it count!
              </p>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src="/coconut_slide.png"
              alt="Smoothie coconut"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <p>
                Loose{" "}
                <span className={stylesTypography.importantWord}>weight</span>
                <br />
                Add{" "}
                <span className={stylesTypography.importantWord}>muscle</span>
                <br />
                Stay{" "}
                <span className={stylesTypography.importantWord}>alert</span>
              </p>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src="/apple_slide.png"
              alt="Smoothie apple, loose weight"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <p>
                <span className={stylesTypography.importantWord}>
                  Healthy & Delicious
                </span>
              </p>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src="/orange_slide.png"
              alt="Smoothie orange, healthy food"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={styles.sliderContainerDesktop}>
        <div class="row">
          <div class="col-xs-6 col-sm-4">
            <p className={stylesTypography.paragraphGridDesktop}>
              Every smoothie is an{" "}
              <span className={stylesTypography.importantWord}>experience</span>
              . Make it count!
            </p>

            <img
              className="d-block w-100"
              src="/coconut_slide.png"
              alt="Smoothie coconut"
            />
          </div>

          <div class="col-xs-6 col-sm-4">
            <p className={stylesTypography.paragraphGridDesktop}>
              Loose{" "}
              <span className={stylesTypography.importantWord}>weight</span>
              <br />
              Add <span className={stylesTypography.importantWord}>muscle</span>
              <br />
              Stay <span className={stylesTypography.importantWord}>alert</span>
            </p>

            <img
              className="d-block w-100"
              src="/apple_slide.png"
              alt="Smoothie apple, loose weight"
            />
          </div>

          <div class="col-xs-6 col-sm-4">
            <p className={stylesTypography.paragraphGridDesktop}>
              <span className={stylesTypography.importantWord}>
                Healthy & Delicious
              </span>
            </p>

            <img
              className="d-block w-100"
              src="/orange_slide.png"
              alt="Smoothie orange, healthy food"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
