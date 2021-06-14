import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import LinkMaterialUI from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import InputField from '../../InputField'
import Button from '../../Button'

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      marginBottom: 30,
      marginTop: 30,
    },
    w100: {
      width: '100%',
    },
    link: {
      cursor: 'pointer',
      fontSize: 20,
      marginBottom: 10,
    },
    secondGrid: {
      marginTop: 0,
      '& .MuiTextField-root': {
        width: '100%',
        margin: '20px 0 ',
      },
    },
    authenticate_title: {
      color: '#545454',
      fontSize: 24,
      marginBottom: 24,
      textAlign: 'left',
    },
    authenticate_subTitle: {
      color: '#545454',
      fontSize: 18,
      marginBottom: 20,
      maxWidth: 430,
      textAlign: 'left',
    },
  })
)
const Authenticate: React.FC = () => {
  const [clicked, setClicked] = useState(false)

  const sendCode = (): void => {
    setClicked(true)
  }

  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={8} className={classes.gridContainer}>
        <Grid item xs={12} sm={6}>
          <img
            src="img/authenticate.png"
            alt="leftImage"
            className={classes.w100}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.secondGrid}>
          <p className={classes.authenticate_title}>
            Authenticate Your Account
          </p>
          <p className={classes.authenticate_subTitle}>
            A verification code will be sent to your mobile phone. This code
            will be valid for 15 minutes.
          </p>

          {!clicked && (
            <>
              <InputField type="number" title="Phone number" />
              <Grid item xs={12} sm={12}>
                <Button
                  text="Send"
                  variant="contained"
                  className={classes.w100}
                  onClick={sendCode}
                />
              </Grid>
            </>
          )}
          {clicked && (
            <>
              <InputField type="number" title="Enter Code" />
              <Grid item xs={12} sm={12} className={classes.link}>
                <LinkMaterialUI>Send code again</LinkMaterialUI>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  text="Verify"
                  variant="contained"
                  className={classes.w100}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Authenticate
