import { Box, Typography } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import Dotdotdot from 'react-clamp'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    // boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
    width: '25em',
    padding: '1em',
    transform: 'translateY(0px);',
    transition: '0.5s',
    marginTop: '20px',
    borderRadius: '1.5em',
    '&:hover': {
      transform: 'translateY(-10px);',
      backgroundColor: '#f5f5f5',
    },
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1em',
  },
  dateBox: {
    backgroundColor: '#FAE9D0',
    color: '#FBBA5C',
    borderRadius: '0.4em',
    width: '3em',
    height: '3em',
    textAlign: 'center',
    '& *': {
      width: '100%',
    },
  },
  location: {
    marginLeft: '-0.2em',
    marginBottom: '-0.2em',
    marginTop: '0.2em',
    color: '#FBBA5C',
    '& span': {
      whiteSpace: 'nowrap',
      alignItems: 'center',
      display: 'flex',
    },
  },
  image: {
    width: '100%',
    borderRadius: '1em',
  },
  description: {
    maxHeight: '10em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})

const EventCard = ({ date, location, title, description }) => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <img src="image-events-default.jpg" className={classes.image} />
        <Box className={classes.cardHeader}>
          <Box className={classes.dateBox}>
            {moment(date).format('MMM')}
            <br />
            {moment(date).format('D')}
          </Box>
          <Box>
            <Box className={classes.location}>
              <Typography variant="p">
                <LocationOn />
                {location}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">{title}</Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.description}>
          <Typography variant="p">
            <Dotdotdot clamp={5}>{description}</Dotdotdot>
          </Typography>
        </Box>
      </Box>
    </>
  )
}

EventCard.propTypes = {
  date: PropTypes.object,
  location: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default EventCard
