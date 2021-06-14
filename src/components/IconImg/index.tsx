import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  main: {
    width: '100%',
  },
  title: {
    marginTop: 30,
    marginBottom: 0,
    color: ' #545454',
    fontSize: 24,
    textAlign: 'center',
  },
  subTitle: {
    margin: '16px 0',
    color: ' #545454',
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    maxWidth: 220,
    maxHeight: 220,
    margin: 'auto',
    display: 'block',
  },
}))

interface Props {
  image: any
  text: string
  title?: string
  className?: string
}

const IconImg: React.FC<Props> = ({ image, text, title, className }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.main, className)}>
      <img src={image} alt="icon_image" className={classes.image} />
      {title && <p className={classes.title}>{title}</p>}
      <p className={classes.subTitle}>{text}</p>
    </div>
  )
}
export default IconImg
