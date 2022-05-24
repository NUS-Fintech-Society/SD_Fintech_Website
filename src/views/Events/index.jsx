import { useState } from 'react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import Layout from '../../components/Layout'
import eventsData from '../../data/events'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import EventCard from '../../components/EventCard'

const useStyles = makeStyles((theme) => ({
  '@global': {
    '.rbc-event': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    },
    '.rbc-event.rbc-selected': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    },
  },
  root: {
    marginTop: 80,
    paddingBottom: 32,
  },
  title: {
    textAlign: 'center',
    color: theme.palette.tertiary.dark,
  },
  eventsList: {
    marginTop: 32,
  },
  spotlight: {
    marginTop: 32,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    '& .calendar': {
      flexGrow: 1,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      '& .rbc-calendar': {
        minHeight: '70vh',
        '& .rbc-toolbar-label': {
          fontWeight: 700,
          fontSize: 18,
        },
      },
    },
    '& .event': {
      padding: 32,
    },
  },
}))

const localizer = momentLocalizer(moment)
const events = [...eventsData]
const getLatestEvent = () => {
  events.sort((eventOne, eventTwo) => {
    return new Date(eventOne.start) - new Date(eventTwo.start)
  })
  const upcomingEvents = events.filter(
    (x) => x.start.getTime() >= new Date().getTime()
  )

  if (upcomingEvents.length > 0) {
    return upcomingEvents[0]
  }

  return events.at(-1)
}

const Events = () => {
  const classes = useStyles()
  const latestEvent = getLatestEvent()
  const [selectedEvent, setSelectedEvent] = useState(latestEvent)

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.root}>
        <Typography className={classes.title} variant="h5">
          Upcoming Events
        </Typography>
        <Box className={classes.spotlight}>
          <Box className="calendar">
            {events && (
              <Calendar
                views={['month']}
                events={events}
                defaultDate={new Date()}
                localizer={localizer}
                popup={true}
                startAccessor="start"
                endAccessor="end"
                titleAccessor="title"
                onSelectEvent={(e) => setSelectedEvent(e)}
              />
            )}
          </Box>
          <Box className="event">
            <EventCard event={selectedEvent} />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Events
