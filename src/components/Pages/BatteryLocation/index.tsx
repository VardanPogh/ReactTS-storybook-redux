import React from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import LinkMaterialUI from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import InputField from '../../InputField'
import Button from '../../Button'

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
  })
)
const BatteryLocation: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={12}>
          <p className={classes.aboutProject_title}>
            Where will your battery be installed?
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField title="Country" type="text " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField title="State or Province" type="text " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField title="City (if applicable)" type="text " />
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
            onClick={(): void => history.push('/reliability')}
          />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.rightGrid}>
          <Button
            text="Next"
            variant="contained"
            className={classes.w100}
            onClick={(): void => history.push('/environmental')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BatteryLocation
