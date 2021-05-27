import Head from "next/head";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import SliderComponent from "../components/slider";
import NewsletterComponent from "../components/newsletter";

import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Smoothie Delight</title>
        <meta name="description" content="Healthy & Delicious" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </Head>
      <main>
        <HeaderComponent />
        <SliderComponent />
        <NewsletterComponent/>
      </main>
    </div>
  );
}
