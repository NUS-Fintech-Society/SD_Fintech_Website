import React from "react";
import styles from "./EventCard.module.scss";

import LocationIcon from "@material-ui/icons/PlaceOutlined";
import CalendarIcon from "@material-ui/icons/CalendarTodayOutlined";

const EventCard = (props) => {
  const { event } = props;

  const parseTime = (date) => {
    const options = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleString("en-GB", options);
  };

  const formDate = (start, end) => {
    return parseTime(start) + " - " + parseTime(end);
  };

  return (
    <div
      className={styles.eventCard}
      style={{ backgroundColor: event.background }}
    >
      <h1 className={styles.title}>{event.title}</h1>
      <div className={styles.iconTextContainer}>
        <div className={styles.iconContainer}>
          <LocationIcon className={styles.icon} />
        </div>
        <p>{event.location}</p>
      </div>
      <div className={styles.iconTextContainer}>
        <div className={styles.iconContainer}>
          <CalendarIcon className={styles.icon} />
        </div>
        <p>{formDate(event.start, event.end)}</p>
      </div>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;
