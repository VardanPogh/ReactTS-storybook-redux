import React from 'react'
import { render } from '@testing-library/react'
import DragAndDrop from '.'

const List = [
  {
    id: 'box-0',
    content: `Maximise Performance`,
  },
  {
    id: 'box-1',
    content: `Minimise Life Cycle Cost`,
  },
  {
    id: 'box-2',
    content: `Minimise Quality Risk`,
  },
]

describe('DragAndDrop Test', () => {
  test('Load DragAndDrop', () => {
    const myMock = jest.fn()
    const { container } = render(
      <DragAndDrop values={{ boxes: List }} setValues={myMock} />
    )
    expect(container).toMatchSnapshot()
  })
})
