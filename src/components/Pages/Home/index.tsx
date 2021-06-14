import React from 'react'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import LinkMaterialUI from '@material-ui/core/Link'

import Button from '../../Button'
import InputField from '../../InputField'
import Video from '../../Video'
import IconImg from '../../IconImg'
import Card from '../../Card'
import GetStarted from '../../GetStarted'

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      marginBottom: 20,
    },
    headers: {
      textAlign: 'center',
    },
    link: {
      cursor: 'pointer',
    },
    sectionWithBackground: {
      backgroundImage: 'url(img/bg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: 1200,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 30,
      '@media (max-width: 1024px)': {
        height: 900,
      },
      '@media (max-width: 768px)': {
        height: 'auto',
        background: 'none',
        backgroundColor: '#BED9F7',
      },
    },

    iconDesc: {
      '& img': {
        width: '50%',
      },
    },
  })
)

const Home: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <h1>Buy Big Batteries Better</h1>
              <p>
                BatNav is your digital expert that guides you through buying big
                batteries. Increase competition. Decrease cost. Manage risk. Get
                your project going.
              </p>
              <InputField type="text" title="Enter email address" />
              <Button
                text="Get Started"
                variant="contained"
                onClick={(): void => history.push('/battery_use')}
              />
              <p>
                No obligation. Preview before purchase. Money back guarantee.
                Just 5 min.
              </p>
              <LinkMaterialUI
                className={classes.link}
                onClick={(): void => history.push('/battery_use')}
              >
                Or Get Started without an email address here.
              </LinkMaterialUI>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Video
                url="/videos/BatNavExplainer.mp4"
                controls
                width="200"
                height="200"
                playsinline
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={clsx(classes.section, classes.sectionWithBackground)}>
        <Container maxWidth="lg">
          <h2>
            <span style={{ color: '#fff' }}>What are</span>{' '}
            {/* eslint-disable-next-line */}
            <span style={{ color: '#014bad' }}>"Big Batteries?"</span>
          </h2>
          <p>
            Lithium-ion batteries contain thousands and even hundreds of
            thousands of lithium-ion cells. Whether centralised like a
            grid-scale energy storage, or distributed across your assets like a
            fleet of electric vehicles or mining trucks, the combined energy and
            power is a big battery.
          </p>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <IconImg
                className={classes.iconDesc}
                image="img/utility.svg"
                title="Utility Operators"
                text="Energy generators, transmission and distribution"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <IconImg
                className={classes.iconDesc}
                image="img/remote.svg"
                title="Remote Operators"
                text="Mining, oil & gas, community microgrids, remote facilities"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <IconImg
                className={classes.iconDesc}
                image="img/fleet.svg"
                title="Fleet Operators"
                text="EV fleets contain hundreds of thousands of batteries"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <IconImg
                className={classes.iconDesc}
                image="img/integration.svg"
                title="Integrators"
                text="Manufacturers who use cells in their products for energy storage"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <h2 className={classes.headers}>How BatNav works...</h2>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <IconImg
                className={classes.iconDesc}
                image="img/work-1.png"
                text="Answer simple questions"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <IconImg
                className={classes.iconDesc}
                image="img/work-2.png"
                text="Preview engineering deliverables"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <IconImg
                className={classes.iconDesc}
                image="img/work-3.png"
                text="Purchase once Revise for free, forever"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <h2 className={classes.headers}>
            Reliable. Secure. Customised. Fast.
          </h2>
          <Grid container spacing={3}>
            <Grid item xs>
              <Card
                title="World-class expertise"
                subTitle="Qualified engineers, scientists and PhDs with hands-on experience"
                variant="withImage"
                image="img/best.png"
              />
            </Grid>
            <Grid item xs>
              <Card
                title="For your risk profile"
                subTitle="Customised advice to balance cost and risk for your project"
                variant="withImage"
                image="img/law.png"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Card
                title="Confidentiality Guarantee"
                subTitle="Latest cyber security and privacy systems"
                variant="withImage"
                image="img/lock.png"
              />
            </Grid>
            <Grid item xs>
              <Card
                title="Delivered Now"
                subTitle="Cloud-based, available 24/7, review and revise anytime"
                variant="withImage"
                image="img/clock.png"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs>
              <img src="img/air.png" alt="" />
            </Grid>
            <Grid item xs>
              <h2 style={{ color: '#014bad' }}>
                Want to see BatNav in action?
              </h2>
              <p>Get a cost-free and risk-free demonstration over the phone.</p>
              <Button
                text="Get Demo"
                variant="contained"
                onClick={(): void => history.push('/support')}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <GetStarted />
    </>
  )
}

export default Home
