import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(() =>
  createStyles({
    accordion: {
      backgroundColor: '#FAFAFA',
      '&:hover, .Mui-expanded': {
        backgroundColor: '#F2F6FA',
      },
    },
    accordionDetails: {
      backgroundColor: '#F2F6FA',
    },
    heading: {
      color: '#014bad',
      fontSize: 24,
      fontWeight: 500,
    },
  })
)

interface itemsElements {
  title: string
  content: string
}

interface Props {
  items: Array<itemsElements>
}

const AccordionStyled: React.FC<Props> = ({ items }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<any>,
    isExpanded: boolean
  ): void => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      {items.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className={classes.accordion}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography className={classes.heading}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}

export default AccordionStyled
