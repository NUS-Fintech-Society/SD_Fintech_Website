import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group'
import WorkIcon from '@material-ui/icons/Work'
import SectionContainer from '../../components/Layout/SectionContainer'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.tertiary.dark,
    marginBottom: 16,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontSize: 32,
    },
  },
  logo: {
    width: '100%',
  },
  descWrapper: {
    paddingLeft: 32,
    paddingRight: 32,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  statsWrapper: {
    marginTop: 96,
    [theme.breakpoints.down('xs')]: {
      marginTop: 32,
    },
  },
  statWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 64,
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
  statVal: {
    color: theme.palette.tertiary.dark,
    marginTop: 8,
    marginBottom: 8,
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  statTerm: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <SectionContainer bgIsPrimary viewportHeight={80}>
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Box className={classes.descWrapper}>
              <Typography variant="h5" className={classes.title}>
                About Us
              </Typography>
              <Typography>
                NUS FinTech Society was founded under NUS School of Computing by
                a group of like-minded individuals with a passion in pursuing
                research and driving applications in the realms of Blockchain
                and Machine Learning. We currently have over 80 members, each
                with a strong grasp of their individual research areas.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box className={classes.descWrapper}>
              <img
                className={classes.logo}
                src="society-logo-black.png"
                alt="Society Logo"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container className={classes.statsWrapper}>
          <Grid item xs={3}>
            <Box className={classes.statWrapper}>
              <GroupIcon className={classes.statIcon} />
              <Typography className={classes.statVal} variant="h5">
                100
              </Typography>
              <Typography className={classes.statTerm}>Members</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className={classes.statWrapper}>
              <WorkIcon className={classes.statIcon} />
              <Typography className={classes.statVal} variant="h5">
                20
              </Typography>
              <Typography className={classes.statTerm}>Projects</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className={classes.statWrapper}>
              <GroupIcon className={classes.statIcon} />
              <Typography className={classes.statVal} variant="h5">
                12
              </Typography>
              <Typography className={classes.statTerm}>Events</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className={classes.statWrapper}>
              <WorkIcon className={classes.statIcon} />
              <Typography className={classes.statVal} variant="h5">
                1000
              </Typography>
              <Typography className={classes.statTerm}>Participants</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </SectionContainer>
  )
}

export default About
