import React from "react";

import Link from "next/link";
import styles from "./DepartmentCard.module.scss";
import Button from "@material-ui/core/Button";

const DepartmentCard = (props) => {
  const { icon, title, description, route } = props;
  return (
    <div className={styles.container}>
      <img src={icon} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={route} passHref={true}>
        <Button component="a" variant="contained" className={styles.button}>
          View
        </Button>
      </Link>
    </div>
  );
};

export default DepartmentCard;
