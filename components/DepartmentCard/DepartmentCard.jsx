import React from "react";

import Link from "next/link";
import styles from "./DepartmentCard.module.scss";
import { Container } from "react-bootstrap";

const DepartmentCard = (props) => {
  const { icon, title, description, route } = props;
  return (
    <div id="teamInfo" className={styles.container}>
      <img src={icon} alt={title} className={styles.image} />
      <div id="description" className={styles.column}>
        <div>
          <Container>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href={route} passHref={true}>
              <a className={styles.link}>Learn more &gt;&gt;</a>
            </Link>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
