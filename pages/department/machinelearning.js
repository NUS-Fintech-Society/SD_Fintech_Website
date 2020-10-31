import React from "react";

import DefaultDepartmentLayout from "components/Layouts/DefaultDepartmentLayout/DefaultDepartmentLayout";
import departmentData from "data/departmentData";

const MachineLearning = (props) => {
  return (
      <DefaultDepartmentLayout department = {departmentData[2]} />
  );
};

export default MachineLearning;

