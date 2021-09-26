import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import Alert from "@material-ui/lab/alert";
import DrawerToggleButton from "components/SideDrawer/DrawerToggleButton";
import InfoIcon from "@material-ui/icons/Info";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  myAlert: {
    backgroundColor: "white",
  },
});

//Colour of banner is not updated
const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
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
        <div>
          <Alert
            icon={<InfoIcon fontSize="inherit" />}
            severity="info"
            className={classes.myAlert}
          >
            <strong>Notice</strong> — This is for notifications! Testing
            sentences are as follows: One Two Three Four Five
          </Alert>
        </div>
      </header>
    </ThemeProvider>
  );
};

export default NavBar;
