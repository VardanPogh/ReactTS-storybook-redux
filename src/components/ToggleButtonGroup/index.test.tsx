import React from 'react'
import { render } from '@testing-library/react'

import ToggleGroup from '.'
import items from './items'

describe('ToggleGroup Test', () => {
  test('Load ToggleGroup', () => {
    const myMock = jest.fn()
    const { container } = render(
      <ToggleGroup items={items} onChange={myMock} />
    )
    expect(container).toMatchSnapshot()
  })
})
