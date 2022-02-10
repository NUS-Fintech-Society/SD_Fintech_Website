import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import EventCard from '../../components/EventCard'
import EventSpotlight from '../../components/EventSpotlight'
import Layout from '../../components/Layout'
import eventsData from '../../data/events'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import theme from '../../themes'

const useStyles = makeStyles((theme) => ({
  eventsList: {
    paddingTop: '2em',
    display: 'flex',
    gap: '2em',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 'max-content',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap: '1em',
    },
  },
  spotlight: {
    display: 'flex',
    alignItems: 'stretch',
    gap: '2em',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '1em',
      marginBottom: '3em',
    },

    '& .calendar': {
      flex: '1 1 50%',

      '& .rbc-calendar': {
        height: '100vh',
        [theme.breakpoints.down('md')]: {
          height: '80vh',
        },
        maxHeight: '40em',
        '& .rbc-month-view, .rbc-time-view, .rbc-week-view': {
          borderRadius: '1em',
          overflow: 'hidden',
          '& .rbc-event': {
            backgroundColor: theme.palette.tertiary.dark,
          },
        },
        '& .rbc-toolbar': {
          [theme.breakpoints.down('xs')]: {
            display: 'block',
            textAlign: 'center',
          },
          '& span': {
            display: 'block',
          },
        },
      },
    },
    '& .event': {
      flex: '1 1 50%',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
}))

const localizer = momentLocalizer(moment)

const events = eventsData

const upcomingEvents =
  events && events.filter((x) => x.date.getTime() >= new Date().getTime())

const spotlightEvent = events && upcomingEvents.at(0)

const Events = () => {
  const classes = useStyles()

  console.log(events.at(1))

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          style={{
            color: theme.palette.tertiary.darker,
            textAlign: 'center',
            display: 'block',
            marginTop: '80px',
            marginBottom: '40px',
          }}
        >
          Upcoming Events
        </Typography>
        <Box className={classes.spotlight}>
          <Box className="calendar">
            {events && (
              <Calendar
                views={['day', 'month', 'week']}
                events={events.map((a, i) => ({
                  id: i,
                  title: a.title,
                  start: a.start,
                  end: a.end,
                }))}
                step={60}
                defaultDate={new Date()}
                localizer={localizer}
                popup={true}
                startAccessor="start"
                endAccessor="end"
                titleAccessor="title"
              />
            )}
          </Box>
          <Box className="event">
            {spotlightEvent && (
              <EventSpotlight
                date={spotlightEvent.date}
                location={spotlightEvent.location}
                title={spotlightEvent.title}
                description={spotlightEvent.description}
              />
            )}
          </Box>
        </Box>
        <Box className={classes.eventsList}>
          {upcomingEvents &&
            (upcomingEvents.length >= 0 ? (
              upcomingEvents
                .splice(1)
                .map((ev, index) => (
                  <EventCard
                    key={index}
                    date={ev.date}
                    location={ev.location}
                    title={ev.title}
                    description={ev.description}
                    imageUrl={ev?.imageUrl}
                  />
                ))
            ) : (
              <Typography>No upcoming events, stay tuned!</Typography>
            ))}
        </Box>
      </Container>
    </Layout>
  )
}

export default Events
