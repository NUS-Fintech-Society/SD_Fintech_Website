import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import blogsData from '../../data/blogs'
import theme from '../../themes'
import BlogCard from './BlogCard'

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
    marginLeft: 32,
    height: 200,
    width: 200,
    [theme.breakpoints.down('xs')]: {
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

const Blogs = () => {
  const classes = useStyles()

  const renderCourses = () => {
    return blogsData.map((blog, index) => {
      return <BlogCard key={index} blog={blog} />
    })
  }

  return (
    <Layout>
      <Box className={classes.hero}>
        <Typography className={classes.title} variant="h3">
          Blogs
        </Typography>
        <img
          className={classes.heroImg}
          src="blogs-hero.png"
          alt="Blogs Hero Image"
        />
      </Box>
      <Container maxWidth="lg" className={classes.content}>
        {renderCourses()}
      </Container>
    </Layout>
  )
}

export default Blogs
