import React from 'react'
import { render } from '@testing-library/react'
import CheckBox from '.'

describe('CheckBox Test', () => {
  test('Loads CheckBox', () => {
    const { container } = render(
      <CheckBox defaultValue="checkBox" Placement="bottom" />
    )
    expect(container).toMatchSnapshot()
  })
})
