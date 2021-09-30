import React, { useState, useEffect } from "react";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DeptInfo from "./DeptInfo";
import ProjLayout from "./ProjLayout";

import * as departmentsData from 'data/mock/departments.json';

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
      const data = Array.from(departmentsData);
      setData(data[deptId - 1]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <DefaultLayout>
        <div
        style={{ marginTop: "2rem" }}
        >
      {data && <DeptInfo deptInfo={data} />}
        <div style={{backgroundColor:'rgba(196, 196, 196, 0.2)',paddingBottom:'3%'}}>
          {data &&
            data.projects.map((project, index) => (
              <ProjLayout key={project.id} project={project} index={index} deptId={deptId}/>
            ))}
        </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default DefaultDepartmentLayout;
