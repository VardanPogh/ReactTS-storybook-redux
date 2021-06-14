import React from 'react'
import { render } from '@testing-library/react'

import RangeSlider from '.'

describe('RangeSlider Test', () => {
  test('Load RangeSlider', () => {
    const value = [20, 37]
    const myMock = jest.fn()
    const { container } = render(
      <RangeSlider value={value} onChange={myMock} />
    )
    expect(container).toMatchSnapshot()
  })
})
