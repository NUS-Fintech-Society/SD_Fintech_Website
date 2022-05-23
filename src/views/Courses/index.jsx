import { Container, makeStyles, Typography } from '@material-ui/core'
import EventCardList from '../../components/EventCardList'
import Layout from '../../components/Layout'
import coursesData from '../../data/courses'
import theme from '../../themes'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    marginTop: 80,
    paddingBottom: 32,
  },
  title: {
    textAlign: 'center',
    color: theme.palette.tertiary.dark,
  },
  coursesList: {
    paddingTop: '1em',
  },
}))

const Courses = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.root}>
        <Typography className={classes.title} variant="h5">
          Courses
        </Typography>
        <EventCardList
          eventList={coursesData}
          className={classes.coursesList}
          empty={'No upcoming courses, stay tuned!'}
        />
      </Container>
    </Layout>
  )
}

export default Courses
