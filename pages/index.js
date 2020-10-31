import React from "react";
import styles from "styles/pages/Home.module.scss";
import useTypewriter from "react-typewriter-hook";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DepartmentCard from "components/DepartmentCard/DepartmentCard";

import departments from "data/departmentInfo";

const Home = (props) => {
  const typing = useTypewriter("Ideate. Innovate. Inspire.");

  return (
    <DefaultLayout>
      <main className={styles.main}>
        <div className={styles.landing}>
          <div className={styles.details}>
            <img
              src="/images/SocietyLogo.png"
              alt="society logo"
              className={styles.logo}
            />
            <h1>NUS FinTech Society</h1>
            <p>{typing}</p>
          </div>
          <img src="/images/exco.png" alt="exco" className={styles.exco} />
        </div>
        <div className={styles.aboutUs}>
          <h1>About Us</h1>
          <div className={styles.descriptionContainer}>
            <p>
              NUS FinTech Society was founded under NUS School of Computing by a
              group of like-minded individuals with a passion in pursuing
              research and driving applications in the realms of Blockchain and
              Machine Learning.
            </p>
          </div>
          <div className={styles.descriptionContainer}>
            <p>
              We currently have over 80 members, each with a strong grasp of
              their individual research areas.
            </p>
          </div>
        </div>
        <div className={styles.ourTeam}>
          <h1>Our Team</h1>
          <div className={styles.cardsContainer}>
            {departments.map((department) => (
              <div className={styles.cardContainer}>
                <DepartmentCard
                  id={department.title}
                  title={department.title}
                  description={department.description}
                  icon={department.icon}
                  route={department.route}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1>Upcoming Events</h1>
        </div>
        <div>
          <h1>Contact Us</h1>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Home;
