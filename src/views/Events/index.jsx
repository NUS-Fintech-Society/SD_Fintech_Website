import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import EventCard from '../../components/EventCard'
import EventSpotlight from '../../components/EventSpotlight'
import Layout from '../../components/Layout'

import 'react-big-calendar/lib/css/react-big-calendar.css'
// import './react-big-calendar.css'

const useStyles = makeStyles((theme) => ({
  root: {},
  eventsList: {
    display: 'flex',
    gap: '2em',
    flexWrap: 'wrap',
    alignItems: 'stretch',
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
        height: '140vw',
        maxHeight: '40em',
        '& .rbc-month-view, .rbc-time-view, .rbc-week-view': {
          borderRadius: '1em',
          overflow: 'hidden',
          '& .rbc-event': {
            backgroundColor: '#4B87B1',
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

const events = [
  {
    id: 1,
    title: 'It will be here',
    date: new Date(),
    location: 'Yusuf Ishak House;ladls',
    description:
      ':S DjJ ;lakJD;flkds;lfja;mx clkvnsghsdfja;dlskjfa;dlkj fa;lkjd ;alknvlcnva;lsdn fasdf;laskjd f;alkmvlxcnv;',

    start: new Date(),
    end: new Date(),
  },
  {
    id: 2,
    title: 'It will be there yeah',
    location: 'NUS School of Computing',
    date: new Date('01/27/2022'),
    description:
      ':S DjJ ;lakJD;flkds;lfja;mx clkvnsghsdfja;dlskjfa;dlkj fa;lkjd ;alknvlcnva;lsdn fasdf;laskjd f;alkmvlxcnv;',
    allDay: true,
    start: new Date('01/27/2022 01:00'),
    end: new Date('01/27/2022 02:00'),
    imageUrl:
      'https://images.unsplash.com/photo-1643037906067-e79f62e8f58c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 3,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    description: 'Near to today',
    location: 'here',
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    title: 'Tomorrow',
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setDate(new Date().getDate() + 1)),
    description: 'Near to tomorrow',
    location: 'nus',
  },
]

const Events = () => {
  const classes = useStyles()

  console.log(events.at(1))

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          style={{
            color: '#4B87B1',
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
            <EventSpotlight
              date={events.at(0).date}
              location={events.at(0).location}
              title={events.at(0).title}
              description={events.at(0).description}
            />
          </Box>
        </Box>
        <Box className={classes.eventsList}>
          {events.splice(1).map((ev, index) => (
            <EventCard
              key={index}
              date={ev.date}
              location={ev.location}
              title={ev.title}
              description={ev.description}
              imageUrl={ev?.imageUrl}
            />
          ))}
        </Box>
      </Container>
    </Layout>
  )
}

export default Events
