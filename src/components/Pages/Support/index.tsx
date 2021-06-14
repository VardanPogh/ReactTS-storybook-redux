import React from 'react'
import { Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import MediaCard from '../../Card'
import GetStarted from '../../GetStarted'

const useStyles = makeStyles(() =>
  createStyles({
    supportTitle: {
      fontSize: 48,
      color: '#545454',
      marginBottom: 16,
      marginTop: 50,
      textAlign: 'center',
    },
    marginB: {
      marginBottom: 50,
    },
  })
)
const Support: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <p className={classes.supportTitle}>Support</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MediaCard
              title="Get a Demo"
              variant="withButton"
              buttonTitle="Get a Demo"
              subTitle="Schedule a 15 minute phone or videoconference for a demonstration of the the process and product."
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.marginB}>
            <MediaCard
              title="Get a Demo"
              variant="withButton"
              buttonTitle="Get Submit"
              subTitle="Schedule a 15 minutes phone or videoconference for user support."
            />
          </Grid>
        </Grid>
      </Container>
      <GetStarted />
    </>
  )
}

export default Support
