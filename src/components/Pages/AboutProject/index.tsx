import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import InputField from '../../InputField'
import Button from '../../Button'
import DropDown from '../../DropDown'

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      marginBottom: 60,
      marginTop: 30,
      '& .MuiFormControl-root': {
        width: '100%',
      },
    },
    w100: {
      width: '100%',
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

    aboutProject_title: {
      fontSize: 48,
      color: '#545454',
      marginBottom: 0,
      marginTop: 30,
      textAlign: 'center',
      paddingBottom: 0,
    },
    aboutProject_subTitle: {
      fontSize: 18,
      color: '#545454',
      textAlign: 'center',
    },
    leftGrid: {
      margin: 'auto',
      marginRight: 0,
    },
    rightGrid: {
      margin: 'auto',
      marginLeft: 0,
    },
    selectGrid: {
      paddingTop: '3px !important',
      paddingLeft: '4px !important',
      '& .MuiFormControl-root': {
        width: '99%',
      },
    },
    selectGrid2: {
      '@media (min-width: 600px)': {
        '& .MuiFormControl-root': {
          width: '50%',
          left: '25%',
        },
      },
      paddingLeft: '4px !important',
      paddingTop: '0 !important',
    },
  })
)
const AboutProject: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [concept, setConcept] = useState('1')
  const [engineer, setEngineer] = useState('1')
  const ConceptItem = [
    { value: '1', label: 'Concept' },
    { value: '2', label: 'Design' },
    { value: '3', label: 'Construction' },
    { value: '4', label: 'Commissioning' },
    { value: '5', label: 'Operation' },
  ]
  const EngineerItems = [
    { value: '1', label: 'Engineer' },
    { value: '2', label: 'Procurement Professional' },
    { value: '3', label: 'Engineering Manager' },
    { value: '4', label: 'Procurement Manager' },
    { value: '5', label: 'Project Manager' },
    { value: '6', label: 'General Manager' },
    { value: '7', label: 'Operations Manager' },
    { value: '8', label: 'Executive Manager' },
    { value: '9', label: 'Director' },
  ]

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ): void => {
    switch (type) {
      case 'concept':
        setConcept(e.target.value)
        break
      case 'engineer':
        setEngineer(e.target.value)
        break
      default:
        break
    }
  }
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={12}>
          <p className={classes.aboutProject_title}>
            Tell us more about your project.
          </p>
        </Grid>
        <Grid item xs={12} sm={12}>
          <p className={classes.aboutProject_subTitle}>
            We`ll create your product and ensure the content include the project
            name and phase.
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField title="Project Name" type="text" />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.selectGrid}>
          <DropDown
            id="Concept"
            value={concept}
            label="Concept"
            items={ConceptItem}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              onChange(e, 'concept')
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField title="Your Company" type="text " />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField title="Your Name" type="text " />
        </Grid>
        <Grid item xs={12} sm={12} className={classes.selectGrid2}>
          <DropDown
            id="Engineer"
            value={engineer}
            label="Profession"
            items={EngineerItems}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              onChange(e, 'engineer')
            }
          />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.leftGrid}>
          <Button
            text="Previous"
            variant="outlined"
            className={classes.w100}
            onClick={(): void => history.push('/battery_use')}
          />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.rightGrid}>
          <Button
            text="Next"
            variant="contained"
            className={classes.w100}
            onClick={(): void => history.push('/battery_functions')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutProject
