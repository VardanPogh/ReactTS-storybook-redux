import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import ToggleButton from '@material-ui/lab/ToggleButton'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() =>
  createStyles({
    items: {
      textAlign: 'center',
    },
    innerContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 500,
    },
    toggle: {
      '&:hover, &.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: '#014bad',
        '& p': {
          color: '#fff !important',
        },
        '& img': {
          filter: 'brightness(8.5)',
        },
      },
    },
  })
)
interface Items {
  value: string
  img: string
  description: string
}

interface Props {
  items: Items[]
  onChange(value: string): void
}

const ToggleGroup: React.FC<Props> = ({ items, onChange }) => {
  const [selected, setSelected] = useState('')
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      {items.map((item, index) => (
        <Grid key={index} item xs={12} sm className={classes.items}>
          <ToggleButton
            className={classes.toggle}
            value={item.value}
            selected={selected === item.value}
            onChange={(): void => {
              onChange(item.value)
              setSelected(item.value)
            }}
          >
            <div className={classes.innerContainer}>
              <img src={item.img} alt="toggle-choice" />
              <p>{item.description}</p>
            </div>
          </ToggleButton>
        </Grid>
      ))}
    </Grid>
  )
}

export default ToggleGroup
