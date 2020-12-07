import React, { useState, useEffect } from "react";

import styles from "styles/pages/Events.module.scss";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import EventsCalendar from "components/Calendar/EventsCalendar";
import EventCard from "components/EventCard/EventCard";
import events from "data/events";

const Events = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState();

  const showLatestEvent = (eventList) => {
    console.assert(eventList.length != 0);
    eventList.sort((eventOne, eventTwo) => {
      return eventTwo.start - eventOne.start;
    });
    return eventList[0];
  };

  useEffect(() => {
    setSelectedEvent(showLatestEvent(events));
    setIsLoading(false);
  }, []);

  const setEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <DefaultLayout>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1>Our Events</h1>
            <div className={styles.eventsContainer}>
              <EventsCalendar events={events} setEvent={setEvent} />
              <div className={styles.eventCardContainer}>
                {!isLoading && <EventCard event={selectedEvent} />}
              </div>
            </div>
          </main>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Events;
