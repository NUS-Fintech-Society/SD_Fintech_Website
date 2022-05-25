import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import CardBase from '../../components/Card/CardBase'
import DateBox from '../../components/Card/DateBox'

const useStyles = makeStyles(() => ({
  blogTitle: {
    fontWeight: 700,
    fontSize: 18,
    marginTop: 4,
  },
}))

const BlogCard = (props) => {
  const { blog } = props
  const classes = useStyles()

  return (
    <CardBase
      cardHeight={280}
      imageHeight={168}
      imageUrl={blog.imageUrl}
      externalLink={blog.link}
    >
      <Grid container spacing={2}>
        <Grid item xs={3} container alignItems="center" justifyContent="center">
          <DateBox date={blog.date} />
        </Grid>
        <Grid item xs={9} container alignItems="center">
          <Typography className={classes.blogTitle}>{blog.title}</Typography>
        </Grid>
      </Grid>
    </CardBase>
  )
}

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default BlogCard
