import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Video from '.'

export default {
  title: 'Video',
  component: Video,
  decorators: [withKnobs],
}

export const Default: React.FC = () => (
  <Video
    url={text('url', 'videos/BatNavExplainer.mp4')}
    controls={boolean('Controls', true)}
    width={text('width', '300px')}
    height={text('height', '300px')}
    playsinline={boolean('Controls', true)}
  />
)
