import React from "react";
import styles from "./NavBar.module.scss";

import Link from "next/link";

const NavBar = (props) => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/department/devops">
            <a>DevOps</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
