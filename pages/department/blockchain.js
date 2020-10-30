import React from "react";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DefaultDepartmentLayout from "components/Layouts/DefaultDepartmentLayout/DefaultDepartmentLayout";
import departmentData from "data/departmentData";

const blockchain = (props) => {
  return (
    <DefaultLayout>
      <DefaultDepartmentLayout>
        <div>
          <h1>{departmentData[0].deptName}</h1>
        </div>
        <div>
          {departmentData[0].purpose}
        </div>
        <div>
          {departmentData[0].goal}
        </div>
      </DefaultDepartmentLayout>
    </DefaultLayout>
  );
};


export default blockchain;

