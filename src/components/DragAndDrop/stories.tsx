import React, { useState } from 'react'
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

export default {
  title: 'DragAndDrop',
  component: DragAndDrop,
}
export const Boxes: React.FC = () => {
  const [state, setState] = useState({ boxes: List })
  // console log to check corrrect values will be passed to form
  // console.log(state)
  return <DragAndDrop values={state} setValues={setState} />
}
