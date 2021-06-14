import React from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import GetStarted from '../../GetStarted'
import AvatarInfo from '../../AvatarInfo'

const useStyles = makeStyles(() =>
  createStyles({
    firstGrid: {
      '& .p_name': {
        color: '#545454 !important',
      },
    },
    section: {
      marginBottom: 20,
    },
    headers: {
      color: '#F7F7F7',
      textAlign: 'center',
    },
    networkHeader: {
      textAlign: 'center',
      color: '#545454',
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
    customP: {
      color: '#545454',
      fontSize: 18,
      textAlign: 'left',
      padding: 15,
    },
    customImg: {
      width: '100% !important',
    },
  })
)

const text1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit neque nec hendrerit tristique. Nam a nunc congue, ornare est vitae, suscipit velit. Duis mauris orci, posuere nec volutpat non, vestibulum ut elit. Nunc at pulvinar magna, at auctor arcu. Suspendisse potenti. Donec consectetur magna at metus mattis sollicitudin. Curabitur facilisis elit ac neque volutpat iaculis. Nunc sodales a lectus sit amet ullamcorper. Suspendisse finibus blandit elit in congue. Pellentesque malesuada pharetra sapien, placerat commodo massa venenatis vel. Aliquam semper nec nibh vitae pulvinar.\n' +
  '\n' +
  'Proin at lectus quis elit venenatis vehicula vitae at nisl. Integer in tincidunt diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean pretium libero a pretium placerat. Mauris pharetra ante vitae velit rhoncus, in rhoncus dolor blandit.'
const text2 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit neque nec hendrerit tristique. Nam a nunc congue, ornare est vitae, suscipit velit. Duis mauris orci, posuere nec volutpat non, vestibulum ut elit. Nunc at pulvinar magna, at auctor arcu. Suspendisse potenti. Donec consectetur magna at metus mattis sollicitudin. Curabitur facilisis elit ac neque volutpat iaculis. Nunc sodales a lectus sit amet ullamcorper. Suspendisse finibus blandit elit in congue. Pellentesque malesuada pharetra sapien, placerat commodo massa venenatis vel. Aliquam semper nec nibh vitae pulvinar.\n' +
  '\n' +
  'Proin at lectus quis elit venenatis vehicula vitae at nisl. Integer in tincidunt diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean pretium libero a pretium placerat. Mauris pharetra ante vitae velit rhoncus, in rhoncus dolor blandit.\n' +
  '\n' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit neque nec hendrerit tristique. Nam a nunc congue, ornare est vitae, suscipit velit. Duis mauris orci, posuere nec volutpat non, vestibulum ut elit. Nunc at pulvinar magna, at auctor arcu. Suspendisse potenti. Donec consectetur magna at metus mattis sollicitudin. Curabitur facilisis elit ac neque volutpat iaculis. Nunc sodales a lectus sit amet ullamcorper. Suspendisse finibus blandit elit in congue. Pellentesque malesuada pharetra sapien, placerat commodo massa venenatis vel.\n' +
  '\n' +
  'Our People'

const AboutUs: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <img
                alt="story"
                src="img/story.png"
                className={classes.customImg}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4">Our Story</Typography>
              <p className={classes.customP}>{text1}</p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.customP}>{text2}</p>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={clsx(classes.section, classes.sectionWithBackground)}>
        <Container maxWidth="lg">
          <h2 className={classes.headers}>Our People</h2>
          <Grid container spacing={3} className={classes.firstGrid}>
            <Grid item xs={12} sm={4}>
              <AvatarInfo
                image="img/story-1.png"
                text="Ut interdum lectus ut velit posuere auctor. Nam non ultrices orci. Vestibulum nisl neque, condimentum eget justo vel, sagittis lacinia dolor. Vestibulum sapien lectus, ullamcorper in sem eget, cursus accumsan lacus."
                title="Dr Dave West"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AvatarInfo
                image="img/story-2.png"
                text="Ut interdum lectus ut velit posuere auctor. Nam non ultrices orci. Vestibulum nisl neque, condimentum eget justo vel, sagittis lacinia dolor. Vestibulum sapien lectus, ullamcorper in sem eget, cursus accumsan lacus."
                title="Associate Professor Rob Perrons"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AvatarInfo
                image="img/story-3.png"
                text="Ut interdum lectus ut velit posuere auctor. Nam non ultrices orci. Vestibulum nisl neque, condimentum eget justo vel, sagittis lacinia dolor. Vestibulum sapien lectus, ullamcorper in sem eget, cursus accumsan lacus."
                title="Alejandro Diaz Santos"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <h2 className={classes.networkHeader}>Our Partner Network</h2>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <AvatarInfo
                image="img/story-1.png"
                text="Ut interdum lectus ut velit posuere auctor. Nam non ultrices orci. Vestibulum nisl neque, condimentum eget justo vel, sagittis lacinia dolor. Vestibulum sapien lectus, ullamcorper in sem eget, cursus accumsan lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere felis urna, a congue libero ornare et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis placerat lectus eu semper."
                title="Alejandro Diaz Santos"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AvatarInfo
                image="img/story-2.png"
                text="Ut interdum lectus ut velit posuere auctor. Nam non ultrices orci. Vestibulum nisl neque, condimentum eget justo vel, sagittis lacinia dolor. Vestibulum sapien lectus, ullamcorper in sem eget, cursus accumsan lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere felis urna, a congue libero ornare et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis placerat lectus eu semper."
                title="Alejandro Diaz Santos"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <GetStarted />
    </>
  )
}

export default AboutUs
