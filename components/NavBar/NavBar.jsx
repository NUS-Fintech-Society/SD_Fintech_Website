import React from "react";
import styles from "./NavBar.module.scss";
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from "components/SideDrawer/DrawerToggleButton";
import Link from "next/link";

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
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Events</Link></li>
            <li><Link href="#">Our Team</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
