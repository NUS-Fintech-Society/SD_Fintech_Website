import styles from "./DefaultDepartmentLayout.module.scss";

const DeptInfo = (props) => {
    const deptInfo = props.deptInfo;

  return (
    <div className={styles.layout}>
      <div className={styles.title}>
        <h1>{deptInfo.deptName}</h1>
      </div>
      <div className={styles.flex}>
        <div className={styles.blank}></div>
        <div className={styles.container}>
          <div className={styles.boxtitle}>
            <h3>Purpose</h3>
          </div>
          <div className={styles.boxbody}>{deptInfo.purpose}</div>
          <hr className={styles.line}></hr>
          <div className={styles.imageleft}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.boxtitleright}>
            <h3>Goal</h3>
          </div>
          <div className={styles.boxbodyright}>{deptInfo.goal}</div>
          <hr className={styles.lineright}></hr>
          <div className={styles.image}></div>
        </div>
        <div className={styles.blank}></div>
      </div>
    </div>
  );
};

export default DeptInfo;
