import React, { useState } from "react";
import styles from "./DefaultDepartmentLayout.module.scss";
import ProjImageComponent from "./ProjImageComponent";
import Slider from "react-slick";

const ProjLayout = (props) => {
  const project = props.project;
  const projectIndex = props.index;
  const projectOddIndex = projectIndex % 2 == 1;

  const renderOddProj = () => (
    <div className={styles.projectcontainer}>
      <ProjImageComponent project={project} />
      <div className={styles.detailcontainer}>
        <div className={styles.projectNumberingRow}>
          {/* <div className={styles.projectNumberingLineOdd}>
            <h1>________________________</h1>
          </div> */}
          <div className={styles.projectNumberingTextOdd}>
            <h2>Project {projectIndex + 1}</h2>
          </div>
        </div>
        <div className={styles.projecttitle}>
          <h3>{project.title}</h3>
          <div className={styles.projectdetailtext}>{project.details}</div>
        </div>
      </div>
    </div>
  );

  const renderEvenProj = () => (
    <div className={styles.projectcontainer}>
      <div className={styles.detailcontainerleft}>
        <div className={styles.projectNumberingRow}>
          <div className={styles.projectNumberingTextEven}>
            {/* We use the word Event for operations department */}
            {props.deptId == 1 && <h2>Event {projectIndex + 1}</h2>}
            {props.deptId != 1 && <h2>Project {projectIndex + 1}</h2>}
          </div>
          {/* <div className={styles.projectNumberingLineEven}>
            <h1>________________________</h1>
          </div> */}
        </div>
        <div className={styles.projecttitle}>
          <h3>{project.title}</h3>
          <div className={styles.projectdetailtext}>{project.details}</div>
        </div>
      </div>
      <ProjImageComponent project={project} />
    </div>
  );

  return projectOddIndex ? renderOddProj() : renderEvenProj();
};

export default ProjLayout;
