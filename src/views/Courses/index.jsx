import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import coursesData from '../../data/courses'
import theme from '../../themes'
import CourseCard from './CourseCard'

const useStyles = makeStyles(() => ({
  hero: {
    height: 400,
    width: '100%',
    background: 'linear-gradient(90deg, #3A7BD5 0%, #3A6073 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 350,
    },
  },
  title: {
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
    },
  },
  heroImg: {
    marginLeft: 64,
    height: 200,
    width: 200,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 32,
      height: 100,
      width: 100,
    },
  },
  content: {
    padding: '32px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 32,
  },
}))

const Courses = () => {
  const classes = useStyles()

  const renderCourses = () => {
    return coursesData.map((course, index) => {
      return <CourseCard key={index} course={course} />
    })
  }

  return (
    <Layout>
      <Box className={classes.hero}>
        <Typography className={classes.title} variant="h3">
          Courses
        </Typography>
        <img
          className={classes.heroImg}
          src="courses-hero.png"
          alt="Courses Hero Image"
        />
      </Box>
      <Container maxWidth="lg" className={classes.content}>
        {renderCourses()}
      </Container>
    </Layout>
  )
}

export default Courses
