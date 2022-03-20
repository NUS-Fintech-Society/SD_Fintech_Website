import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Box, Toolbar } from '@material-ui/core'
import Tab from './Tab'

const NAVIGATION = [
  {
    main: 'Home',
    children: [],
  },
  {
    main: 'Departments',
    children: [
      {
        title: 'Machine Learning',
        path: '/department/machinelearning',
      },
      {
        title: 'Blockchain',
        path: '/department/blockchain',
      },
      {
        title: 'Software Development',
        path: '/department/devops',
      },
      {
        title: 'Operations',
        path: '/department/operations',
      },
    ],
  },
  {
    main: 'Content',
    children: ['Blogs', 'Courses'],
  },
  {
    main: 'Events',
    children: [],
  },
  {
    main: 'Recruitment',
    children: [],
  },
  {
    main: 'FAQ',
    children: [],
  },
  {
    main: 'Contact',
    children: [],
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
    color: theme.palette.text.secondary,
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
            <Tab key={index} data={item} />
          ))}
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </React.Fragment>
  )
}

export default Navbar
