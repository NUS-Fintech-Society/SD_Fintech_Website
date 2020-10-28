import React from "react";
import Head from "next/head";
import styles from "./DefaultDepartment.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

const DefaultDepartment = (props) => {
  return (
    <div>
      <Head>
        <title>NUS FinTech Society</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <NavBar />
      <div className={styles.layout}>
        
        <div className={styles.title}>
          {props.children[0]}
        </div>
        <div className={styles.flex}>

          <div className={styles.blank}></div>
          <div className={styles.container}>
            <div className={styles.boxtitle}>
              <h3>Purpose</h3>
            </div>
            <div className={styles.boxbody}>
              {props.children[1]}
            </div>
            <hr className={styles.line}></hr>
            <div className={styles.imageleft}>

            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.boxtitleright}>
              <h3>Goal</h3>
            </div>
            <div className={styles.boxbodyright}>
              {props.children[2]}
            </div>
            <hr className={styles.lineright}></hr>
            <div className={styles.image}>
            </div>
          </div>
          <div className={styles.blank}></div>
        </div>
      </div>
      <Footer />
    </div>

  );
};



export default DefaultDepartment;
