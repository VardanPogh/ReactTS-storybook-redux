import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import clsx from 'clsx'
import LinkMaterialUI from '@material-ui/core/Link'
import Button from '../Button'
import InputField from '../InputField'

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      marginBottom: 20,
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
    getStarted: {
      textAlign: 'center',
      '& h2': {
        color: '#fff',
      },
    },
    link: {
      cursor: 'pointer',
    },
  })
)

const GetStarted: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <section
      className={clsx(
        classes.section,
        classes.sectionWithBackground,
        classes.getStarted
      )}
    >
      <Container maxWidth="lg">
        <h2>Get Started</h2>
        <p>
          No obligation. Preview before purchase. Money back guarantee. Just 5
          min.
        </p>
        <InputField type="text" title="Enter email address" />
        <Button
          text="Get Started"
          variant="contained"
          onClick={(): void => history.push('/battery_use')}
        />
        <div style={{ margin: '20px 0' }}>
          <LinkMaterialUI
            className={classes.link}
            onClick={(): void => history.push('/battery_use')}
          >
            Or Get Started without an email address here.
          </LinkMaterialUI>
        </div>
      </Container>
    </section>
  )
}

export default GetStarted
