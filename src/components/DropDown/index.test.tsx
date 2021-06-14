import React from 'react'
import { render } from '@testing-library/react'

import DropDown from '.'

describe('DropDown Test', () => {
  test('Load Button', () => {
    const myMock = jest.fn()
    const items = [
      { value: '', label: 'None' },
      { value: '10', label: 'Ten' },
      { value: '20', label: 'Twenty' },
      { value: '30', label: 'Thirty' },
    ]

    const { container } = render(
      <DropDown
        id="test"
        label="test"
        value="10"
        onChange={myMock}
        hasHelper
        helperText="Helper Text"
        items={items}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
