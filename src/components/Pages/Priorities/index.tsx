import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import LinkMaterialUI from '@material-ui/core/Link'

import DragAndDrop from '../../DragAndDrop'
import Button from '../../Button'

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      marginBottom: 20,
    },
    headers: {
      marginBottom: 10,
      textAlign: 'center',
    },
    intro: {
      marginBottom: 30,
      textAlign: 'center',
    },
    gridContainer: {
      marginBottom: 60,
      marginTop: 30,
      marginLeft: 20,
      '& .MuiFormControl-root': {
        width: '100%',
      },
      '@media (max-width: 375px)': {
        marginLeft: 0,
      },
    },
    aboutProject_subTitle: {
      fontSize: 18,
      color: '#545454',
      textAlign: 'center',
    },
    link: {
      cursor: 'pointer',
      fontSize: 20,
      marginTop: 17,
      '@media (max-width: 480px)': {
        margin: 0,
        textAlign: 'center',
      },
    },
    leftGrid: {
      margin: 'auto',
      marginRight: 0,
    },
    w100: {
      width: '100%',
    },
    rightGrid: {
      margin: 'auto',
      marginLeft: 0,
    },
  })
)

const List = [
  {
    id: 'box-0',
    content: `Maximise Performance`,
  },
  {
    id: 'box-1',
    content: `Minimise Life Cycle Cost`,
  },
  {
    id: 'box-2',
    content: `Minimise Quality Risk`,
  },
]

const Priorities: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [state, setState] = useState({ boxes: List })
  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <h2 className={classes.headers}>What are the project priorities?</h2>
        <p className={classes.intro}>
          Drag and drop boxes in order of priority.
        </p>
        <DragAndDrop values={state} setValues={setState} />
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={8}>
            <p className={classes.aboutProject_subTitle}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              You can update later or click 'Not Sure Yet' and we will reflect
              that in your product.
            </p>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.link}>
            <LinkMaterialUI>Not Sure Yet</LinkMaterialUI>
          </Grid>
          <Grid item xs={12} sm={2} className={classes.leftGrid}>
            <Button
              text="Previous"
              variant="outlined"
              className={classes.w100}
              onClick={(): void => history.push('/environmental')}
            />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.rightGrid}>
            <Button
              text="Next"
              variant="contained"
              className={classes.w100}
              onClick={(): void => history.push('/preferences')}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Priorities
