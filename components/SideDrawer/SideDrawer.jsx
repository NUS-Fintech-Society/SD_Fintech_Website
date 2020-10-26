import React from "react";
import styles from "./SideDrawer.module.scss";

const SideDrawer = props => {
    let drawerClasses = styles.side_drawer;
    if (props.show) {
        drawerClasses = styles.side_drawer_open;
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Our Team</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer