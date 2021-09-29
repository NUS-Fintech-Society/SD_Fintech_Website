import React, { useState } from "react";
import styles from "./Notice.module.scss";
import Alert from "@material-ui/lab/Alert";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core";

const Notice = (props) => {
  return (
    <div>
      <Alert
        style={{ backgroundColor: "white" }}
        icon={<InfoIcon fontSize="inherit" />}
        severity="info"
      >
        <div className={styles.notice_text}>
          <strong>Notice</strong> — This is for notifications! Testing sentences
          are as follows: One Two Three Four Five
        </div>
      </Alert>
    </div>
  );
};

export default Notice;
