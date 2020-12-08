import React from "react";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DeptInfo from "./DeptInfo";
import ProjLayout from "./ProjLayout";

const DefaultDepartmentLayout = (props) => {
  const data = props.department;

  return (
    <div>
      <DefaultLayout>
        <DeptInfo deptInfo={data} />
          {data.projects.map((project) => {
            return <ProjLayout project={project} />;
          })}
      </DefaultLayout>
    </div>
  );
};

export default DefaultDepartmentLayout;
