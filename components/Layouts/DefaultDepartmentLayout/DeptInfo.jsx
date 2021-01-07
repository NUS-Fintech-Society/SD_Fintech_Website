import styles from "./DefaultDepartmentLayout.module.scss";

const DeptInfo = (props) => {
  const deptInfo = props.deptInfo;

  return (
    <div className={styles.layout}>
      <div className={styles.title}>
        <h2>{deptInfo.name} Department</h2>
      </div>
      <div className={styles.flex}>
        <div className={styles.blank} />
        <div className={styles.container}>
          <div className={styles.boxtitle}>
            <h3 style={{ color: "#ffffff" }}>Purpose</h3>
          </div>
          <div className={styles.boxbody}>
            <p style={{ color: "#ffffff" }}>{deptInfo.purpose}</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.boxtitleright}>
            <h3 style={{ color: "#ffffff" }}>Goal</h3>
          </div>
          <div className={styles.boxbodyright}>
            <p style={{ color: "#ffffff" }}> {deptInfo.goal}</p>
          </div>
        </div>
        <div className={styles.blank}></div>
      </div>
    </div>
  );
};

export default DeptInfo;
