import React from 'react'
import { render } from '@testing-library/react'
import TickList from '.'

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

describe('RadioButton Test', () => {
  test('Loads RadioButton', () => {
    const { container } = render(
      <TickList items={List} title="Consultants" img="img/check.png" />
    )
    expect(container).toMatchSnapshot()
  })
})
