import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import CheckBox from '.'

export default {
  title: 'CheckBox',
  component: CheckBox,
  decorators: [withKnobs],
}

const labelPlacement = {
  Bottom: 'bottom',
  End: 'end',
  Start: 'start',
  Top: 'top',
}

export const Default: React.FC = () => (
  <CheckBox
    defaultValue={text('Default Value', 'checkBox')}
    // eslint-disable-next-line
    // @ts-ignore
    Placement={select('labelPlacement', labelPlacement, labelPlacement.Bottom)}
  />
)
