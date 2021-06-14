import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Button from '../../Button'
import InputField from '../../InputField'
import Video from '../../Video'
import IconImg from '../../IconImg'
import TickList from '../../TickList'
import CheckBox from '../../CheckBox'

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      marginBottom: 100,
    },
    marginBtm: {
      marginBottom: 100,
    },
    headers: {
      textAlign: 'center',
    },
    subHeader: {
      fontSize: 18,
      color: '#545454',
      marginBottom: 56,
      textAlign: 'center',
    },
    link: {
      cursor: 'pointer',
    },
    video: {
      margin: '50px auto 100px',
    },

    iconDesc: {
      '& img': {
        width: '40%',
      },
    },
    inputsGrid: {
      '& .MuiTextField-root': {
        width: '100%',
      },
    },
    carouselGrid: {
      marginBottom: 50,
      padding: '30px !important',
    },
    slideshowContainer: {
      '& img': {
        width: 800,
        height: 700,
        objectFit: 'fill',
      },
      '& .control-next.control-arrow:before': {
        borderLeft: '8px solid #161aac !important',
      },
      '& .control-prev.control-arrow:before': {
        borderRight: '8px solid #161aac !important',
      },
      '& .carousel-slider .control-arrow': {
        background: '#F7F7F7 0% 0% no-repeat padding-box !important',
        opacity: '1 !important',
      },
      '& .carousel.carousel-slider .control-arrow': {
        top: '45% !important',
        height: '6% !important',
        width: '3% !important',
        '@media (max-width: 768px)': {
          width: '13% !important',
        },
      },
    },
    terms: {
      '& > label': {
        marginRight: 5,
      },
    },
  })
)
const List1 = [
  {
    id: 'label-1',
    label: 'Provide requirements over long meetings',
  },
  {
    id: 'label-2',
    label: 'Delivers in weeks or months',
  },
  {
    id: 'label-3',
    label: 'Revision in days or weeks',
  },
  {
    id: 'label-4',
    label: 'Protects with local PI insurance',
  },
  {
    id: 'label-5',
    label: 'Talk with an engineer',
  },
  {
    id: 'label-6',
    label: 'Get local experts',
  },
  {
    id: 'label-7',
    label: 'One size fits all and "gold-plated"',
  },
]
const List2 = [
  {
    id: 'label2-1',
    label: 'Provide requirements in 5 minutes',
  },
  {
    id: 'label2-2',
    label: 'Delivers in minutes',
  },
  {
    id: 'label2-3',
    label: 'Revise in minutes online',
  },
  {
    id: 'label2-4',
    label: 'Protects with global PI insurance',
  },
  {
    id: 'label2-5',
    label: 'Talk with a helpful and friendly support',
  },
  {
    id: 'label2-6',
    label: 'Get world-class experts',
  },
  {
    id: 'label2-7',
    label: 'Customised for your risk and "fit-for-purpose"',
  },
]

const PreviewPurchase: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <h2 className={classes.headers}>Why Use BatNav ?</h2>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TickList items={List1} title="Consultants" img="img/close.png" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TickList items={List2} title="Consultants" img="img/check.png" />
            </Grid>
            <Grid className={classes.video} item xs={12} sm={7}>
              <h2 className={classes.headers}>
                Easy Revision in a Secure User Space
              </h2>
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
      <section className={classes.section}>
        <Container maxWidth="lg">
          <h2 className={classes.headers}>We&apos;ve Got You Protected</h2>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <IconImg
                className={classes.iconDesc}
                image="img/purchase-1.png"
                title="Ongoing Support"
                text="BatNav provides phone support, easy revision of products and worldwide network of Partners"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <IconImg
                className={classes.iconDesc}
                image="img/purchase-2.png"
                title="Protected by PI Insurance"
                text="BatNav professionals include expert scientists and registerered engineers"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <IconImg
                className={classes.iconDesc}
                image="img/purchase-3.png"
                title="Money Back Guarantee"
                text="If you aren't 100 % satsified with our product and delivery, we'll refund your purchase"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <Grid item xs={12} sm={12}>
            <h2 className={classes.headers}>Here`s your product.</h2>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.carouselGrid}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              className={classes.slideshowContainer}
            >
              <div>
                <img src="img/label.png" alt="label" />
              </div>
              <div>
                <img src="img/energy-storage.png" alt="energy" />
              </div>
              <div>
                <img src="img/energy-storage.png" alt="energy" />
              </div>
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={12}>
            <h2 className={classes.headers}>Here`s your link for download.</h2>
          </Grid>
          <Grid item xs={12} sm={12}>
            <h2 className={classes.subHeader}>
              We`ll also send you an email with a link for registration so you
              can your product later.
            </h2>
          </Grid>
          <Grid
            style={{ textAlign: 'center', marginBottom: 150 }}
            item
            xs={12}
            sm={12}
          >
            <Button text="Download Now" variant="contained" />
          </Grid>
          <h2 className={classes.headers}>Here`s our offer.</h2>
          <Grid style={{ marginBottom: 150 }} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TickList items={List2} title="Consultants" img="img/check.png" />
            </Grid>
            <Grid
              container
              spacing={3}
              item
              xs={12}
              sm={6}
              className={classes.inputsGrid}
            >
              <Grid item xs={12} sm={12}>
                <InputField type="text" title="Email" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputField type="text" title="Name" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputField type="number" title="Credit Card Number" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField type="text" title="Expiry date mm/yyyy" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField type="text" title="CCV/CVC code" />
              </Grid>
              <Grid item xs={12} sm={12} className={classes.terms}>
                <CheckBox defaultValue="I agree with" Placement="end" />
                <Link to="/terms">Terms of Service</Link>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button text="Purchase now" variant="contained" />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default PreviewPurchase
