  
import React from 'react'
import styles from "../styles/Home.module.css"


const FooterComponent = () =>{
return(
    <footer className={styles.footer}>
        <a
          href="https://patrykkoziel.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smoothie Delight
        </a>
      </footer>
)
}

export default FooterComponent;