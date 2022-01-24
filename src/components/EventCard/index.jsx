import { Box, Typography } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
    width: '25em',
    '&:hover': {
      marginTop: '-2px',
      marginBottom: '2px',
    },
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  dateBox: {
    backgroundColor: '#FAE9D0',
    color: '#FBBA5C',
    borderRadius: '0.4em',
  },
  location: {
    color: '#FBBA5C',
  },
})

const EventCard = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <img src="" />
        <Box className={classes.cardHeader}>
          <Box className={classes.dateBox}>
            Oct <br /> 5
          </Box>
          <Box>
            <Box className={classes.location}>
              <LocationOn />
              Kent Ridge MRT
            </Box>
            <Box>
              <Typography>Event Title</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default EventCard
