import { Box, Typography } from '@material-ui/core'
import { LocationOn, Event as EventIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import ClampLines from 'react-clamp-lines'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0px 10px 13px -7px #efefef, 5px 5px 15px 5px rgba(0,0,0,0)',
    maxWidth: '40em',
    padding: '1em',
    marginTop: '20px',
    borderRadius: '1.5em',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  cardHeader: {
    display: 'inline-block',
    '& > div > h4': {
      marginTop: '0.3em',
      marginBottom: '0.3em',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  date: {
    display: 'flex',
    gap: '0.5em',
    '& .label': {
      display: 'flex',
      alignItems: 'center',
      color: '#4B87B1',
    },
  },
  location: {
    display: 'flex',
    gap: '0.5em',
    '& .label': {
      display: 'flex',
      alignItems: 'center',
      color: '#4B87B1',
    },
  },
  imageCrop: {
    borderRadius: '1em',
    overflow: 'hidden',
    paddingBottom: 'calc(100% * 9 / 16)',
    height: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  description: {
    maxHeight: '10em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

const EventSpotlight = ({ date, location, title, description, imageUrl }) => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <Box
          className={classes.imageCrop}
          style={{ backgroundImage: `url(${imageUrl || 'default-event.jpg'})` }}
        ></Box>
        <Box className={classes.cardHeader}>
          <Box>
            <Typography variant="h4">{title}</Typography>
          </Box>
          <Box className={classes.date}>
            <span className="label">
              <EventIcon />
              Date:
            </span>{' '}
            {moment(date).format('MMMM DD YYYY')}
          </Box>
          <Box>
            <Box className={classes.location}>
              <span className="label">
                <LocationOn />
                Location:
              </span>{' '}
              {location}
            </Box>
          </Box>
        </Box>
        <Box className={classes.description}>
          <ClampLines
            lines={5}
            text={description}
            buttons={false}
            innerElement="p"
          ></ClampLines>
        </Box>
      </Box>
    </>
  )
}

EventSpotlight.propTypes = {
  date: PropTypes.object,
  location: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default EventSpotlight
