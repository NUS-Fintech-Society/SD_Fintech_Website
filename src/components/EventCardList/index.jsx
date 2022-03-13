import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import EventCard from '../../components/EventCard'

const useStyles = makeStyles((theme) => ({
  eventsList: {
    display: 'flex',
    columnGap: '2em',
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
}))

const EventCardList = ({ className, eventList, empty, ...props }) => {
  const classes = useStyles()

  return (
    <Box className={`${classes.eventsList} ${className}`} {...props}>
      {eventList &&
        (eventList.length > 0 ? (
          eventList.map((ev, index) => (
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
          <Typography>{empty}</Typography>
        ))}
    </Box>
  )
}

EventCardList.propTypes = {
  eventList: PropTypes.array,
  empty: PropTypes.string,
  className: PropTypes.string,
}

export default EventCardList
