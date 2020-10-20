import React from "react";
import styles from "./Drawer.module.scss";

const drawerToggleButton = props => (
    <button className={styles.toggle_button}>
        <div className={styles.toggle_button_line} />
        <div className={styles.toggle_button_line} />
        <div className={styles.toggle_button_line} />
    </button>
);

export default drawerToggleButton;