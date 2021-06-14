import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import LinkMaterialUI from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Button from '../../Button'
import RangeSlider from '../../RangeSlider'

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      // marginBottom: 60,
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
  })
)
const Reliability: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [value1, setValue1] = useState([10, 35])
  const [value2, setValue2] = useState([0, 12])
  const [value3, setValue3] = useState([3, 35])
  const [value4, setValue4] = useState([8, 12])
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
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={12}>
          <p className={classes.aboutProject_title}>
            What battery reliability do you need?
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Design Life</p>
          <p className={classes.rangeP2}>Expected life of the battery.</p>
          <RangeSlider value={value1} onChange={onChange1} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Full Cycles per Day</p>
          <p className={classes.rangeP2}>
            Cycles from maximum voltage to minimum voltage per day.
          </p>
          <RangeSlider value={value2} onChange={onChange2} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Half Cycles per Day</p>
          <p className={classes.rangeP2}>
            Cycles of 50% of voltage range per day.
          </p>
          <RangeSlider value={value3} onChange={onChange3} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Criticality</p>
          <p className={classes.rangeP2}>
            Not critical is you have an alternative power source. Critical is
            you will suffer an potentially unrecoverable consequnce.
          </p>
          <RangeSlider value={value4} onChange={onChange4} />
        </Grid>
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
            onClick={(): void => history.push('/performance')}
          />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.rightGrid}>
          <Button
            text="Next"
            variant="contained"
            className={classes.w100}
            onClick={(): void => history.push('/battery_location')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Reliability
