import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core'

const NAVIGATION = [
  {
    main: 'Home',
  },
  {
    main: 'Departments',
  },
  {
    main: 'Contact',
  },
  {
    main: 'Recruitment',
  },
  {
    main: 'FAQs',
  },
  {
    main: 'Contact Us',
  },
  {
    main: 'Login',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiToolbar-regular': {
      minHeight: 56,
      height: 56,
      overflowX: 'scroll',
    },
  },
  title: {
    height: '100%',
    flexGrow: 1,
  },
  navItem: {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.contrast,
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <AppBar color="primary" className={classes.root}>
        <Toolbar>
          <Box className={classes.title}>
            <img src="society-logo-white.png" alt="FTS Logo" height="100%" />
          </Box>
          {NAVIGATION.map((item, index) => (
            <IconButton key={index} className={classes.navItem}>
              {item.main}
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </React.Fragment>
  )
}

export default Navbar
