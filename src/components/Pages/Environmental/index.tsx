import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import LinkMaterialUI from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Button from '../../Button'
import RangeSlider from '../../RangeSlider'
import Switch from '../../Switch'

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginBottom: 150,
    },
    gridContainer: {
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
    rangeP2: {
      fontSize: 15,
      height: 60,
    },
    rangeP1: {
      fontSize: 15,
    },
    titleGrid: {
      padding: '15px 50px !important',
    },
  })
)
const Environmental: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [value1, setValue1] = useState([10, 35])
  const [value2, setValue2] = useState([0, 12])
  const [value3, setValue3] = useState([3, 35])
  const [value4, setValue4] = useState([8, 12])
  const [value5, setValue5] = useState([28, 40])
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)

  const onChange1 = (event: any, newValue: number | number[]): void => {
    setValue1(newValue as number[])
  }
  const onChange2 = (event: any, newValue: number | number[]): void => {
    setValue2(newValue as number[])
  }
  const onChange3 = (event: any, newValue: number | number[]): void => {
    setValue3(newValue as number[])
  }
  const onChange4 = (event: any, newValue: number | number[]): void => {
    setValue4(newValue as number[])
  }
  const onChange5 = (event: any, newValue: number | number[]): void => {
    setValue5(newValue as number[])
  }
  const toggleChecked1 = (): void => {
    setChecked1((prev) => !prev)
  }
  const toggleChecked2 = (): void => {
    setChecked2((prev) => !prev)
  }

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={12} className={classes.titleGrid}>
          <p className={classes.aboutProject_title}>
            What are the environmental conditions during operation?
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Temperature</p>
          <p className={classes.rangeP2}>
            The annual minimum and maximum in deg C / deg F.
          </p>
          <RangeSlider value={value1} onChange={onChange1} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Humidity</p>
          <p className={classes.rangeP2}>
            The annual minimum and maximum in %.
          </p>
          <RangeSlider value={value2} onChange={onChange2} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Rainfall</p>
          <p className={classes.rangeP2}>
            The annual maximum rainfaill in millimetres.
          </p>
          <RangeSlider value={value3} onChange={onChange3} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Vibration Amplitude</p>
          <p className={classes.rangeP2}>
            The minimum and maximum amplitude in millimetres?
          </p>
          <RangeSlider value={value4} onChange={onChange4} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Vibration Frequency</p>
          <p className={classes.rangeP2}>
            The minimum and maximum frequency in hertz
          </p>
          <RangeSlider value={value5} onChange={onChange5} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Air Quality</p>
          <p className={classes.rangeP1}>
            The presence of industrial pollution or marine environment.
          </p>
          <Grid item container sm={9} xs={12}>
            <Grid item xs={6} sm={5}>
              <Switch
                labelPlacement="bottom"
                label="Industrial Pollution"
                value="value1"
                checked={checked1}
                onChange={toggleChecked1}
              />
            </Grid>
            <Grid item xs={6} sm={5}>
              <Switch
                labelPlacement="bottom"
                label="Marine Environment"
                value="value2"
                checked={checked2}
                onChange={toggleChecked2}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
          <p className={classes.aboutProject_subTitle}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            You can update later or click `Not Sure Yet` and we will reflect
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
            onClick={(): void => history.push('/battery_location')}
          />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.rightGrid}>
          <Button
            text="Next"
            variant="contained"
            className={classes.w100}
            onClick={(): void => history.push('/priorities')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Environmental
