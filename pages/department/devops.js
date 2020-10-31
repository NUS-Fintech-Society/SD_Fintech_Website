import React from "react";

import DefaultDepartmentLayout from "components/Layouts/DefaultDepartmentLayout/DefaultDepartmentLayout";
import departmentData from "data/departmentData";

const DevOps = (props) => {
  return (
      <DefaultDepartmentLayout department = {departmentData[1]} />
  );
};

export default DevOps;
