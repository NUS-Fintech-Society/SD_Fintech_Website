import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core'

const SectionContainer = (props) => {
  const { children, viewportHeight = 100, bgIsPrimary } = props
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: bgIsPrimary
        ? theme.palette.background.primary
        : theme.palette.background.secondary,
    },
    container: {
      width: '100%',
      padding: '64px 32px',
      minHeight: `${viewportHeight}vh`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: 32,
      },
    },
  }))
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        {children}
      </Container>
    </Box>
  )
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  viewportHeight: PropTypes.number,
  bgIsPrimary: PropTypes.bool.isRequired,
}

export default SectionContainer
