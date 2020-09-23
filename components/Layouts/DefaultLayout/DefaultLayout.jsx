import React from "react";
import Head from "next/head";
import styles from "./DefaultLayout.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

const DefaultLayout = (props) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>NUS FinTech Society</title>
      </Head>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
