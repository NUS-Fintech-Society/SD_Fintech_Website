import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.secondary,
    padding: 16,
  },
  contentWrapper: {
    padding: '48px 16px',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.primary,
  },
  header: {
    fontWeight: 700,
    // Breakpoint management for various screen sizes.
    // xs = mobile, sm = ipad, md = larger ipad, lg = laptop, xl = desktop
    [theme.breakpoints.down('xs')]: {
      textDecoration: 'underline',
    },
  },
  bodyWrapper: {
    marginTop: 16,
  },
  iconWrapper: {
    marginTop: 16,
    '& :not(:first-child)': {
      marginLeft: 12,
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
      fontSize: 32,
    },
  },
  buttonWrapper: {
    marginTop: 16,
    '& :not(:first-child)': {
      marginLeft: 12,
    },
  },
  typographyWrapper: {
    marginTop: 16,
    textAlign: 'center',
  },
}))

const Example = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container className={classes.contentWrapper} maxWidth="md">
        <Typography variant="h6" className={classes.header}>
          Example Component
        </Typography>
        <Box className={classes.bodyWrapper}>
          <Typography>
            If you have any questions about this event, or would like to work
            with us in the future?
          </Typography>
          <Typography>
            Feel free to reach out to us at nusfintech.ops@gmail.com
          </Typography>
        </Box>
        <Box className={classes.iconWrapper}>
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </Box>
        <Box className={classes.buttonWrapper}>
          <Button color="primary" variant="contained">
            Contact Us
          </Button>
          <Button color="secondary" variant="contained">
            Back To Home
          </Button>
        </Box>
      </Container>
      <Box className={classes.typographyWrapper}>
        <Typography variant="h1">Hello</Typography>
        <Typography variant="h2">Hello</Typography>
        <Typography variant="h3">Hello</Typography>
        <Typography variant="h4">Hello</Typography>
        <Typography variant="h5">Hello</Typography>
        <Typography variant="h6">Hello</Typography>
        <Typography variant="subtitle1">Hello</Typography>
        <Typography variant="subtitle2">Hello</Typography>
        <Typography>Hello</Typography>
        <Typography variant="body2">Hello</Typography>
      </Box>
    </Box>
  )
}

export default Example
