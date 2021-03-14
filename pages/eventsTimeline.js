import React, { useState, useEffect } from "react";
import Please from "pleasejs";

import styles from "styles/pages/Events.module.scss";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import EventsCalendar from "components/Calendar/EventsCalendar";
import EventCard from "components/EventCard/EventCard";
import { withRouter } from "next/router";
import request from "util/request";

const Events = ({ router: { query } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState();
  const [selectedEvent, setSelectedEvent] = useState();
  const displayEvent = JSON.parse(query.object);
  const fetchEvents = async () => {
    try {
      const response = await request.get("events/");
      response.data.map((event) => (event.background = Please.make_color()));
      setEvents(response.data);
      setSelectedEvent(showEvent(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const showEvent = (eventList) => {
    var numEvent = 0;
    console.assert(eventList.length != 0);
    eventList.sort((eventOne, eventTwo) => {
      return eventTwo.start - eventOne.start;
    });
    for (var i = 0; i < eventList.length; i++) {
      if (eventList[i].name === displayEvent.name) {
        numEvent = i;
      }
    }
    return eventList[numEvent];
  };

  useEffect(() => {
    fetchEvents().then(() => {
      setIsLoading(false);
    });
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
              {!isLoading && (
                <EventsCalendar events={events} setEvent={setEvent} />
              )}
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

export default withRouter(Events);
