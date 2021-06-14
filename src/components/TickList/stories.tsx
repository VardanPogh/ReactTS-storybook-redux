import React from 'react'
import { withKnobs, object, text } from '@storybook/addon-knobs'

import TickList from '.'

export default {
  title: 'Tick',
  component: TickList,
  decorators: [withKnobs],
}
const List = [
  {
    id: 'label-1',
    label: 'Provide requirements over long meetings',
  },
  {
    id: 'label-2',
    label: 'Delivers in weeks or months',
  },
  {
    id: 'label-3',
    label: 'Revision in days or weeks',
  },
]

export const Default: React.FC = () => (
  <TickList
    items={object('List', List)}
    title={text('Title', 'Consultants')}
    img={text('Img', 'img/check.png')}
  />
)
