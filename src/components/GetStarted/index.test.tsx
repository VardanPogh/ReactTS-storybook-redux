import React from 'react'
import { render } from '@testing-library/react'
import GetStarted from '.'

describe('GetStarted Test', () => {
  test('Render GetStarted', () => {
    const { container } = render(<GetStarted />)
    expect(container).toMatchSnapshot()
  })
})
