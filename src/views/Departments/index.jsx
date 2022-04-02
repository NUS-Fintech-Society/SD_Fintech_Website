import { useState } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import departmentData from '../../../data/departments/departmentData'
import departmentInfo from '../../../data/departments/departmentInfo'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from '@material-ui/core'
import theme from '../../themes'
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    marginTop: '80px',
    '& .MuiAccordionSummary-root.Mui-expanded': {
      minHeight: 'auto',
    },
    '& .MuiAccordionSummary-root': {
      minHeight: 'auto',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  descWrapper: {
    marginTop: '24px',
    padding: '16px',
    boxShadow: '4px 24px 60px rgba(0, 0, 0, 0.25)',
    borderRadius: theme.shape.borderRadius,
  },
  purposeWrapper: {
    display: 'grid',
  },
  deptHeader: {
    width: '200px',
    marginLeft: '20px',
    fontWeight: 600,
  },
  circle: {
    borderRadius: '50%',
    margin: '10px 10px 10px 0',
  },
  descHeader: {
    color: theme.palette.text.navy,
  },
  accordionBox: {
    marginBottom: '20px',
  },
  accordion: {
    border: 'none',
    background: 'inherit',
    boxShadow: 'none',
    '&::before': {
      opacity: 0,
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
    '& .MuiAccordionSummary-content h3': {
      margin: 0,
    },
    '& .MuiAccordionSummary-root.Mui-expanded': {
      minHeight: 'auto',
    },
  },
  projectHeader: {
    fontWeight: 600,
  },
  projectImg: {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
  },
  orangeBox: {
    background: theme.palette.background.orange,
    borderRadius: theme.shape.borderRadius,
    marginTop: '8px',
  },
  icon: {
    width: '20px',
    height: '20px',
    fontFamily: 'Serif',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
}))

const Departments = () => {
  const classes = useStyles()
  const router = useRouter()
  const [expanded, setExpanded] = useState([])
  var infoObj = departmentInfo.find((item) => item.route == router.asPath)
  let dataObj = {}
  if (infoObj) {
    dataObj = departmentData.find(
      (item) => item.deptName == infoObj.title + ' Department'
    )
    if (!dataObj) dataObj = {}
  } else {
    infoObj = {}
  }
  const handleChange = (i) => (event, newExpanded) => {
    const arr = [...expanded]
    arr[i] = newExpanded ? !arr[i] : false
    setExpanded(arr)
  }

  return (
    <Layout>
      <Container className={classes.root}>
        <Box className={classes.flex}>
          <img src={infoObj.icon} alt="logo" />
          <Typography className={classes.deptHeader} variant="h6">
            {dataObj.deptName || ''}
          </Typography>
        </Box>
        <Grid container spacing={2} className={classes.descWrapper}>
          <Grid item xs={8} className={classes.purposeWrapper}>
            <Box>
              <Typography className={classes.descHeader} variant="subtitle1">
                Purpose
              </Typography>
              <Typography>{dataObj.purpose}</Typography>
            </Box>
            <Box>
              <Typography className={classes.descHeader} variant="subtitle1">
                Vision
              </Typography>
              <Typography>{dataObj.goal}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.descHeader} variant="subtitle1">
              Team Leads
            </Typography>
            {dataObj && dataObj.teamLeads
              ? dataObj.teamLeads.map((item, i) => {
                  return (
                    <Box className={classes.flex} key={i}>
                      <img
                        className={classes.circle}
                        width="40%"
                        src={item.src}
                        alt="logo"
                      />
                      <Typography>{item.name || ''}</Typography>
                    </Box>
                  )
                })
              : ''}
          </Grid>
        </Grid>
        <Typography
          className={classes.descHeader}
          style={{ marginTop: '24px' }}
          variant="subtitle1"
        >
          Our Projects
        </Typography>
        <div className={classes.accordionBox}>
          {dataObj && dataObj.projects
            ? dataObj.projects.map((item, i) => {
                return (
                  <Accordion
                    className={classes.accordion}
                    expanded={expanded[i]}
                    onChange={handleChange(i)}
                    key={i}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Icon className={classes.icon}>
                          {expanded[i] ? '-' : '+'}
                        </Icon>
                      }
                      className={classes.orangeBox}
                      aria-controls="panel1d-content"
                      id={'panel1d-header' + i}
                    >
                      <Typography className={classes.projectHeader}>
                        {item.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography>{item.details}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          {item && item.imageURLs && item.imageURLs[0] ? (
                            <img
                              src={item.imageURLs[0]}
                              className={classes.projectImg}
                            />
                          ) : (
                            ''
                          )}
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                )
              })
            : ''}
        </div>
      </Container>
    </Layout>
  )
}

export default Departments
