import React from 'react'
import { withKnobs, text, object, select } from '@storybook/addon-knobs'

import RadioButton from '.'

export default {
  title: 'RadioButton',
  component: RadioButton,
  decorators: [withKnobs],
}

const labelPlacement = {
  Bottom: 'bottom',
  End: 'end',
  Start: 'start',
  Top: 'top',
}

const items = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
  {
    value: 'maybelater',
    label: 'Maybe Later',
  },
]

export const Default: React.FC = () => (
  <RadioButton
    items={object('Radio', items)}
    defaulValue={text('Default Value', 'yes')}
    // eslint-disable-next-line
    // @ts-ignore
    labelPlacement={select(
      'labelPlacement',
      labelPlacement,
      labelPlacement.Bottom
    )}
  />
)
