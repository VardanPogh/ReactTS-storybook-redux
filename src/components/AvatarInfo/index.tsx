import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
    margin: 'auto',
  },
  p_name: {
    color: '#185ab4;',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  p_des: {
    fontSize: 18,
    color: '#545454',
    maxWidth: 1000,
    margin: '0 auto',
    textAlign: 'center',
  },
}))

interface Props {
  image: any
  text: string
  title: string
}

const AvatarInfo: React.FC<Props> = ({ image, text, title }) => {
  const classes = useStyles()

  return (
    <>
      <Avatar src={image} className={classes.large} />
      <p className={classes.p_name}>{title}</p>
      <p className={classes.p_des}>{text}</p>
    </>
  )
}

export default AvatarInfo
