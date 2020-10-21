import React from "react";
import styles from "./NavBar.module.scss";
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from "components/SideDrawer/DrawerToggleButton";

const NavBar = props => {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar_navigation}>
        <div className={styles.navbar_toggle_button}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className={styles.navbar_logo}><a href="#">LOGO</a></div>
        <div className={styles.spacer}></div>
        <div className={styles.navbar_items}>
          <ul id="nav-mobile" className="center">
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
