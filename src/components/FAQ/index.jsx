import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import DUMMY_QA from '../../data/FAQs.json'
import parse, { domToReact } from 'html-react-parser'
import SectionContainer from '../Layout/SectionContainer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.secondary,
  },
  title: {
    color: theme.palette.tertiary.dark,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
  subtitle: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    width: '60vw',
    padding: '1rem',
    '& .MuiAccordion-root': {
      marginTop: '.8rem',
      borderRadius: '10px',
    },
    '& .MuiAccordion-root:before': {
      position: 'inherit',
    },
    '& .MuiAccordion-root.Mui-expanded': {
      margin: '1rem 0 0 0',
    },
    '& .MuiAccordionSummary-content': {
      padding: '0.8rem',
      margin: 0,
    },
    '& .MuiAccordionDetails-root': {
      padding: '0.5rem 1.8rem 0 1.8rem',
      display: 'flex',
      flexDirection: 'column',
    },

    [theme.breakpoints.down('xs')]: {
      width: '90vw',
    },
  },
  section__title: {
    color: theme.palette.tertiary.dark,
    textAlign: 'start',
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  section__icon: {
    color: theme.palette.primary.main,
  },
}))

const FAQ = () => {
  const classes = useStyles()
  const FAQState = {}
  DUMMY_QA.qa
    .map((el) => el.FAQs)
    .flat()
    .map((el) => el.id)
    .forEach((el) => (FAQState[el] = false))

  const [expandedState, setExpandedState] = useState(FAQState)

  const expandHandler = (id) => () => {
    const newList = { ...expandedState }
    if (expandedState[id]) {
      newList[id] = false
    } else {
      newList[id] = true
    }
    setExpandedState(newList)
  }

  return (
    <SectionContainer bgIsPrimary={false}>
      <Box className={classes.root}>
        <Typography variant="h5" className={classes.title}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          Refer to our commonly asked Q&As here!
        </Typography>
        {DUMMY_QA.qa.map((qa) => {
          return (
            <Box key={`${qa.id}`} className={classes.section}>
              <Typography
                variant="subtitle1"
                className={classes.section__title}
              >
                {qa.section}
              </Typography>

              {qa.FAQs.map((faq) => {
                return (
                  <Accordion key={`${faq.id}`} square>
                    <AccordionSummary
                      onClick={expandHandler(faq.id)}
                      expandIcon={
                        expandedState[faq.id] ? (
                          <RemoveCircleIcon
                            className={classes.section__icon}
                            fontSize="large"
                          />
                        ) : (
                          <AddCircleIcon
                            className={classes.section__icon}
                            fontSize="large"
                          />
                        )
                      }
                    >
                      <Typography>
                        <b>{faq.Q}</b>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails key={Math.random()}>
                      {parse(faq.A, {
                        replace: (domNode) => {
                          if (domNode.name === 'p') {
                            return (
                              <Typography paragraph>
                                {domToReact(domNode.children)}
                              </Typography>
                            )
                          }
                        },
                      })}
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </Box>
          )
        })}
      </Box>
    </SectionContainer>
  )
}

export default FAQ
