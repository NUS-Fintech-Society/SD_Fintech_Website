import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";

import DrawerToggleButton from "components/SideDrawer/DrawerToggleButton";

const NavBar = (props) => {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar_navigation}>
        <div className={styles.navbar_toggle_button}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className={styles.navbar_logo}>
          <img
            src="/images/SocietyLogo.png"
            alt="society logo"
            className={styles.image}
          />
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.navbar_items}>
          <ul id="nav-mobile" className="center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>

            <div className={styles.dropdown}>
              <Link className={styles.navbar_items} href="/#ourTeam">
                Our Team
              </Link>
              <div className={styles.dropdown_content}>
                <a href="/department/operations">Operations</a>
                <a href="/department/machinelearning">Machine Learning</a>
                <a href="/department/blockchain">Blockchain</a>
                <a href="/department/devops">DevOps</a>
              </div>
            </div>

            <li>
              <Link href="/#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
