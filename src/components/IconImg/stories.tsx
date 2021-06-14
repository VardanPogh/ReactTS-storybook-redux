import React from 'react'
import { withKnobs, text, files } from '@storybook/addon-knobs'

import IconImg from '.'

export default {
  title: 'IconImg',
  component: IconImg,
  decorators: [withKnobs],
}

export const Default: React.FC = () => (
  <IconImg
    image={files('Icon/Image', '', [])}
    title={text('Title', 'Dr Jonh Smith')}
    text={text(
      'Description',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quae rerum maxime!'
    )}
  />
)
