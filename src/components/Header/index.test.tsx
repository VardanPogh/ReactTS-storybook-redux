import React from 'react'
import { render } from '@testing-library/react'

import Header from '.'

describe('Header Test', () => {
  test('Render Header with buttons navigation', () => {
    const { container } = render(<Header haveButtons />)
    expect(container).toMatchSnapshot()
  })
  test('Render Header without buttons navigation', () => {
    const { container } = render(<Header haveButtons={false} />)
    expect(container).toMatchSnapshot()
  })
})
