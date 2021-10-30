import React from "react";

import styles from "./History.module.scss";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const HistoryCard = (props) => {
  const { items } = props;
  
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
                    {item.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className={styles.icon}></TimelineDot>
                <TimelineConnector className={styles.icon} />
              </TimelineSeparator>
              <TimelineContent>
                {
                /* Image part styling not working yet
                <img src={item.image} alt={item.title} className={styles.image} />
                */
                }
                <Typography variant="h6" component="alignLeft">
                  <span className={styles.timelineheader}>{item.name}</span>
                </Typography>
                <div>
                  <Typography
                    className={styles.timelinedescription}
                    color="textSecondary"
                  >
                    {item.description}
                  </Typography>
                </div>
                <div className={styles.button}>
                  <Link
                    href={{
                      pathname: `${item.link}`,
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

export default HistoryCard;
