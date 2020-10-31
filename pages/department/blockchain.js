import React from "react";

import DefaultDepartmentLayout from "components/Layouts/DefaultDepartmentLayout/DefaultDepartmentLayout";
import departmentData from "data/departmentData";

const blockchain = (props) => {
  return (
    <DefaultDepartmentLayout department = {departmentData[0]} />
  );
};


export default blockchain;

