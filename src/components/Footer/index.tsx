import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Button from '../Button'

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      // height: 150,
    },
    logo: {
      width: 200,
    },
    intro: {
      maxWidth: 250,
    },
    links: {
      display: 'block',
      marginBottom: 20,
      textDecoration: 'none',
      fontFamily: 'Poppins, sans-serif',
    },
    footerText: {
      textAlign: 'center',
      backgroundColor: '#014bad',
      color: '#fff',
      padding: 10,
      margin: 0,
    },
  })
)

const Footer: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm>
            <img className={classes.logo} src="img/logo.png" alt="logo" />
          </Grid>

          <Grid item xs={4} sm>
            <Link className={classes.links} to="/faq">
              FAQs
            </Link>
            <Link className={classes.links} to="/about_us">
              About
            </Link>
          </Grid>
          <Grid item xs={4} sm>
            <Link className={classes.links} to="/support">
              Support
            </Link>
            <Link className={classes.links} to="/terms">
              Terms of service
            </Link>
          </Grid>
          <Grid item xs={4} sm>
            <Button
              text="Get Support"
              variant="contained"
              onClick={(): void => history.push('/support')}
            />
          </Grid>
        </Grid>
      </Container>
      <p className={classes.footerText}>
        Copyright © BatNav Pty Ltd. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
