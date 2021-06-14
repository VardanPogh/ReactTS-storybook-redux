import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import InputField from '../../InputField'
import Button from '../../Button'
import RadioButton from '../../RadioButton'

import { setEngineer } from '../../../actions/form'

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
      marginTop: 0,
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
    radioGrid: {
      margin: '30px 0',
      '& .MuiFormGroup-root': {
        '@media (min-width: 768px)': {
          width: '30%',
          position: 'relative',
          margin: 'auto',
          paddingLeft: '3%',
        },
      },
    },
    inputMargin: {
      marginBottom: 30,
    },
  })
)
const items = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
  {
    value: 'maybelater',
    label: 'Maybe Later',
  },
]
const Engineer: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = (data: any): void => {
    dispatch(setEngineer(data))
    history.push('/preview_purchase')
  }

  const handleChange = (e: any, name: string): void => {
    setValue(name, e.target.value)
  }
  React.useEffect(() => {
    register('useProfessional')
    register('engineerName')
    register('registrationNumber')
    register('registrationJur')
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={12}>
            <p className={classes.aboutProject_title}>
              Will you use a professional engineer?
            </p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <p className={classes.aboutProject_subTitle}>
              We`ll include the details of the engineer in the approriate place
              (e.g. signed approvals). Or add later if you don`t know now yet.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.radioGrid}>
            <RadioButton
              onChange={(e): void => handleChange(e, 'useProfessional')}
              items={items}
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.inputMargin}>
            <InputField
              onChange={(e): void => handleChange(e, 'engineerName')}
              title="Engineer Name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputField
              onChange={(e): void => handleChange(e, 'registrationNumber')}
              title="Registration Number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputField
              onChange={(e): void => handleChange(e, 'registrationJur')}
              title="Registration Jurisdiction"
            />
          </Grid>

          <Grid item xs={12} sm={2} className={classes.leftGrid}>
            <Button
              text="Previous"
              variant="outlined"
              className={classes.w100}
              onClick={(): void => history.push('/preferences')}
            />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.rightGrid}>
            <Button
              type="submit"
              text="Next"
              variant="contained"
              className={classes.w100}
            />
          </Grid>
        </Grid>
      </Container>
    </form>
  )
}

export default Engineer
