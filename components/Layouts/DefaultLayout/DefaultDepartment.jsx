import React from "react";
import Head from "next/head";
import styles from "./DefaultDepartment.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

const DefaultDepartment = (props) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>NUS FinTech</title>
      </Head>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultDepartment;
