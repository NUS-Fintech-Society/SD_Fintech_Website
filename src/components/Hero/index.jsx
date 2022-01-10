import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    backgroundImage: 'url(hero-banner.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    textTransform: 'uppercase',
  },
  subTitle: {
    fontStyle: 'italic',
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title} color="textSecondary">
        NUS Fintech Society
      </Typography>
      <Typography className={classes.subTitle} color="textSecondary">
        -Ideate, Innovate, Inspire
      </Typography>
    </Box>
  )
}

export default Hero
