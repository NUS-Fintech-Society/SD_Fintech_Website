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
    transform: 'translateY(0px);',
    transition: '0.5s',
    marginTop: '20px',
    borderRadius: '1.5em',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '&:hover': {
      boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',

      transform: 'translateY(-10px);',
      backgroundColor: '#f5f5f5',
    },
  },
  cardHeader: {
    display: 'inline-block',
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
    maxHeight: '400px',
    '& img': {
      maxWidth: '100%',
      height: 'auto !important',
      display: 'block',
      width: 'auto\\9',
    },
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
        <Box className={classes.imageCrop}>
          <img
            src={imageUrl || 'default-event.jpg'}
            className={classes.image}
          />
        </Box>
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
