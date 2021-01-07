import React from "react";

import Link from "next/link";
import styles from "./DepartmentCard.module.scss";
import Button from "@material-ui/core/Button";

const DepartmentCard = (props) => {
  const { icon, title, description, route } = props;
  return (
    <Link href={route} passHref={true}>
      <div className={styles.container}>
        <img src={icon} alt={title} className={styles.image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default DepartmentCard;
