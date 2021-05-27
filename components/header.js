import React from "react";
import styles from "../styles/Typography.module.css";

const HeaderComponent = () => {
  return (
    <div class={styles.titleContainer}>
      <h1>
        Smoothie <div class={styles.stripe}></div><span class={styles.titleSecondWord}>Delight</span>
      </h1>
    </div>
  );
};

export default HeaderComponent;
