import { Box, Container, makeStyles } from '@material-ui/core'
import moment from 'moment'
import EventCard from '../../components/EventCard'
import Example from '../../components/Example'
import Layout from '../../components/Layout'

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

const Events = () => {
  const classes = useStyles()
  const events = [
    {
      date: moment('31 Oct 2021'),
      location: 'Yusuf Ishak House;ladls',
      title: 'It will be here',
      description:
        ':S DjJ ;lakJD;flkds;lfja;mx clkvnsghsdfja;dlskjfa;dlkj fa;lkjd ;alknvlcnva;lsdn fasdf;laskjd f;alkmvlxcnv;'.repeat(
          10
        ),
    },
    {
      date: moment(),
      location: 'NUS School of Computing',
      title: 'It will be there',
      description:
        ':S DjJ ;lakJD;flkds;lfja;mx clkvnsghsdfja;dlskjfa;dlkj fa;lkjd ;alknvlcnva;lsdn fasdf;laskjd f;alkmvlxcnv;',
    },
  ]
  return (
    <Layout>
      <Example />
      <Container maxWidth="lg">
        <Box className={classes.eventsList}>
          {events.map((ev, index) => (
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
