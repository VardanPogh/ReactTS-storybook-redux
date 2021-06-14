import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles({
  radio: {
    color: '#014bad !important',
    borderColor: '#014bad !important',
    '&checked': {
      color: '#014bad !important',
      borderColor: '#014bad !important',
    },
  },
})

interface Items {
  value: string
  label: string
}

interface Props {
  items: Items[]
  defaulValue?: string
  labelPlacement: 'bottom' | 'end' | 'start' | 'top'
  onChange?(e: any): void
}

const RadioButtonGroup: React.FC<Props> = ({
  items,
  defaulValue,
  labelPlacement,
  onChange,
}) => {
  const classes = useStyles()
  return (
    <RadioGroup
      row
      aria-label="radio-group"
      name="radio-group"
      defaultValue={defaulValue}
    >
      {items.map((item, index) => (
        <FormControlLabel
          key={index}
          value={item.value}
          control={<Radio className={classes.radio} />}
          label={item.label}
          labelPlacement={labelPlacement}
          onChange={onChange}
        />
      ))}
    </RadioGroup>
  )
}

export default RadioButtonGroup
