import { Box } from '@material-ui/core'
import moment from 'moment'
import EventCard from '../../components/EventCard'
import Example from '../../components/Example'
import Layout from '../../components/Layout'

const Events = () => {
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
      <Box style={{ display: 'flex', gap: '2em' }}>
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
    </Layout>
  )
}

export default Events
