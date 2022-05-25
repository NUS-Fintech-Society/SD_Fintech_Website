import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import PropTypes from 'prop-types'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    padding: '8px 16px',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    '& .MuiTypography-root': {
      fontSize: 18,
      color: theme.palette.secondary.main,
    },
  },
}))

const DateBox = (props) => {
  const { date } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography>{moment(date).format('MMM')}</Typography>
      <Typography>{moment(date).format('D')}</Typography>
    </Box>
  )
}

DateBox.propTypes = {
  date: PropTypes.object.isRequired,
}

export default DateBox
