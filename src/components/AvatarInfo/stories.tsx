import React from 'react'
import { withKnobs, text, files } from '@storybook/addon-knobs'

import AvatarInfo from '.'

export default {
  title: 'AvatarInfo',
  component: AvatarInfo,
  decorators: [withKnobs],
}
const info =
  'Ut interdum lectus ut velit posuere auctor. Nam non ultrices orci. Vestibulum nisl neque, condimentum eget justo vel, sagittis lacinia dolor. Vestibulum sapien lectus, ullamcorper in sem eget, cursus accumsan lacus.'

export const Default: React.FC = () => (
  <AvatarInfo
    image={files('image', '', [])}
    title={text('title', 'Dr Jonh Smith')}
    text={text('text', info)}
  />
)
