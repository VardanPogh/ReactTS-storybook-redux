import React from 'react'
import { render } from '@testing-library/react'
import IconImg from '.'

describe('IconImg Test', () => {
  test('Load IconImg', () => {
    const { container } = render(
      <IconImg
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
        title="Dr Jonh Smith"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quae rerum maxime!"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
