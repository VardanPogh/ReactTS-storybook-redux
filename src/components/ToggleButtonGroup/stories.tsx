import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import ToggleGroup from '.'
import items from './items'

export default {
  title: 'ToggleGroup',
  component: ToggleGroup,
  decorators: [withKnobs],
}

export const Default: React.FC = () => {
  return (
    <ToggleGroup
      items={object('Items', items)}
      onChange={action('button-click')}
    />
  )
}
