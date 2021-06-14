import React from 'react'
import { withKnobs, text, select, files } from '@storybook/addon-knobs'

import MediaCard from '.'

const options = {
  withButton: 'withButton',
  withImage: 'withImage',
}

export default {
  title: 'Card',
  component: MediaCard,
  decorators: [withKnobs],
}

export const Default: React.FC = () => (
  <MediaCard
    variant={select('Variant', options, options.withImage)}
    image={files('image', '', [])}
    title={text('title', 'Get a Demo')}
    buttonTitle={text('button Title', 'Get a Demo')}
    subTitle={text(
      'subTitle',
      'Qualified engineers, scientists and PhDs with hands-on experience '
    )}
  />
)
