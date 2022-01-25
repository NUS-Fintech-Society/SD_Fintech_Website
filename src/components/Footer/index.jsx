import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, IconButton } from '@material-ui/core'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const useStyles = makeStyles((theme) => ({
  navBar: {
    background: theme.palette.background.tertiary,
    textAlign: 'center',
    justifyContent: 'center',
    height: '40px',
    paddingBottom: '45px',
  },

  footer: {
    background: theme.palette.background.tertiary,
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
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Footer
