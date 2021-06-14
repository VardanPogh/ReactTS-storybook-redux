import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  slider: {
    color: '#014bad',
  },
})

interface Props {
  value: number | number[]
  onChange(event: any, newValue: number | number[]): void
  getAriaValueText?(): string
}

const RangeSlider: React.FC<Props> = ({
  value,
  onChange,
  getAriaValueText,
}) => {
  const classes = useStyles()

  return (
    <Slider
      className={classes.slider}
      value={value}
      onChange={onChange}
      valueLabelDisplay="on"
      aria-labelledby="range-slider"
      getAriaValueText={getAriaValueText}
    />
  )
}

export default RangeSlider
