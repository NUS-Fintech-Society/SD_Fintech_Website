import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import CardBase from '../../components/Card/CardBase'
import DateBox from '../../components/Card/DateBox'

const useStyles = makeStyles(() => ({
  courseTitle: {
    fontWeight: 700,
    fontSize: 18,
    marginTop: 4,
  },
}))

const CourseCard = (props) => {
  const { course } = props
  const classes = useStyles()

  return (
    <CardBase
      cardHeight={280}
      imageHeight={168}
      imageUrl={course.imageUrl}
      externalLink={course.link}
    >
      <Grid container spacing={2}>
        <Grid item xs={3} container alignItems="center" justifyContent="center">
          <DateBox date={course.date} />
        </Grid>
        <Grid item xs={9} container alignItems="center">
          <Typography className={classes.courseTitle}>
            {course.title}
          </Typography>
        </Grid>
      </Grid>
    </CardBase>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
}

export default CourseCard
