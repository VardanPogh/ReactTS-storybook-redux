import React from 'react'
import clsx from 'clsx'
import { Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import GetStarted from '../../GetStarted'

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      // marginBottom: 20,
    },
    headers: {
      textAlign: 'center',
    },
    white: {
      color: '#fff',
    },
    blue: {
      color: '#004AAD',
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
      '@media (max-width: 812px)': {
        height: 1200,
      },
      '@media (max-width: 768px)': {
        height: 'auto',
        background: 'none',
        backgroundColor: '#BED9F7',
      },
    },
    list: {
      listStyleType: 'none',
      fontSize: 20,
      color: '#545454',
      marginBottom: 15,
      '& li': {
        marginBottom: 15,
      },
    },
    orderedList: {
      fontSize: 20,
      color: '#545454',
      '& li': {
        marginBottom: 15,
      },
    },
  })
)

const Terms: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <h1 className={classes.headers}>Our terms of service</h1>
        </Container>
      </section>
      <section className={clsx(classes.section, classes.sectionWithBackground)}>
        <Container maxWidth="lg">
          <h2 className={clsx(classes.headers, classes.white)}>
            A simple summary
          </h2>
          <Grid
            direction="row"
            justify="space-evenly"
            alignItems="center"
            container
            spacing={3}
          >
            <div>
              <h2 className={clsx(classes.headers, classes.blue)}>
                Your obligations
              </h2>
              <ul className={classes.list}>
                <li>Provide requirements in 5 minutes</li>
                <li>Delivers in minutes</li>
                <li>Revise in minutes online</li>
                <li>Protects with global PI insurance</li>
                <li>Talk with a helpful and friendly support</li>
                <li>Get world-class experts</li>
                <li>
                  Customised for your risk and &ldquo;fit-for-purpose&ldquo;
                </li>
              </ul>
            </div>

            <div>
              <h2 className={clsx(classes.headers, classes.blue)}>
                Your obligations
              </h2>
              <ul className={classes.list}>
                <li>Provide requirements in 5 minutes</li>
                <li>Delivers in minutes</li>
                <li>Revise in minutes online</li>
                <li>Protects with global PI insurance</li>
                <li>Talk with a helpful and friendly support</li>
                <li>Get world-class experts</li>
                <li>
                  Customised for your risk and &ldquo;fit-for-purpose&ldquo;
                </li>
              </ul>
            </div>
          </Grid>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className={classes.headers}>Terms of service</h2>
          <h2>1. TERMS</h2>
          <ol className={classes.orderedList}>
            <li>
              Albacross Nordic AB (hereinafter “Albacross”, “we”, “us”, or
              “our”), registration no. 556942-7338, having its registered
              address at Kungsgatan 26, 111 35, Stockholm, Sweden provides
              Website Tracking Service and Account Based Marketing Service
              (collectively the “Services” and further defined below),
              accessible by using our website, currently albacross.com (the
              “Website”).
            </li>
            <li>
              These Terms of Service (the “Terms”) set forth the legally binding
              terms and conditions governing any use of the Services (as defined
              above) provided by us. By using the Services, you acknowledge your
              understanding of, and agreement to, these Terms, which also
              incorporate our Privacy Policy and Cookie Policy. Any use of the
              Service is subject to these Terms. We may, from time to time,
              revise these Terms. Your continued use of the Services after the
              posting of any revisions will constitute your agreement to be
              bound by such revisions.
            </li>
            <li>
              Please read these Terms carefully before using the Services. If
              you do not agree to these Terms, you do not have the right to use
              the Services.
            </li>
          </ol>
          <h2>2. DEFINITIONS</h2>
          <ul className={classes.list}>
            <li>
              <span className={classes.blue}>“Website Tracking Service”</span> -
              is a service in which we identify Visitors to the Customer’s
              Property. You will be provided with Reports via e-mail and via an
              online interface in Your user account.
            </li>
            <li>
              <span className={classes.blue}>
                “Account Based Marketing Service”
              </span>{' '}
              - is a service that enables the Customer to display advertising in
              relevant formats (“Ads”) on sites from time to time included in
              Albacross’ network (“Sites”) for exposure to your selected
              Visitors.
            </li>
            <li>
              <span className={classes.blue}>“ATC”</span> - meaning Albacross
              Tracking Code, which is installed on a Property for the purpose of
              collecting the Customer Data, together with any fixes, updates and
              upgrades provided to you.
            </li>
            <li>
              <span className={classes.blue}>“Customer”</span> - meaning you or
              the entity you represent for whom you are accepting these terms.
            </li>
            <li>
              <span className={classes.blue}>“Customer Data”</span> - meaning
              the data you collect, process or store using the Service
              concerning the characteristics and activities of Visitors.
            </li>
            <li>
              <span className={classes.blue}>“GDPR”</span> - meaning the General
              Data Protection Regulation 2016⁄679.
            </li>
            <li>
              <span className={classes.blue}>“Property”</span> - meaning any web
              page, app, or other property under your control that sends data to
              the Services and Software.
            </li>
            <li>
              <span className={classes.blue}>“Report”</span> - meaning the
              resulting analysis either provided to you via e-mail or shown to
              You in your user account.
            </li>
            <li>
              <span className={classes.blue}>“Visitors”</span> - means an access
              from a user which is identified by Albacross as belonging or
              relating to a specific company.
            </li>
          </ul>
          <h2>3. REGISTRATION PROCESS</h2>
          <ol className={classes.orderedList}>
            <li>
              During registration, you will be asked to provide your e-mail
              address and password. Alternatively, you can use certain third
              party services, e.g. Facebook, Google or Linkedin. You will also
              need to provide your full name or company name (as applicable),
              department, role and website (domain name). You are responsible
              for providing accurate and correct registration information and we
              assume no liability for any error, inaccuracy or omission in such
              information or in the service resulting from any information
              provided by you. By becoming a registered user of our Services,
              you will also be prompted to give your consent to our processing
              of your personal data in accordance with our Privacy Policy.
            </li>
            <li>
              If you are physical person, you must be over 18 years of age (or
              such other legal age as may apply in your territory) in order to
              register an account for the services.
            </li>
            <li>
              Upon completing the registration process, you will receive a
              confirmation e-mail containing your chosen information to the
              e-mail address you provided.
            </li>
          </ol>
        </Container>
      </section>
      <GetStarted />
    </>
  )
}

export default Terms
