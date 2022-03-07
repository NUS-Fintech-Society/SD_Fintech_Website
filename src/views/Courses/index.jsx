import { Container, makeStyles, Typography } from '@material-ui/core'
import EventCardList from '../../components/EventCardList'
import Layout from '../../components/Layout'
import coursesData from '../../data/courses'
import theme from '../../themes'

const useStyles = makeStyles(() => ({
  coursesList: {
    paddingTop: '1em',
  },
}))

const Courses = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Container maxWidth="lg" style={{ minHeight: 'calc(100vh - 126px)' }}>
        <Typography
          variant="h4"
          style={{
            color: theme.palette.tertiary.darker,
            textAlign: 'center',
            display: 'block',
            marginTop: '80px',
          }}
        >
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
