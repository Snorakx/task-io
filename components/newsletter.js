import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Newsletter.module.css";
import { IconContext } from 'react-icons';

import { FaArrowDown } from "react-icons/fa";

const NewsletterComponent = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.getresponse.com/view_webform_v2.js?u=yeyKO&webforms_id=SA0BC"
        script.async = true;
        script.type ="text/javascript";
        document.body.appendChild(script);
      },[]);
  return (
    <div className={styles.newsletterContainer}>
        <FaArrowDown />
    </div>
  );
};

export default NewsletterComponent;
