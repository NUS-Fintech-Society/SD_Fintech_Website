import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid } from '@material-ui/core'
import SectionContainer from '../Layout/SectionContainer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    color: theme.palette.text.chart,
    marginBottom: 32,
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
  left: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    boxShadow: '4px 24px 60px rgba(109, 141, 173, 0.25);',
    height: '100%',
  },
  right: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
    boxShadow: '4px 24px 60px rgba(109, 141, 173, 0.25);',
    height: '100%',
  },
  boxWrapper: {
    textAlign: 'left',
  },
  leftImage: {
    maxWidth: '100%',
    height: 'auto',
    marginRight: '4%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '0px',
    },
  },
  rightImage: {
    maxWidth: '100%',
    height: 'auto',
    marginLeft: '4%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '0px',
    },
  },
  teamTitle: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    fontSize: '30px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
    },
  },
  link: {
    marginTop: 32,
    fontWeight: 700,
    cursor: 'pointer',
    color: theme.palette.tertiary.dark,
    textDecoration: 'none',
  },
}))

const OurTeams = () => {
  const classes = useStyles()

  return (
    <SectionContainer bgIsPrimary>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h5">
          Our Teams
        </Typography>
        <Grid container direction="row" justifyContent="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              padding={4}
              justifyContent="space-evenly"
              alignItems="center"
              display="flex"
              flexDirection="row"
              className={classes.left}
            >
              <Box
                flexDirection="column"
                display="flex"
                className={classes.boxWrapper}
              >
                <Typography className={classes.teamTitle}>
                  Machine Learning
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
                <br />
                <a
                  className={classes.link}
                  href={'/department/machinelearning'}
                >
                  Learn More &gt;&gt;
                </a>
              </Box>
              <img className={classes.rightImage} alt="ml" src="ml.png"></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              padding={4}
              justifyContent="space-evenly"
              alignItems="center"
              display="flex"
              flexDirection="row"
              className={classes.right}
            >
              <img className={classes.leftImage} alt="op" src="op.png"></img>
              <Box
                flexDirection="column"
                display="flex"
                className={classes.boxWrapper}
              >
                <Typography className={classes.teamTitle}>
                  Operations
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
                <br />
                <a className={classes.link} href={'/department/operations'}>
                  Learn More &gt;&gt;
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              padding={4}
              justifyContent="space-evenly"
              alignItems="center"
              display="flex"
              flexDirection="row"
              className={classes.left}
            >
              <Box
                flexDirection="column"
                display="flex"
                className={classes.boxWrapper}
              >
                <Typography className={classes.teamTitle}>
                  Software Development
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
                <br />
                <a className={classes.link} href={'/department/software'}>
                  Learn More &gt;&gt;
                </a>
              </Box>
              <img
                className={classes.rightImage}
                alt="devops"
                src="devops.png"
              ></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              padding={4}
              justifyContent="space-evenly"
              alignItems="center"
              display="flex"
              flexDirection="row"
              className={classes.right}
            >
              <img className={classes.leftImage} alt="bc" src="bc.png"></img>
              <Box
                flexDirection="column"
                display="flex"
                className={classes.boxWrapper}
              >
                <Typography className={classes.teamTitle}>
                  Blockchain
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
                <br />
                <a className={classes.link} href={'/department/blockchain'}>
                  Learn More &gt;&gt;
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </SectionContainer>
  )
}

export default OurTeams
