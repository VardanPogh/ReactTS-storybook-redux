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
      marginBottom: 30,
      marginTop: 30,
    },
    w100: {
      width: '100%',
    },
    link: {
      cursor: 'pointer',
      fontSize: 20,
      marginBottom: 20,
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
const Login: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={8} className={classes.gridContainer}>
        <Grid item xs={12} sm={6}>
          <img src="img/login-bg.png" className={classes.w100} alt="login" />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.secondGrid}>
          <InputField type="text" title="Email" />
          <InputField type="password" title="Password" />
          <Grid item xs={12} sm={12} className={classes.link}>
            <LinkMaterialUI>Forgot password?</LinkMaterialUI>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              text="Login"
              variant="contained"
              className={classes.w100}
              onClick={(): void => history.push('/dashboard')}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
