import { Box, Grid, Typography } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 450,
    backgroundColor: theme.palette.background.primary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '3px 6px #F0F0F0',
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
  },
  topSection: {
    height: '40%',
    alignItems: 'center',
  },
  dateWrapper: {
    backgroundColor: theme.palette.secondary.light,
    padding: 8,
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    '& .MuiTypography-root': {
      fontSize: 16,
      color: theme.palette.secondary.main,
    },
  },
  titleLocWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  locationWrapper: {
    display: 'flex',
    maxHeight: '20%',
  },
  locationIcon: {
    color: theme.palette.secondary.main,
  },
  locationTitle: {
    color: theme.palette.secondary.main,
    marginLeft: 4,
  },
  eventTitle: {
    fontWeight: 700,
    maxHeight: '80%',
    fontSize: 18,
    marginTop: 8,
    overflowY: 'scroll',
  },
  bottomSection: {
    height: '60%',
  },
  description: {
    height: '100%',
    fontSize: 16,
    overflowY: 'scroll',
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
        <Grid container spacing={2} className={classes.topSection}>
          <Grid item xs={3}>
            <Box className={classes.dateWrapper}>
              <Typography>{moment(event.start).format('MMM')}</Typography>
              <Typography>{moment(event.start).format('D')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={9} className={classes.titleLocWrapper}>
            <Box className={classes.locationWrapper}>
              <LocationOn className={classes.locationIcon} />
              <Typography className={classes.locationTitle}>
                {event.location}
              </Typography>
            </Box>
            <Typography className={classes.eventTitle}>
              {event.title}
            </Typography>
          </Grid>
        </Grid>
        <Box className={classes.bottomSection}>
          <Typography className={classes.description}>
            {event.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

EventCard.propTypes = {
  event: PropTypes.object,
}

export default EventCard
