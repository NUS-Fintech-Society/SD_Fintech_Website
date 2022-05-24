import { Box, Grid, Typography } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import TimerIcon from '@material-ui/icons/Timer'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 450,
    width: 330,
    backgroundColor: theme.palette.background.primary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '6px 6px #F0F0F0',
  },
  thumbnail: {
    width: '100%',
    height: '40%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
  },
  contentWrapper: {
    height: '60%',
    padding: '8px 16px',
    overflowY: 'scroll',
  },
  dateWrapper: {
    backgroundColor: theme.palette.secondary.light,
    padding: '8px 16px',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    '& .MuiTypography-root': {
      fontSize: 18,
      color: theme.palette.secondary.main,
    },
  },
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
    <Box className={classes.root}>
      <img
        className={classes.thumbnail}
        src={event.imageUrl || 'default-event.jpg'}
        alt="Event Thumbnail"
      />
      <Box className={classes.contentWrapper}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={3}
            container
            alignItems="center"
            justifyContent="center"
          >
            <Box className={classes.dateWrapper}>
              <Typography>{moment(event.start).format('MMM')}</Typography>
              <Typography>{moment(event.start).format('D')}</Typography>
            </Box>
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
      </Box>
    </Box>
  )
}

EventCard.propTypes = {
  event: PropTypes.object,
}

export default EventCard
