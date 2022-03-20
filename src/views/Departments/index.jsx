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
} from '@material-ui/core'
const useStyles = makeStyles(() => ({
  root: {
    minHeight: 'calc(100vh - 146px)',
    marginTop: '76px',
    color: '#9c9c9c',
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
  h2: {
    width: '200px',
    marginLeft: '20px',
    color: '#000000',
  },
  circle: {
    borderRadius: '50%',
    margin: '10px 10px 10px 0',
  },
  h4: {
    color: '#4987b1',
  },
  accordionBox: {
    borderRadius: '20px',
    background: 'inherit',
    marginBottom: '20px',
  },
  accordion: {
    //  borderRadius: '20px',
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
    '& .MuiAccordionSummary-root.Mui-expande': {
      minHeight: 'auto',
    },
  },

  orangeBox: {
    background: '#fdb44b',
    borderRadius: '20px',
    marginTop: '8px',
  },
  icon: {
    width: '20px',
    height: '20px',
    fontFamily: 'Serif',
    border: '1px solid grey',
    color: 'grey',
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
    console.log(event, 7888, newExpanded, i, newExpanded ? !expanded[i] : false)
    const arr = [...expanded]
    arr[i] = newExpanded ? !arr[i] : false
    setExpanded(arr)
  }
  // console.log(dataObj);
  return (
    <Layout>
      <Container className={classes.root}>
        <Box className={classes.flex}>
          <img src={infoObj.icon} alt="logo" />
          <h2 className={classes.h2}>{dataObj.deptName || ''}</h2>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box>
              <h4 className={classes.h4}>Purpose</h4>
              <p>{dataObj.purpose}</p>
            </Box>
            <Box>
              <h4 className={classes.h4}>Vision</h4>
              <p>{dataObj.goal}</p>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <h4 className={classes.h4}>Team Leads</h4>

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
                      <p>{item.name || ''}</p>
                    </Box>
                  )
                })
              : ''}
          </Grid>

          {/*<Grid item xs={4}>
                        44
                    </Grid>*/}
        </Grid>

        <h4 className={classes.h4}>Our Projects</h4>
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
                      <h3>{item.title}</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          {item.details}
                        </Grid>
                        <Grid item xs={6}>
                          {item && item.imageURLs && item.imageURLs[0] ? (
                            <img width="100%" src={item.imageURLs[0]} />
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
