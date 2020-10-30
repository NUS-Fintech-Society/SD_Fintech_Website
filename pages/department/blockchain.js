import React from "react";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DefaultDepartmentLayout from "components/Layouts/DefaultDepartmentLayout/DefaultDepartmentLayout";
import departmentData from "data/departmentData";

const blockchain = (props) => {
  return (
    <DefaultLayout>
      <DefaultDepartmentLayout department = {departmentData[0]} />
    </DefaultLayout>
  );
};


export default blockchain;

