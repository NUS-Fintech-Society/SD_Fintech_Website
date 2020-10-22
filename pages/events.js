import React, { useState } from "react";

import styles from "styles/pages/Events.module.scss";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import EventsCalendar from "components/Calendar/EventsCalendar";
import EventCard from "components/EventCard/EventCard";
import events from 'data/events'

const Events = (props) => {
  const [selectedEvent, setSelectedEvent] = useState(events[0])

  const setEvent = (event) => {
    setSelectedEvent(event);
  }

  return (
    <div>
      <DefaultLayout>
        <div className={styles.container}>
          <main className={styles.main}>
            <EventsCalendar events={events} setEvent={setEvent} />
            <EventCard event={selectedEvent} />
          </main>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Events;
