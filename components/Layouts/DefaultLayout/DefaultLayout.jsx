import React from "react";
import Head from "next/head";
import styles from "./DefaultLayout.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

const DefaultLayout = (props) => {
  return (
    <div className={styles.layout}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
          rel="stylesheet"
        />
        <title>NUS FinTech Society</title>
      </Head>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
