import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: 330,
    backgroundColor: theme.palette.background.primary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '3px 6px #F0F0F0',
    cursor: 'pointer',
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
  courseTitle: {
    fontWeight: 700,
    fontSize: 18,
    marginTop: 4,
  },
  description: {
    marginTop: 4,
    fontSize: 16,
  },
}))

const CourseCard = (props) => {
  const { course } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <img
        className={classes.thumbnail}
        src={course.imageUrl || 'default-event.jpg'}
        alt="Course Thumbnail"
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
              <Typography>{moment(course.date).format('MMM')}</Typography>
              <Typography>{moment(course.date).format('D')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={9} container alignItems="center">
            <Typography className={classes.courseTitle}>
              {course.title}
            </Typography>
          </Grid>
        </Grid>
        <Typography className={classes.description}>
          {course.description}
        </Typography>
      </Box>
    </Box>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object,
}

export default CourseCard
