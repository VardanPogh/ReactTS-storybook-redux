import React from 'react'
import { render } from '@testing-library/react'

import Switch from '.'

describe('Switch Test', () => {
  test('Load Switch', () => {
    const myMock = jest.fn()
    const { container } = render(
      <Switch
        labelPlacement="bottom"
        label="Label"
        value="value"
        checked
        onChange={myMock}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
