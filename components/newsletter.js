import React, { useEffect } from "react";
import styles from "../styles/Newsletter.module.css";

import { HiChevronDown } from "react-icons/hi";

const NewsletterComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.getresponse.com/view_webform_v2.js?u=yeyKO&webforms_id=SA0BC";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);
  return (
    <div className={styles.newsletterContainer}>
      <HiChevronDown />
    </div>
  );
};

export default NewsletterComponent;
