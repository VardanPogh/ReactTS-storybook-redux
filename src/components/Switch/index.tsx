import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(() =>
  createStyles({
    switchBase: {
      '&checked': {
        color: '#014bad !important',
        '& + track': {
          backgroundColor: '#014bad !important',
        },
      },
      '&focusVisible thumb': {
        color: '#014bad !important',
      },
    },
    track: {
      backgroundColor: '#014bad !important',
    },
    checked: { color: '#014bad !important' },
  })
)

interface Props {
  labelPlacement: 'bottom' | 'end' | 'start' | 'top'
  label: string
  value: string
  checked?: boolean
  onChange(): void
}

const SwitchStyled: React.FC<Props> = ({
  labelPlacement,
  label,
  value,
  checked,
  onChange,
}) => {
  const classes = useStyles()
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        value={value}
        control={
          <Switch
            classes={{
              switchBase: classes.switchBase,
              track: classes.track,
              checked: classes.checked,
            }}
          />
        }
        checked={checked}
        onChange={onChange}
        label={label}
        labelPlacement={labelPlacement}
      />
    </FormControl>
  )
}

export default SwitchStyled
