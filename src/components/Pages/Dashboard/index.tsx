import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import ProjectTable from '../../ProjectTable'

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      marginBottom: 50,
    },
    headers: {
      textAlign: 'center',
    },
  })
)

const Dashboard: React.FC = () => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <ProjectTable />
      </Container>
    </section>
  )
}

export default Dashboard
