import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import DUMMY_QA from '../../data/FAQs,js'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.secondary,
    padding: 16,
  },
  title: {
    color: theme.palette.tertiary.dark,
    marginTop: '4rem',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
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
      padding: '0 0.8rem 0 0.8rem',
      margin: 0,
    },
    '& .MuiAccordionDetails-root': {
      padding: '0 1.8rem 0 1.8rem',
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
  },
  section__icon: {
    color: theme.palette.primary.main,
  },
}))

const FAQ = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
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
            <Typography variant="h6" className={classes.section__title}>
              {qa.section}
            </Typography>
            {qa.FAQs.map((faq) => {
              return (
                <Accordion
                  key={`${faq.id}`}
                  square
                  expanded={expanded === `${faq.id}`}
                  onChange={handleChange(`${faq.id}`)}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded == `${faq.id}` ? (
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
                  <AccordionDetails>
                    {faq.A.split('\n').map((para, idx) => {
                      const strToBold = 'nusfintech.ops@gmail.com'
                      // Split string by strToBold
                      const textArray = para.split(strToBold)
                      return (
                        <Typography paragraph key={`${idx}`}>
                          {idx === 0 && <strong> Answer: </strong>}
                          {/* textArray.length === 2 if strToBold exists else 1. */}
                          {textArray.map((item, idx) => {
                            return (
                              <>
                                {item}
                                {idx !== textArray.length - 1 && (
                                  <b>{strToBold}</b>
                                )}
                              </>
                            )
                          })}
                        </Typography>
                      )
                    })}
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </Box>
        )
      })}
    </Box>
  )
}

export default FAQ
