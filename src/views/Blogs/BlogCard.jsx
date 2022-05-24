import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 280,
    width: 330,
    backgroundColor: theme.palette.background.primary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '6px 6px #F0F0F0',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '12px 12px #F0F0F0',
      transform: 'translateX(-2px) translateY(-2px)',
    },
  },
  thumbnail: {
    width: '100%',
    height: '60%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
  },
  contentWrapper: {
    height: '40%',
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
    <Box className={classes.root}>
      <img
        className={classes.thumbnail}
        src={blog.imageUrl || 'default-event.jpg'}
        alt="Blog Thumbnail"
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
              <Typography>{moment(blog.date).format('MMM')}</Typography>
              <Typography>{moment(blog.date).format('D')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={9} container alignItems="center">
            <Typography className={classes.blogTitle}>{blog.title}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

BlogCard.propTypes = {
  blog: PropTypes.object,
}

export default BlogCard
