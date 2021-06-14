import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import LinkMaterialUI from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
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
  })
)
const BatteryFunctions: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [primary, setPrimary] = useState('1')
  const [secondary, setSecondary] = useState('1')
  const [other, setOther] = useState('1')
  const PrimaryItem = [
    { value: '1', label: 'PrimaryFunctions' },
    { value: '2', label: 'PrimaryFunctions' },
    { value: '3', label: 'PrimaryFunctions' },
    { value: '4', label: 'PrimaryFunctions' },
  ]
  const SecondaryItems = [
    { value: '1', label: 'SecondaryFunctions' },
    { value: '2', label: 'SecondaryFunctions' },
    { value: '3', label: 'SecondaryFunctions' },
    { value: '4', label: 'SecondaryFunctions' },
  ]
  const OtherItems = [
    { value: '1', label: 'OtherFunctions' },
    { value: '2', label: 'OtherFunctions' },
    { value: '3', label: 'OtherFunctions' },
    { value: '4', label: 'OtherFunctions' },
  ]
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ): void => {
    switch (type) {
      case 'primary':
        setPrimary(e.target.value)
        break
      case 'secondary':
        setSecondary(e.target.value)
        break
      case 'other':
        setOther(e.target.value)
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
            What are the functions of your battery?
          </p>
        </Grid>
        <Grid item xs={12} sm={12}>
          <p className={classes.aboutProject_subTitle}>
            Functions include time-shift energy storage, frequency control
            ancillary services (FCAS), emergency backup power, arbitrage, and
            peak shaving.
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DropDown
            id="PrimaryFunctions"
            value={primary}
            label="PrimaryFunctions"
            items={PrimaryItem}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              onChange(e, 'primary')
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DropDown
            id="SecondaryFunctions"
            label="SecondaryFunctions"
            value={secondary}
            items={SecondaryItems}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              onChange(e, 'secondary')
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DropDown
            id="OtherFuntions"
            label="OtherFuntions"
            value={other}
            items={OtherItems}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              onChange(e, 'other')
            }
          />
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
        <Grid item xs={false} sm={4} />
        <Grid item xs={12} sm={2}>
          <Button
            text="Previous"
            variant="outlined"
            className={classes.w100}
            onClick={(): void => history.push('/about_project')}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            text="Next"
            variant="contained"
            className={classes.w100}
            onClick={(): void => history.push('/performance')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BatteryFunctions
