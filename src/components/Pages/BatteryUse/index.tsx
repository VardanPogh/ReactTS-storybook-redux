import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { setBatteryUseAction } from '../../../actions/form'
import Button from '../../Button'
import ToggleGroup from '../../ToggleButtonGroup'

const useStyles = makeStyles(() =>
  createStyles({
    aboutProject_title: {
      fontSize: 48,
      color: '#545454',
      marginBottom: 20,
      marginTop: 60,
      textAlign: 'center',
      paddingBottom: 0,
    },
    mainGrid: {
      '& .MuiToggleButton-label': {
        justifyContent: 'end',
        paddingLeft: 15,
      },
      '& .MuiGrid-item': {
        minWidth: '50%',
        '&:last-child': {
          '& .MuiToggleButton-root': {
            '@media (min-width: 768px)': {
              width: '50%',
            },
          },
          width: '90%',
        },
      },
      '& .MuiToggleButton-root': {
        width: '100%',
        height: 125,
      },
    },
    buttonGrid: {
      '& button': {
        left: '46%',
        marginBottom: 30,
      },
    },
  })
)

const items = [
  {
    value: 'check',
    img: 'img/blue-5.svg',
    description: 'Utility-Scales Energy Storage or Ancillary Services',
  },
  {
    value: 'check1',
    img: 'img/blue-3.svg',
    description:
      'Mining, Oil & Gas, Remote Microgrids, Industrial, or Facilities',
  },
  {
    value: 'check2',
    img: 'img/blue-2.svg',
    description: 'Fleets of Electric Vehicles',
  },
  {
    value: 'check3',
    img: 'img/blue-1.svg',
    description: 'Integration into Manufactured Products',
  },
  {
    value: 'check4',
    img: 'img/blue-4.svg',
    description: 'Domestic or Home',
  },
]
const BatteryUse: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const { register, handleSubmit, setValue } = useForm()

  const handleChange = (name: string, value: string): void => {
    setValue(name, value)
  }

  React.useEffect(() => {
    register('toggleValue')
  }, [register])

  const onSubmit = (data: any): void => {
    dispatch(setBatteryUseAction(data))
    history.push('/about_project')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <p className={classes.aboutProject_title}>
              How will you use the battery?
            </p>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.mainGrid}>
            <ToggleGroup
              items={items}
              onChange={(value): void => handleChange('toggleValue', value)}
            />
          </Grid>
          <Grid item sm={12} xs={12} className={classes.buttonGrid}>
            <Button
              text="Next"
              variant="contained"
              onClick={(): void => history.push('/about_project')}
            />
          </Grid>
        </Grid>
      </Container>
    </form>
  )
}

export default BatteryUse
