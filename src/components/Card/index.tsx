import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '../Button'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    maxWidth: 700,
    '& button': {
      textDecoration: 'none',
      margin: 'auto',
      marginBottom: 30,
    },
  },
  root2: {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '79%',
    '& button': {
      textDecoration: 'none',
      margin: 'auto',
      marginBottom: 30,
    },
  },
  cover: {
    width: '100%',
    maxWidth: '20vh',
    height: '20%',
    maxHeight: '20%',
    padding: 35,
    '@media (max-width: 812px)': {
      maxWidth: 'none',
    },
  },

  title: {
    textAlign: 'center',
    color: '#004aad',
    margin: '20px 0',
  },
  title2: {
    textAlign: 'left',
    color: '#004aad',
    margin: '20px 0',
    fontSize: '17px',
  },
  subTitle: {
    textAlign: 'center',
    color: ' #545454',
    fontSize: '16px',
    margin: '15px 0',
  },
  subTitle2: {
    textAlign: 'left',
    color: ' #545454',
    fontSize: '16px',
    margin: '15px 0',
  },
})

interface Props {
  variant: string
  title: string
  subTitle: string
  buttonTitle?: string | undefined
  image?: any
  onClick?(): void
}

const MediaCard: React.FC<Props> = ({
  variant,
  title,
  subTitle,
  image,
  buttonTitle,
  onClick,
}) => {
  const classes = useStyles()
  switch (variant) {
    case 'withButton':
      return (
        <Card className={classes.root}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.subTitle}
            >
              {subTitle}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              text={`${buttonTitle}`} // because buttonTitle can be undefined in withImage variant
              onClick={onClick}
            />
          </CardActions>
        </Card>
      )
    case 'withImage':
      return (
        <Card className={classes.root2}>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={image}
            title={title}
            className={classes.cover}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title2}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.subTitle2}
            >
              {subTitle}
            </Typography>
          </CardContent>
        </Card>
      )
    default:
      return null
  }
}
export default MediaCard
