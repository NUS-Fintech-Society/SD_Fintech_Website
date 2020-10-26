import React from "react";
import styles from "styles/pages/Home.module.scss";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DeptLayoutBottom from "components/Layouts/DefaultLayout/DeptLayoutBottom";

const Home = (props) => {
  return (
    <DeptLayoutBottom>
      <div className="container">
        <main className="main">
          <h1 className="title">NUS Fintech Society</h1>
        </main>
      </div>
    </DeptLayoutBottom>

      // <DefaultLayout>
      //   <div className={styles.container}>
      //     <main className={styles.main}>
      //       <h1 className={styles.title}>NUS Fintech Society</h1>
      //     </main>
      //   </div>
      // </DefaultLayout>
  );
};

export default Home;
