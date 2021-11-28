import React from "react";

import Link from "next/link";
import styles from "./DepartmentSection.module.scss";
import { Container } from "react-bootstrap";

//No purpose data for now
const DepartmentSection = (props) => {
  const { icon, title, description, route } = props;
  return (
    <div className={styles.individualDepartment}>
      <div className={styles.departRow}>
        <div className={styles.colLeft}>
          <div>
            <div className={styles.header}>
              <img className={styles.icon} src={icon} />
              <h1>{title} Department</h1>
            </div>
            <h2>Purpose</h2>
            <p>
              Explore beyond our school syllabus and expose our members to
              working with real and complex datasets
            </p>
            <h2>Team Leads</h2>
            <div className={styles.header}>
              <img
                className={styles.image}
                alt="mockTeamLead"
                src="teamlead.png"
              ></img>
              <p className={styles.text}>Loh Zihua</p>
              <img
                className={styles.image}
                alt="mockTeamLead"
                src="teamlead.png"
              ></img>
              <p className={styles.text}>Loh Zihua</p>
            </div>
            <div className={styles.header}>
              <img
                className={styles.image}
                alt="mockTeamLead"
                src="teamlead.png"
              ></img>
              <p className={styles.text}>Loh Zihua</p>
              <img
                className={styles.image}
                alt="mockTeamLead"
                src="teamlead.png"
              ></img>
              <p className={styles.text}>Loh Zihua</p>
            </div>
          </div>
        </div>
        <div className={styles.colRight}>
          <h2>Directors</h2>
          <div className={styles.row}>
            <img
              className={styles.image}
              alt="mockTeamLead"
              src="teamlead.png"
            ></img>
            <p>Loh Zihua</p>
          </div>
          <div className={styles.row}>
            <img
              className={styles.image}
              alt="mockTeamLead"
              src="teamlead.png"
            ></img>
            <p>Loh Zihua</p>
          </div>
          <h2> Vision</h2>
          <p className={styles.text}>
            To foster a community of data-savy members who are comfortable with
            wrangling and deriving insights from data
          </p>
        </div>
      </div>

      <Link href={route} passHref={true}>
        <div className={styles.button}>
          <p className={styles.text}>Find out more {">"}</p>
        </div>
      </Link>
    </div>
  );
};

export default DepartmentSection;
