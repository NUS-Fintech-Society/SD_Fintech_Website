import React from 'react'
import { Button, Menu, MenuItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  btn: {
    marginLeft: 4,
    marginRight: 4,
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
  },
  menu: {
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

const Tab = (props) => {
  const classes = useStyles()
  const { data } = props

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button className={classes.btn} onClick={handleClick}>
        <Typography variant="body2" color="textSecondary">
          {data.main}
        </Typography>
      </Button>
      {data.children.length > 0 && (
        <Menu
          className={classes.menu}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {data.children.map((item, index) => (
            <MenuItem key={index}>
              <Typography variant="body2" color="textSecondary">
                {item}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  )
}

Tab.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Tab