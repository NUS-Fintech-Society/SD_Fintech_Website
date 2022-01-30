import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.primary,
  },
  ol: {
    listStyle: 'none',
  },
  header: {
    color: theme.palette.text.chart,
    fontSize: 42,
    [theme.breakpoints.down('sm')]: {
      fontSize: '35px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px',
    },
  },
  container: {
    maxWidth: '1000px',
    padding: '0 10px',
    margin: '0 auto',
  },
  rectangle: {
    position: 'relative',
    paddingTop: '12.5px',
    paddingBottom: '12.5px',
    paddingRight: '2px',
    paddingLeft: '2px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
    borderRadius: '20px',
  },
  level1Wrapper: {
    position: 'relative',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    margin: '0',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '30px',
      left: '25%',
      width: '50%',
      height: '2px',
      backgroundColor: theme.palette.chart.line,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '30px',
      left: '50%',
      width: '2px',
      height: 'calc(100% - 50px)',
      backgroundColor: theme.palette.chart.line,
    },
  },

  level2Wrapper: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    width: '90%',
    margin: '0 auto',
    padding: '0',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-20px',
      left: '25%',
      width: '50%',
      height: '2px',
      backgroundColor: theme.palette.chart.line,
    },
  },

  level3Wrapper: {
    position: 'relative',
    width: '50%',
    marginLeft: 'auto',
    padding: '0',
    margin: '0',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-40px',
      left: '-20px',
      width: '2px',
      height: 'calc(100% + 20px)',
      backgroundColor: theme.palette.chart.line,
    },
  },

  level1: {
    width: '70%',
    margin: '0 auto 40px',
    background: theme.palette.chart.shape,
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },

  level2: {
    width: '50%',
    margin: '0 auto 40px',
    background: theme.palette.chart.shape,
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },

  level3: {
    fontWeight: 'normal',
    background: theme.palette.chart.shape,
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '0%',
      transform: 'translate(-100%, -50%)',
      width: '20px',
      height: '2px',
      backgroundColor: theme.palette.chart.line,
    },
  },

  li1: {
    position: 'relative',
  },
  li2: {
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      width: '2px',
      height: '20px',
      backgroundColor: theme.palette.chart.line,
    },
  },
}))

const Chart = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <br />
      <Typography className={classes.header}>Club Structure</Typography>
      <br />
      <br />
      <div className={classes.container}>
        <ol className={`${classes.level1Wrapper} ${classes.ol}`}>
          <li className={classes.li1}>
            <p className={`${classes.level1} ${classes.rectangle}`}>
              Co-President
            </p>
          </li>
          <li className={classes.li1}>
            <p className={`${classes.level1} ${classes.rectangle}`}>
              Co-President
            </p>
          </li>
        </ol>
        <ol className={`${classes.level2Wrapper} ${classes.ol}`}>
          <li className={classes.li2}>
            <p className={`${classes.level2} ${classes.rectangle}`}>
              VP Operations
            </p>
            <ol className={`${classes.level3Wrapper} ${classes.ol}`}>
              <li>
                <p className={`${classes.level3} ${classes.rectangle}`}>
                  External Relations
                </p>
              </li>
              <li>
                <p className={`${classes.level3} ${classes.rectangle}`}>
                  Internal Affairs
                </p>
              </li>
            </ol>
          </li>
          <li className={classes.li2}>
            <p className={`${classes.level2} ${classes.rectangle}`}>
              VP Technology
            </p>
            <ol className={`${classes.level3Wrapper} ${classes.ol}`}>
              <li>
                <p className={`${classes.level3} ${classes.rectangle}`}>
                  Blockchain
                </p>
              </li>
              <li>
                <p className={`${classes.level3} ${classes.rectangle}`}>
                  Machine Learning
                </p>
              </li>
              <li>
                <p className={`${classes.level3} ${classes.rectangle}`}>
                  Software Dev
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Box>
  )
}

export default Chart
