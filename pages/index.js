import React from "react";
import styles from "styles/pages/Home.module.scss";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";

const Home = (props) => {
  return (
    <DefaultLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>NUS Fintech Society</h1>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default Home;
