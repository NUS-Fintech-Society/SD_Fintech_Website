import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Box, Toolbar } from '@material-ui/core'
import Tab from './Tab'

const NAVIGATION = [
  {
    main: 'Home',
    children: [],
    redirect: '/',
  },
  {
    main: 'Departments',
    children: [
      {
        name: 'Machine Learning',
        redirect: '/department/machinelearning',
      },
      {
        name: 'Blockchain',
        redirect: '/department/blockchain',
      },
      {
        name: 'Software Development',
        redirect: '/department/software',
      },
      {
        name: 'Operations',
        redirect: '/department/operations',
      },
    ],
    redirect: '',
  },
  {
    main: 'Content',
    children: [
      {
        name: 'Blogs',
        redirect: '/blogs',
      },
      {
        name: 'Courses',
        redirect: '/courses',
      },
    ],
    redirect: '',
  },
  {
    main: 'Events',
    children: [],
    redirect: '/events',
  },
  {
    main: 'Recruitment',
    children: [],
    redirect: '',
  },
  {
    main: 'Contact',
    children: [],
    redirect: '/#contact',
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
            <img src="/society-logo-white.png" alt="FTS Logo" height="100%" />
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
