import React, { useState } from "react";
import styles from "styles/pages/Home.module.scss";
import useTypewriter from "react-typewriter-hook";
import { useForm } from "react-hook-form";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import MailIcon from "@material-ui/icons/MailOutline";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DepartmentCard from "components/DepartmentCard/DepartmentCard";

import departments from "data/departmentInfo";

import request from "util/request";

const Home = (props) => {
  const typing = useTypewriter("Ideate. Innovate. Inspire.");
  const { register, handleSubmit, watch, errors } = useForm();
  const [formState, setFormState] = useState({});

  const onSubmit = async (data) => {
    try {
      const response = await request.post("contact/", data);
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

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
              <div className={styles.cardContainer} key={department.title}>
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
        <div className={styles.contactUs}>
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
              <p>nusfintech@gmail.com</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
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
            </form>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Home;
