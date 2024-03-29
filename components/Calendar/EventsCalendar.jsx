import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./EventsCalendar.module.scss";

import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import LeftArrow from "@material-ui/icons/ChevronLeft";
import RightArrow from "@material-ui/icons/ChevronRight";
import { Calendar, momentLocalizer } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const EventsCalendar = (props) => {
  const { events, setEvent } = props;

  const EventView = (event) => {
    return (
      <span className={styles.eventView}>
        <p>{event.event.name}</p>
      </span>
    );
  };

  const CustomToolbar = (props) => {
    const { date, onNavigate } = props;

    const goBack = () => {
      props.date.setMonth(date.getMonth());
      onNavigate("PREV");
    };

    const goNext = () => {
      props.date.setMonth(date.getMonth());
      onNavigate("NEXT");
    };

    return (
      <div className={styles.toolbar}>
        <div className={styles.labelContainer}>
          <IconButton onClick={goBack}>
            <LeftArrow />
          </IconButton>
          <p className={styles.label}>
            {props.label.split(" ")[0]} <span>{props.label.split(" ")[1]}</span>
          </p>
          <IconButton onClick={goNext}>
            <RightArrow />
          </IconButton>
        </div>
      </div>
    );
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: event.background,
      opacity: 0.8,
      color: "white",
      display: "block",
    };
    return {
      style: style,
    };
  };

  return (
    <div className={styles.calendar}>
      <Calendar
        popup
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(e) => setEvent(e)}
        components={{
          event: EventView,
          toolbar: CustomToolbar,
        }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default EventsCalendar;
