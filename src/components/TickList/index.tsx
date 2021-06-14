import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginRight: '32px',
    },
  },
  title: {
    color: '#474747',
    fontSize: '24px',
    marginBottom: '15px',
    marginLeft: '64px',
    textAlign: 'left',
  },
}))

interface itemsElements {
  id: string
  label: string
}

interface Props {
  items: Array<itemsElements>
  title: string
  img: string
}

const TickList: React.FC<Props> = ({ items, title, img }) => {
  const classes = useStyles()
  const List = items.map((item: itemsElements, key: number) => {
    return (
      <div className={classes.container} key={key}>
        <img src={img} alt="icon" />
        <p>{item.label}</p>
      </div>
    )
  })

  return (
    <>
      <p className={classes.title}>{title}</p>
      {List}
    </>
  )
}

export default TickList
