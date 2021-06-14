import React from 'react'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import Button from '../../Button'
import InputField from '../../InputField'

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      marginBottom: 30,
      marginTop: 30,
    },
    w100: {
      width: '100%',
    },
    secondGrid: {
      marginTop: 60,
      '& .MuiTextField-root': {
        width: '100%',
        margin: '20px 0 ',
      },
    },
  })
)

const SendEmail: React.FC = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={8} className={classes.gridContainer}>
        <Grid item xs={12} sm={6}>
          <img src="img/undraw.png" className={classes.w100} alt="login" />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.secondGrid}>
          <p>
            Sorry, we can&apos;t help you right now but we are working on
            expanding our products so maybe next time we can.
          </p>
          <p>
            Please feel welcome to leave you email and we will send you product
            notices relevant to your use of the battery.
          </p>
          <InputField type="text" title="Enter email address" />
          <Button
            className={classes.w100}
            text="Get Started"
            variant="contained"
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default SendEmail
