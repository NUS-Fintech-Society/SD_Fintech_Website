import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import EventCard from '../../components/EventCard'
import EventSpotlight from '../../components/EventSpotlight'
import Layout from '../../components/Layout'

import 'react-big-calendar/lib/css/react-big-calendar.css'

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
  },
  {
    id: 3,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    description: 'Near to today',
    location: 'here',
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
          style={{ color: '#4B87B1', textAlign: 'center' }}
        >
          Upcoming Events
        </Typography>
        <Box style={{ display: 'flex', alignItems: 'stretch' }}>
          <Box style={{ width: '50%', minHeight: '40em' }}>
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
          <Box style={{ width: '50%' }}>
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
            />
          ))}
        </Box>
        Happy
      </Container>
    </Layout>
  )
}

export default Events
