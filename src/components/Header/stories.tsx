import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Header from '.'

export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs],
}

export const Default: React.FC = () => (
  <Header haveButtons={boolean('Have Buttons', true)} />
)
