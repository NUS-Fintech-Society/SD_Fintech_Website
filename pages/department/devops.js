import React, { useEffect, useState } from "react";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DefaultDepartmentLayout from "components/Layouts/DefaultDepartmentLayout/DefaultDepartmentLayout";
import departmentData from "data/departmentData";

const DevOps = (props) => {

  const [devOpsData, setDevOpsData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDevOpsData(departmentData[0]);
    setIsLoading(false);
  }, []);


  return (
    <DefaultLayout>
      <div>
        <h1>DevOps Page</h1>
      </div>
    </DefaultLayout>
  );
};

export default DevOps;
