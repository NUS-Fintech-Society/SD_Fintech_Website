import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Navbar from '../Navbar'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}))

const Layout = (props) => {
  const classes = useStyles()
  const { children } = props

  return (
    <Box className={classes.root}>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout