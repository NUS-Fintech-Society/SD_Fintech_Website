import React, { useEffect, useState } from "react";
import styles from "styles/pages/Home.module.scss";
import useTypewriter from "react-typewriter-hook";
import { useForm } from "react-hook-form";
import CountUp from "react-countup";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import { Container } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import ProjectIcon from "@material-ui/icons/Work"
import TimelineCard from "components/Timeline/Timeline";
import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DepartmentCard from "components/DepartmentCard/DepartmentCard";


import * as eventsData from 'data/mock/events.json';
import * as departmentsData from 'data/mock/departments.json';


const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [noEvents, setNoEvents] = useState(true);
  const [items, setItems] = useState();
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const typing = useTypewriter("— Ideate. Innovate. Inspire.");
  const [departments, setDepartments] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const [formState, setFormState] = useState({});

  useEffect(() => {
    loadDepartments();
    fetchEvents().then(() => {
      setIsLoading(false);
    });
  }, []);

  const fetchEvents = async () => {
    try {
      setItems(sortEvents(Array.from(eventsData)));
    } catch (err) {
      console.log(err);
    }
  };

  const loadDepartments = async () => {
    try {
      setDepartments(Array.from(departmentsData));
    } catch (err) {
      console.log(err);
    }
  };

  const sortEvents = (list) => {
    console.assert(list.length != 0);

    list.sort((eventOne, eventTwo) => {
      var dateOne = new Date(eventOne.start);
      var dateTwo = new Date(eventTwo.start);
      return dateOne.getTime() - dateTwo.getTime();
    });
    var i = 0;
    while (i < list.length) {
      var date = new Date(list[i].end);
      var datetoday = new Date();
      if (date < datetoday) {
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
    if (list.length == 0) {
      setNoEvents(false);
    }

    return list;
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <DefaultLayout>
      <main className={styles.main}>
        <div className={styles.landing}>
          <div className={styles.details}>
            <div className={styles.titleContainer}>
              <p className={styles.title}>NUS Fintech Society</p>
              <p className={styles.subtitle}>{typing}</p>
            </div>
            <div className={styles.aboutUs}>
              <div className={styles.descriptionContainer}>
                <p className={styles.about}>About Us</p>
              </div>
              <div className={styles.descriptionContainer}>
                <p className={styles.text}>
                  NUS FinTech Society was founded under NUS School of Computing
                  by a group of like-minded individuals with a passion in
                  pursuing research and driving applications in the realms of
                  Blockchain and Machine Learning. We currently have over 80
                  members, each with a strong grasp of their individual research
                  areas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <FadeInSection>
          <div className={styles.statisticsWithIcon}>
            <div className={styles.statRow}>
              <div className={styles.statColLeft}>
                <FaceIcon className={styles.statIcon}/>
                <div className={styles.statText}>
                  <h1>
                    <CountUp
                      end={204}
                      duration={2}
                    />
                  </h1>
                  <p>Fintech Members</p>
                </div>
              </div>
              <div className={styles.statColRight}>
                <ProjectIcon className={styles.statIcon}/>
                <div className={styles.statText}>
                  <h1>
                    <CountUp
                      end={23}
                      duration={1}
                      />
                  </h1>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          {/* Added Container maxWidth for our team section specifically*/}
          <Container maxWidth="xl" >
          <div id="ourTeam" className={styles.ourTeam}>
            <div className={styles.textContainer}>
              <h1>Our Team</h1>
              <div className={styles.underline}></div>
              <p>
                NUS FinTech Society comprises of four different teams:
                Operations, Machine Learning, DevOps, as well as Blockchain
              </p>
            </div>
            <div className={styles.cardsContainer}>
              {departments.map((department) => (
                <div className={styles.cardContainer} key={department.id}>
                  <DepartmentCard
                    id={department.id}
                    title={department.name}
                    description={department.description}
                    icon={department.icon}
                    route={department.route}
                  />
                </div>
              ))}
            </div>
          </div>
          </Container>
        </FadeInSection>

        <FadeInSection>
          <div>
            <h1>Upcoming Events</h1>
          </div>
          {!isLoading && noEvents && <TimelineCard items={items} />}
          {!isLoading && !noEvents && (
            <div className={styles.headerevent}>
              <p>There are currently no upcoming events.</p>
            </div>
          )}
        </FadeInSection>

        <FadeInSection>
          <div className={styles.sponsors}>
            <div>
              <h1>Sponsor</h1>
              <a href="https://fintechlab.nus.edu.sg/">
                <div className={styles.imageContainer}>
                  <img
                    className={styles.images}
                    alt="bnp-paribas-logo"
                    src="/sponsors/nusFintechLab.jpg"
                  ></img>
                </div>
              </a>
              <div className={styles.word}>
                <h4>NUS Fintech Lab</h4>
              </div>
            </div>
            <div>
              <h1>Mentor</h1>
              <div className={styles.picture}>
                <a href="https://www.linkedin.com/in/keithcarter/">
                  <img
                    className={styles.images}
                    alt="keithCarter"
                    src="/sponsors/keithCarter.jpeg"
                  ></img>
                </a>
                <div className={styles.word}>
                  <h4>Professor Keith Carter</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.partners}>
            <h1 id="Sponsors">Partners</h1>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.imageContainer}>
                  <a href="https://www.bnpparibas.com.sg/en/">
                    <img
                      className={styles.images}
                      alt="bnpParibasLogo"
                      src="/sponsors/BnpParibasLogo.png"
                    ></img>
                  </a>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.imageContainer}>
                  <a href="https://ripple.com/">
                    <img
                      className={styles.images}
                      alt="rippleLogo"
                      src="/sponsors/RippleLogo.png"
                    ></img>
                  </a>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.imageContainer}>
                  <a href="https://opennodes.com/">
                    <img
                      className={styles.images}
                      alt="openNode"
                      src="/sponsors/openNodes.png"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className={styles.contactUs} id="contact">
          <FadeInSection>
            <h1>Contact Us</h1>
            <div>
              <div className={styles.iconTextContainer}>
                <LocationIcon className={styles.icon} />
                <p>
                  NUS School of Computing, COM1, 13 Computing Drive, Singapore
                  117417
                </p>
              </div>
              <div className={styles.iconTextContainer}>
                <MailIcon className={styles.icon} />
                <p>nusfintech.ops@gmail.com</p>
              </div>
              
              {/* // TODO: Integrate form with third-party service or back-end service
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <div className={styles.inputContainer}>
                  <input
                    className={styles.input}
                    id="name"
                    name="name"
                    placeholder="Name"
                    ref={register({ required: true })}
                    onChange={handleChange}
                    value={formState.name}
                  />
                  {errors.name && <p>Required</p>}
                </div>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.input}
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formState.email}
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className={styles.inputContainer}>
                  <textarea
                    className={styles.inputArea}
                    placeholder="Message"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={formState.message}
                    ref={register({ required: true })}
                  ></textarea>
                  {errors.message && <p>Required</p>}
                </div>
                <input
                  type="submit"
                  className={styles.submitButton}
                  value="Send"
                />
              </form> */}
            </div>
          </FadeInSection>
        </div>
      </main>
    </DefaultLayout>
  );
};

//component to allow fade in to happen just add <FadeInSection> to the parts you wanna fade in
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div className={isVisible ? styles.fadeVisible : styles.fade} ref={domRef}>
      {props.children}
    </div>
  );
}

export default Home;
