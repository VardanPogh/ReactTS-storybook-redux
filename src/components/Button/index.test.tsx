import React from 'react'
import { render } from '@testing-library/react'

import Button from '.'

describe('Button Test', () => {
  test('Load Button', () => {
    const myMock = jest.fn()
    const { container } = render(
      <Button variant="contained" text="submit" onClick={myMock} />
    )
    expect(container).toMatchSnapshot()
  })
})
