import React, { useState } from "react";
import styles from "./EventsCalendar.module.scss";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const EventsCalendar = (props) => {
  const { events, setEvent } = props;

  return (
    <div className={styles.calendar}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(e) => setEvent(e)}
      />
    </div>
  );
};

export default EventsCalendar;
