import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'

import sponsorsData from './sponsors.json'
import partnersData from './partners.json'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '96px 48px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.secondary,
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: '48px',
    },
  },
  title: {
    marginBottom: 24,
  },
  sectionWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20,
    [theme.breakpoints.down('xs')]: {
      marginTop: 32,
    },
  },
  sectionHeader: {
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    '& .MuiGrid-item': {
      cursor: 'pointer',
    },
  },
}))

const Credits = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {/* <Typography variant="h3" className={classes.title}>
        Partners
      </Typography> */}
      <Box className={classes.sectionWrapper}>
        <Typography variant="h5" className={classes.sectionHeader}>
          Sponsors
        </Typography>
        <Grid
          container
          className={classes.rowWrapper}
          spacing={4}
          style={{ maxWidth: '600px' }}
        >
          {sponsorsData.map((sponsor, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                width="100%"
                onClick={() => window.open(`${sponsor.website}`, '_blank')}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h5" className={classes.sectionHeader}>
          Partners
        </Typography>
        <Grid
          container
          className={classes.rowWrapper}
          spacing={4}
          style={{ maxWidth: '900px' }}
        >
          {partnersData.map((sponsor, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                width="100%"
                onClick={() => window.open(`${sponsor.website}`, '_blank')}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Credits
