import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    justifyContent: 'center',
    height: '40px',
    paddingBottom: '45px',
  },

  footer: {
    backgroundColor: theme.palette.primary.main,
    fontSize: theme.typography.caption.fontSize,
    color: theme.palette.text.secondary,
    textAlign: 'center',
    height: '25px',
  },

  navItem: {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.link, // not sure which color to highlight..
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Box>
      <Box className={classes.navBar}>
        <IconButton
          className={classes.navItem}
          href="https://www.instagram.com/nusfintech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          className={classes.navItem}
          href="https://github.com/nusfintech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          className={classes.navItem}
          href="https://www.linkedin.com/company/nus-fintech-society/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <footer className={classes.footer}>© 2022 by NUS Fintech Society</footer>
    </Box>
  )
}

export default Footer
