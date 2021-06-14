import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from '.'

const options = {
  Outlined: 'outlined',
  Contained: 'contained',
  None: '',
}

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
}

export const Default: React.FC = () => (
  <Button
    onClick={action('button-click')}
    variant={select('Variant', options, options.Contained)}
    text={text('Label', 'Login')}
  />
)
