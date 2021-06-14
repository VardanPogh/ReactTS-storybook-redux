import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

interface Props {
  defaultValue: string
  Placement?: 'bottom' | 'end' | 'start' | 'top'
}

const CheckBox: React.FC<Props> = ({ defaultValue, Placement }) => {
  return (
    <FormControlLabel
      value={defaultValue}
      control={<Checkbox style={{ color: '#014bad' }} />}
      label={defaultValue}
      labelPlacement={Placement}
    />
  )
}

export default CheckBox
