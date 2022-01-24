import { Box } from '@material-ui/core'
import EventCard from '../../components/EventCard'
import Example from '../../components/Example'
import Layout from '../../components/Layout'

const Events = () => (
  <Layout>
    <Example />
    <Box style={{ display: 'flex', gap: '2em' }}>
      <EventCard />
      <EventCard />
      <EventCard />
    </Box>
  </Layout>
)

export default Events
