import { Box, Typography } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import ClampLines from 'react-clamp-lines'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0px 10px 13px -7px ${theme.palette.grey[200]}, 5px 5px 15px 5px rgba(0,0,0,0)`,
    padding: '1em',
    transform: 'translateY(0px);',
    transition: '0.5s',
    marginTop: '20px',
    borderRadius: '1.5em',
    width: '20em',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.only('sm')]: {
      width: '75%',
    },
    '&:hover': {
      boxShadow: `0px 10px 13px -7px ${theme.palette.grey[500]}, 5px 5px 15px 5px rgba(0,0,0,0)`,

      transform: 'translateY(-10px);',
    },
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5em',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& > div > div > h6': {
        marginTop: '0.3em',
      },
    },
  },
  dateBox: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary,
    borderRadius: '0.4em',
    width: '3em',
    height: '3em',
    textAlign: 'center',
    '& *': {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      visibility: 'hidden',
      height: '0',
      width: 0,
    },
  },
  dateBoxXS: {
    [theme.breakpoints.up('xs')]: {
      visibility: 'hidden',
      width: 0,
      height: 0,
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.down('xs')]: {
      visibility: 'visible',
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary,
      borderRadius: '0.4em',
      width: 'auto',
      height: 'auto',
      padding: '0.2em',
      textAlign: 'center',
      marginBottom: '-0.5em',
      '& *': {
        width: '100%',
      },
    },
  },
  location: {
    marginLeft: '-0.2em',
    marginBottom: '-0.2em',
    marginTop: '0.4em',
    color: theme.palette.secondary,
    whiteSpace: 'nowrap',
    alignItems: 'center',
    display: 'flex',
    '& p': {
      textOverflow: 'ellipsis',
      flex: '0 5 auto',
      color: theme.palette.secondary,
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.2em',
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
    [theme.breakpoints.down('xs')]: {
      marginTop: '-0.5em',
      marginBottom: '-0.5em',
    },
  },
}))

const EventCard = ({ date, location, title, description, imageUrl }) => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <Box
          className={classes.imageCrop}
          style={{ backgroundImage: `url(${imageUrl || 'default-event.jpg'})` }}
        ></Box>
        <Box className={classes.cardHeader}>
          <Box className={classes.dateBox}>
            {moment(date).format('MMM')}
            <br />
            {moment(date).format('D')}
          </Box>
          <Box className={classes.dateBoxXS}>
            {moment(date).format('MMMM D')}
          </Box>
          <Box>
            <Box className={classes.location}>
              <LocationOn />
              <Typography>{location}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">{title}</Typography>
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

EventCard.propTypes = {
  date: PropTypes.object,
  location: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default EventCard
