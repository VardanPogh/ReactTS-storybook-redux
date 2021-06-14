import React from 'react'
import { render } from '@testing-library/react'

import AvatarInfo from '.'

describe('AvatarInfo Test', () => {
  test('Load AvatarInfo', () => {
    const { container } = render(
      <AvatarInfo
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
        title="Dr Jonh Smith"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod doloribus culpa?"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
