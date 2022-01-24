import { Box, Typography } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

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
      alignItems: 'center',
      display: 'flex',
    },
  },
  image: {
    width: '100%',
    borderRadius: '1em',
  },
})

const EventCard = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <img src="image-events-default.jpg" className={classes.image} />
        <Box className={classes.cardHeader}>
          <Box className={classes.dateBox}>
            Oct <br /> 5
          </Box>
          <Box>
            <Box className={classes.location}>
              <Typography variant="p">
                <LocationOn />
                Kent Ridge MRT
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Event Title</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="p">Lorem ipsum dolor sit amet</Typography>
        </Box>
      </Box>
    </>
  )
}

export default EventCard
