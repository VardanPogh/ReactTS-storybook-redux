import React, { useState } from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Switch from '.'

const labelPlacement = {
  Bottom: 'bottom',
  End: 'end',
  Start: 'start',
  Top: 'top',
}

export default {
  title: 'Switch',
  component: Switch,
  decorators: [withKnobs],
}

export const Default: React.FC = () => {
  const [checked, setChecked] = useState(false)
  const toggleChecked = (): void => {
    setChecked((prev) => !prev)
  }
  return (
    <Switch
      // eslint-disable-next-line
      // @ts-ignore
      labelPlacement={select(
        'labelPlacement',
        labelPlacement,
        labelPlacement.Bottom
      )}
      label={text('Label', 'Sample Label')}
      value={text('Value', 'Sample Value')}
      checked={checked}
      onChange={toggleChecked}
    />
  )
}
