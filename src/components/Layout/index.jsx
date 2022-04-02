import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Footer from '../Footer'
import Navbar from '../Navbar'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    scrollBehavior: 'smooth',
  },
}))

const Layout = (props) => {
  const classes = useStyles()
  const { children } = props

  return (
    <Box className={classes.root}>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
