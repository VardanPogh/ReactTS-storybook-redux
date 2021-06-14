import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Accordion from '../../Accordion'
import accordionItems from './items'
import GetStarted from '../../GetStarted'

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      marginBottom: 20,
    },
    headers: {
      textAlign: 'center',
    },
  })
)

const FAQ: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <h2 className={classes.headers}>FAQ</h2>
          <Accordion items={accordionItems} />
        </Container>
      </section>
      <GetStarted />
    </>
  )
}

export default FAQ
