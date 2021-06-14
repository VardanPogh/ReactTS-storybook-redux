import React from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'

import Button from '../Button'

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: 20,
      marginBottom: 70,
      '@media (max-width: 375px)': {
        marginBottom: 0,
      },
    },
    logo: {
      border: 0,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      '& img': {
        width: 200,
      },
    },
    buttonSupport: {
      marginRight: 5,
    },
    buttonRegister: {
      marginRight: 17,
    },
    linkButtons: {
      '@media (max-width: 768px)': {
        marginBottom: 10,
      },
    },
  })
)

interface Props {
  haveButtons?: boolean
  isLoggedIn?: boolean
}

const Header: React.FC<Props> = ({ haveButtons, isLoggedIn }) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs sm={4} md={6} lg={7}>
          <button
            className={classes.logo}
            type="button"
            onClick={(): void => history.push('/')}
          >
            <img src="img/logo.png" alt="logo" />
          </button>
        </Grid>
        {haveButtons && (
          <Grid item xs sm={8} md={6} lg={5}>
            <Button
              className={clsx(classes.linkButtons)}
              onClick={(): void => history.push('/support')}
              text="Get a Demo"
            />
            <Button
              onClick={(): void => history.push('/support')}
              className={clsx(classes.buttonSupport, classes.linkButtons)}
              text="Get support"
            />
            <Button
              onClick={(): void => history.push('/register')}
              className={classes.buttonRegister}
              text="Register"
              variant="outlined"
            />
            <Button
              onClick={(): void => history.push('/login')}
              text="Login"
              variant="contained"
            />
          </Grid>
        )}
        {isLoggedIn && (
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <p>Wendel Costa</p>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default Header
