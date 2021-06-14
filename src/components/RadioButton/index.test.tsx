import React from 'react'
import { render } from '@testing-library/react'
import RadioButton from '.'

const items = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
  {
    value: 'maybelater',
    label: 'Maybe Later',
  },
]
describe('RadioButton Test', () => {
  test('Loads RadioButton', () => {
    const { container } = render(
      <RadioButton items={items} defaulValue="yes" labelPlacement="bottom" />
    )
    expect(container).toMatchSnapshot()
  })
})
