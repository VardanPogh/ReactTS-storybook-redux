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
  })
)
const Preferences: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [value1, setValue1] = useState([10, 35])
  const [value2, setValue2] = useState([0, 12])
  const [value3, setValue3] = useState([3, 35])
  const [value4, setValue4] = useState([8, 12])
  const [value5, setValue5] = useState([28, 40])
  const [value6, setValue6] = useState([20, 30])
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
  const onChange6 = (event: any, newValue: number | number[]): void => {
    setValue6(newValue as number[])
  }
  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={12}>
          <p className={classes.aboutProject_title}>
            What are your preferences after we deliver?
          </p>
        </Grid>
        <Grid item xs={12} sm={12}>
          <p className={classes.aboutProject_subTitle}>
            Tell us the additional support you need from BatNav to make your
            battery purchase faster and easier.
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Support during Procurement</p>
          <p className={classes.rangeP2}>
            Such as market analysis, evaluate suppliers, negotiate deviations.
          </p>
          <RangeSlider value={value1} onChange={onChange1} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Support for Audits or Inspection</p>
          <p className={classes.rangeP2}>
            Got a really critical project? This might be for you.
          </p>
          <RangeSlider value={value2} onChange={onChange2} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Support for Battery Testing</p>
          <p className={classes.rangeP2}>
            Highly recommended. Get to know your cells. And you`ll get a better
            outcome.
          </p>
          <RangeSlider value={value3} onChange={onChange3} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Support during Commissioning</p>
          <p className={classes.rangeP2}>
            Things don`t always go to plan. Who`s got your back?
          </p>
          <RangeSlider value={value4} onChange={onChange4} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Support during Operation</p>
          <p className={classes.rangeP2}>
            Get the most out of your battery, and your warranty
          </p>
          <RangeSlider value={value5} onChange={onChange5} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.rangeP1}>Support during Disposal</p>
          <p className={classes.rangeP2}>
            Batteries don`t last forever. And what`s inside is precious.
            Literally.
          </p>
          <RangeSlider value={value6} onChange={onChange6} />
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
            onClick={(): void => history.push('/priorities')}
          />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.rightGrid}>
          <Button
            text="Next"
            variant="contained"
            className={classes.w100}
            onClick={(): void => history.push('/engineer')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Preferences
