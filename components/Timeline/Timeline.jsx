import React from "react";

import styles from "./Timeline.module.scss";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const TimelineCard = (props) => {
  const { items } = props;
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
    return parseTime(new Date(start)) + " - " + parseTime(new Date(end));
  };
  return (
    <div className={styles.event}>
      <Timeline align="alternate">
        {items.map((item) => {
          return (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent>
                <Typography
                  className={styles.timelinedate}
                  color="textSecondary"
                >
                  {formDate(item.start, item.end)}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className={styles.icon}></TimelineDot>
                <TimelineConnector className={styles.icon} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="alignLeft">
                  <span className={styles.timelineheader}>{item.name}</span>
                </Typography>
                <div>
                  <Typography
                    className={styles.timelinelocation}
                    color="textSecondary"
                  >
                    Location: {item.location}
                  </Typography>
                </div>
                <div className={styles.button}>
                  <Link
                    href={{
                      pathname: `/eventsTimeline/${item.id}`,
                    }}
                  >
                    <button className={styles.rightbutton}>View More</button>
                  </Link>
                  &nbsp;
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default TimelineCard;
