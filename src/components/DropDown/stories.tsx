import React, { useState } from 'react'
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs'

import DropDown from '.'

export default {
  title: 'DropDown',
  component: DropDown,
  decorators: [withKnobs],
}

const items = [
  { value: '', label: 'None' },
  { value: '10', label: 'Ten' },
  { value: '20', label: 'Twenty' },
  { value: '30', label: 'Thirty' },
]

export const Default: React.FC = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setAge(event.target.value as string)
  }
  return (
    <DropDown
      id={text('Id', 'test')}
      label={text('Label', 'test')}
      value={age}
      onChange={handleChange}
      hasHelper={boolean('Has helper', true)}
      helperText={text('Helper Text', 'helper text')}
      items={object('Items', items)}
    />
  )
}
