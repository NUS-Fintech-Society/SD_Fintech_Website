import React from "react";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DefaultDepartmentLayout from "components/Layouts/DefaultDepartmentLayout/DefaultDepartmentLayout";
import departmentData from "data/departmentData";

const DevOps = (props) => {
  return (
    <DefaultLayout>
      <DefaultDepartmentLayout department = {departmentData[1]} />
    </DefaultLayout>
  );
};

export default DevOps;
