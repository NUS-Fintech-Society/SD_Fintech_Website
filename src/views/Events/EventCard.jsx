import { Box, Grid, Typography } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import TimerIcon from '@material-ui/icons/Timer'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import CardBase from '../../components/Card/CardBase'
import DateBox from '../../components/Card/DateBox'

const useStyles = makeStyles((theme) => ({
  flexBox: {
    display: 'flex',
    marginBottom: 4,
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  info: {
    color: theme.palette.secondary.main,
    marginLeft: 4,
    fontSize: 16,
  },
  eventTitle: {
    fontWeight: 700,
    fontSize: 18,
    marginTop: 4,
  },
  description: {
    marginTop: 4,
    fontSize: 16,
  },
}))

const EventCard = (props) => {
  const { event } = props
  const classes = useStyles()

  return (
    <CardBase imageHeight={180} imageUrl={event.imageUrl}>
      <Grid container spacing={2}>
        <Grid item xs={3} container alignItems="center" justifyContent="center">
          <DateBox date={event.start} />
        </Grid>
        <Grid item xs={9} container alignItems="center">
          <Box className={classes.flexBox}>
            <LocationOnIcon className={classes.icon} />
            <Typography className={classes.info}>{event.location}</Typography>
          </Box>
          {event.start && event.end && (
            <Box className={classes.flexBox}>
              <TimerIcon className={classes.icon} />
              <Typography className={classes.info}>
                {moment(event.start).format('DD MMM YYYY hh:mma')} -{' '}
                {moment(event.end).format('DD MMM YYYY hh:mma')}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
      <Typography className={classes.eventTitle}>{event.title}</Typography>
      <Typography className={classes.description}>
        {event.description}
      </Typography>
    </CardBase>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
}

export default EventCard
