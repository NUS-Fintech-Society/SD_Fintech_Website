import styles from "styles/pages/Home.module.scss";
import useTypewriter from "react-typewriter-hook";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DepartmentCard from "components/DepartmentCard/DepartmentCard";
import TimelineCard from "components/Timeline/Timeline";
import departments from "data/departmentInfo";

import request from "util/request";
import React, { useState, useEffect } from "react";

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [noEvents, setNoEvents] = useState(true);
  const typing = useTypewriter("Ideate. Innovate. Inspire.");
  const [items, setItems] = useState();

  useEffect(() => {
    fetchEvents().then(() => {
      setIsLoading(false);
    });
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await request.get("events/");
      setItems(sortEvents(response.data));
      
      console.log(noEvents);
    } catch (err) {
      console.log(err);
    }
  };

  const sortEvents = (list) => {
    console.assert(list.length != 0);

    list.sort((eventOne, eventTwo) => {
      console.log(eventTwo.start + " " + eventOne.start);
      var dateOne = new Date(eventOne.start);
      var dateTwo = new Date(eventTwo.start)
      return dateOne.getTime() - dateTwo.getTime();
    });
    var i = 0;
    while (i < list.length) {
      var date = new Date(list[i].end);
      var datetoday = new Date();
      console.log("date" + date);
      console.log("datetoday" + datetoday);
      if (date < datetoday) {
        console.log("remove" + list[i].name);
        list.splice(i, 1);
      } else {
        i = i + 1;
      }
    }
    if (list.length > 4) {
      for (var i = 0; i < list.length; i++) {
        if (i >= 4) {
          list.splice(i, 1);
        }
      }
    }
    if(list.length==0){
      setNoEvents(false); 
      console.log("done false");
     }
  
    // console.log("end " + list[0].start)
    return list;
  }


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
        <div className={styles.event}>
          <div className={styles.headerevent}>
            <h1>Upcoming Events</h1>
          </div>
          {!isLoading && noEvents && (
            <TimelineCard
              items={items}
            />
          )}
          {!isLoading && !noEvents && (
            <div className={styles.headerevent}>
            <p>
              There are currently no upcoming events.
            </p>
            </div>
          )}
        </div>

        <div>
          <h1>Contact Us</h1>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Home;
