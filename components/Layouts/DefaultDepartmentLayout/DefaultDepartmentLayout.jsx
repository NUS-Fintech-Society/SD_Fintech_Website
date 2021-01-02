import React, { useState, useEffect } from "react";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DeptInfo from "./DeptInfo";
import ProjLayout from "./ProjLayout";
import request from "util/request";

const DefaultDepartmentLayout = (props) => {
  const deptId = props.deptId;
  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      //doing departments/deptId-Id doesn't work, getting a CORS error.
      //Access to XMLHttpRequest blocked. Temporary workaround
      const response = await request.get("departments/");
      setData(response.data[deptId - 1]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <DefaultLayout>
        {data && <DeptInfo deptInfo={data} />}
        {data &&
          data.projects.map((project,index) => (
            <ProjLayout key={project.id} project={project} index={index}/>
          ))}
      </DefaultLayout>
    </div>
  );
};

export default DefaultDepartmentLayout;
