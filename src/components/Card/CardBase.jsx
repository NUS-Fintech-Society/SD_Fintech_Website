import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

const CardBase = (props) => {
  const {
    cardHeight = 450,
    cardWidth = 330,
    imageHeight = 225,
    imageUrl = 'default-event.jpg',
    externalLink,
    children,
  } = props
  const useStyles = makeStyles((theme) => ({
    root: {
      height: cardHeight,
      width: cardWidth,
      backgroundColor: theme.palette.background.primary,
      borderRadius: theme.shape.borderRadius,
      boxShadow: '6px 6px #F0F0F0',
    },
    redirect: {
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '12px 12px #F0F0F0',
        transform: 'translateX(-2px) translateY(-2px)',
      },
    },
    thumbnail: {
      width: '100%',
      height: imageHeight,
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
    },
    contentWrapper: {
      height: cardHeight - imageHeight,
      padding: '8px 16px',
      overflowY: 'scroll',
    },
  }))
  const classes = useStyles()

  return (
    <Box
      className={`${classes.root} ${externalLink && classes.redirect}`}
      onClick={() => {
        if (externalLink) {
          window.open(externalLink)
        }
      }}
    >
      <img className={classes.thumbnail} src={imageUrl} alt="Thumbnail" />
      <Box className={classes.contentWrapper}>{children}</Box>
    </Box>
  )
}

CardBase.propTypes = {
  cardHeight: PropTypes.number,
  cardWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  imageUrl: PropTypes.string,
  externalLink: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default CardBase
