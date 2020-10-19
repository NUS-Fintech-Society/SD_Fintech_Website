import React from "react";
import "styles/pages/Home.module.scss";

import DefaultDepartment from "components/Layouts/DefaultLayout/DefaultDepartment";

const Home = (props) => {
  return (
    <DefaultDepartment>
      <div className="container">
        <main className="main">
          <h1 className="title">NUS Fintech Society</h1>
        </main>
      </div>
    </DefaultDepartment>
  );
};

export default Home;