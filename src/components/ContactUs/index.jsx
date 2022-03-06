import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import LocationIcon from '@material-ui/icons/Place'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '40vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(nus-soc.jpg)',
    backgroundColor: theme.palette.background.secondary,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '0px 16px',
    position: 'relative',
  },
  contentWrapper: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      marginBottom: 24,
      marginTop: 12,
    },
  },
  textWrapper: {
    marginTop: 24,
    marginBottom: 24,
  },
  boldText: {
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  button: {
    cursor: 'pointer',
    fontSize: 40,
    color: theme.palette.primary.main,
  },
}))

const ContactUs = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <Typography variant="h3" className={classes.header}>
          CONTACT
        </Typography>
        <Box className={classes.textWrapper}>
          <LocationIcon fontSize="large" />
          <Typography className={classes.boldText}>
            NUS School of Computing, COM1, 13 Computing Drive, Singapore 117417
          </Typography>
        </Box>
        <Box className={classes.textWrapper}>
          <MailIcon fontSize="large" />
          <Typography className={classes.boldText}>
            nusfintech.ops@gmail.com
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactUs
