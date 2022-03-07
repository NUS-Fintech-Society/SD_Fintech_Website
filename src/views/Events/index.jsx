import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import EventSpotlight from '../../components/EventSpotlight'
import Layout from '../../components/Layout'
import eventsData from '../../data/events'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import theme from '../../themes'
import EventCardList from '../../components/EventCardList'

const useStyles = makeStyles((theme) => ({
  eventsList: {
    paddingTop: '2em',
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

  return (
    <Layout>
      <Container maxWidth="lg" style={{ minHeight: 'calc(100vh - 126px)' }}>
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
                imageUrl={spotlightEvent.imageUrl}
              />
            )}
          </Box>
        </Box>
        <EventCardList
          eventList={upcomingEvents.slice(1)}
          className={classes.eventsList}
          empty={'No upcoming events, stay tuned!'}
        />
      </Container>
    </Layout>
  )
}

export default Events
