import React from "react";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DefaultDepartmentLayout from "components/Layouts/DefaultDepartmentLayout/DefaultDepartmentLayout";

const blockchain = (props) => {
  return (
    <DefaultLayout>
      <DefaultDepartmentLayout>
        <div>
          <h1 >Blockchain Department</h1>
        </div>
        <div>
          Equip our members with practical knowledge of Blockchain technology
      </div>
        <div>
          To nurture a community of blockchain enthusiasts, where members can learn
      </div>
      </DefaultDepartmentLayout>
    </DefaultLayout>
  );
};


export default blockchain;

