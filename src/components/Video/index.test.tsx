import React from 'react'
import { render } from '@testing-library/react'

import Video from '.'

describe('Video Test', () => {
  test('Load Video', () => {
    const { container } = render(
      <Video
        url="https://www.youtube.com/watch?v=EngW7tLk6R8"
        controls
        width="300px"
        height="300px"
        playsinline
      />
    )
    expect(container).toMatchSnapshot()
  })
})
