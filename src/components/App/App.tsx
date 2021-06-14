import React from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Header from '../Header'
import Home from '../Pages/Home'
import BatteryLocation from '../Pages/BatteryLocation'
import BatteryFunctions from '../Pages/BatteryFunctions'
import Authenticate from '../Pages/Authenticate'
import FAQ from '../Pages/Faq'
import BatteryUse from '../Pages/BatteryUse'
import Reliability from '../Pages/Reliability'
import AboutUs from '../Pages/AboutUs'
import Login from '../Pages/Login'
import Environmental from '../Pages/Environmental'
import PreviewPurchase from '../Pages/PreviewPurchase'
import Engineer from '../Pages/Engineer'
import AboutProject from '../Pages/AboutProject'
import Register from '../Pages/Register'
import Preferences from '../Pages/Preferences'
import Performance from '../Pages/Performance'
import Terms from '../Pages/Terms'
import Support from '../Pages/Support'
import SendEmail from '../Pages/SendEmail'
import Priorities from '../Pages/Priorities'
import Dashboard from '../Pages/Dashboard'
import Footer from '../Footer'

import ScrollToTop from '../ScrollToTop'
import theme from '../../styles/theme'

const useStyles = makeStyles(() => ({
  mainWrapper: {
    minHeight: '100%',
    marginBottom: 150,
  },
  container: {
    minHeight: '100%',
    '& .fade-enter': {
      opacity: 0.01,
    },

    '& .fade-enter.fade-enter-active': {
      opacity: 1,
      transition: 'opacity 150ms ease-in',
    },

    '& .fade-exit': {
      opacity: 1,
    },

    '& .fade-exit.fade-exit-active': {
      opacity: 0.01,
      transition: 'opacity 150ms ease-in',
    },
  },
}))
const App: React.FC = () => {
  const classes = useStyles()
  // eslint-disable-next-line
  let location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <main className={classes.mainWrapper}>
        <Header
          haveButtons={location.pathname !== '/dashboard'}
          isLoggedIn={location.pathname === '/dashboard'}
        />
        <div className={classes.container}>
          <TransitionGroup>
            <CSSTransition classNames="fade" unmountOnExit timeout={300}>
              <section>
                <Switch location={location}>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/faq">
                    <FAQ />
                  </Route>
                  <Route path="/battery_functions">
                    <BatteryFunctions />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/battery_use">
                    <BatteryUse />
                  </Route>
                  <Route path="/environmental">
                    <Environmental />
                  </Route>
                  <Route path="/preview_purchase">
                    <PreviewPurchase />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/preferences">
                    <Preferences />
                  </Route>
                  <Route path="/performance">
                    <Performance />
                  </Route>
                  <Route path="/terms">
                    <Terms />
                  </Route>
                  <Route path="/reliability">
                    <Reliability />
                  </Route>
                  <Route path="/support">
                    <Support />
                  </Route>
                  <Route path="/battery_location">
                    <BatteryLocation />
                  </Route>
                  <Route path="/about_us">
                    <AboutUs />
                  </Route>
                  <Route path="/about_project">
                    <AboutProject />
                  </Route>
                  <Route path="/engineer">
                    <Engineer />
                  </Route>
                  <Route path="/send_email">
                    <SendEmail />
                  </Route>
                  <Route path="/priorities">
                    <Priorities />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/authenticate">
                    <Authenticate />
                  </Route>
                  <Redirect exact from="/home" to="/" />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
