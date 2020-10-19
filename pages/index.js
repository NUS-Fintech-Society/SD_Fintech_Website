import React from "react";
import "styles/pages/Home.module.scss";

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
  );
};

export default Home;
