import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import InputField from '../../InputField'
import Button from '../../Button'
import CheckBox from '../../CheckBox'

const useStyles = makeStyles(() =>
  createStyles({
    registerTitle: {
      paddingBottom: '0 !important',
      '& p': {
        fontSize: 48,
        color: '#545454',
        marginBottom: 0,
        marginTop: 20,
        textAlign: 'center',
      },
    },
    registerSubTitle: {
      fontSize: 18,
      color: '#545454',
      marginLeft: 20,
      marginBottom: 20,
      textAlign: 'center',
      '@media (max-width: 768px)': {
        marginLeft: 55,
      },
    },
    gridContainer: {
      marginBottom: 30,
      marginTop: 30,
    },
    w100: {
      width: '100%',
    },
    link: {
      '& a': {
        marginTop: 17,
        marginLeft: 18,
      },
      cursor: 'pointer',
      fontSize: 18,
      marginTop: 13,
    },
    inputGrid: {
      '& .MuiTextField-root,.MuiFormControlLabel-root': {
        '@media (max-width: 768px)': {
          width: '80%',
        },
        width: '80%',
        margin: '0 auto',
      },
      '& .MuiGrid-item': {
        margin: '0 auto',
        display: 'flex',
      },
    },
    alreadyGrid: {
      margin: '0 auto',
      display: 'flex',
      '& p': {
        textAlign: 'left',
      },
      height: 90,
    },
    termLink: {
      padding: '0 !important',
      display: 'inline-flex',
      '& > label': {
        marginRight: '5px !important',
      },
      '& .MuiFormControlLabel-root': {
        width: 'auto',
        marginLeft: '10%',
        '@media (max-width: 768px)': {
          marginLeft: '10%',
        },
        marginRight: 0,
      },
      '& a': {
        marginTop: 10,
        fontSize: 16,
      },
    },
    buttonGrid: {
      margin: '0 auto',
      '& .MuiButton-root': {
        margin: '0 auto',
        display: 'flex',
        '@media (max-width: 768px)': {
          width: '100%',
        },
        width: '85%',
      },
    },
  })
)
const Register: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={8} className={classes.gridContainer}>
        <Grid item xs={12} sm={12} className={classes.registerTitle}>
          <p>Register here for download and revision</p>
        </Grid>
        <Grid container spacing={3} className={classes.inputGrid}>
          <Grid item xs={12} sm={6} className={classes.link}>
            <p className={classes.registerSubTitle}>Already have an account?</p>
            <Link to="/login">Login</Link>
          </Grid>
          <Grid item xs={12} sm={7}>
            <InputField type="text" title="First Name" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <InputField type="text" title="Last Name" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <InputField type="text" title="Email" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <InputField type="password" title="Password" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <InputField type="password" title="Repeat Password" />
          </Grid>
          <Grid item xs={12} sm={7} className={classes.termLink}>
            <CheckBox defaultValue="Keep me signed in" Placement="end" />
          </Grid>
          <Grid item xs={12} sm={7} className={classes.termLink}>
            <CheckBox defaultValue="I agree with" Placement="end" />
            <Link to="/terms">Terms of Service</Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7} className={classes.buttonGrid}>
          <Button
            text="Register"
            variant="contained"
            onClick={(): void => history.push('/authenticate')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
