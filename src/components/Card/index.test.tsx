import React from 'react'
import { render } from '@testing-library/react'

import MediaCard from '.'

describe('MediaCard Test', () => {
  test('Loads MediaCard', () => {
    const myMock = jest.fn()
    const { container } = render(
      <MediaCard
        variant="withButton"
        title="Get a Demo"
        subTitle="Qualified engineers, scientists and PhDs with hands-on experience"
        onClick={myMock}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
