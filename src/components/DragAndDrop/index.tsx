import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Grid } from '@material-ui/core'

const reorder = (list: any, startIndex: number, endIndex: number): any => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const BoxItem = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #00000014;
  border: 1px dashed #c4c4c4;
  height: auto;
  margin-left: 32px;
  padding: 20px 36px;
  box-sizing: border-box;
  margin-bottom: 30px;
  font-size: 18px;
  font-family: 'Poppins, sans-serif';
  color: #014bad;
  text-align: center;
  width: 65%;
  @media (max-width: 375px) {
    width: 100%;
  }
`

const useStyles = makeStyles(() => ({
  numbers: {
    fontSize: 77,
    color: '#545454',
    opacity: 0.3,
    listStyle: 'none',
    marginTop: 0,
    paddingLeft: 0,
    '& li': {
      listStyle: 'none',
      lineHeight: 1,
      marginBottom: 18,
    },
  },
}))
interface Box {
  box: any
  index: number
}

const BoxComponent: React.FC<Box> = ({ box, index }) => {
  return (
    <Draggable draggableId={box.id} index={index}>
      {(provided): React.ReactElement => (
        <BoxItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {box.content}
        </BoxItem>
      )}
    </Draggable>
  )
}
const BoxList = React.memo(function BoxList({ boxes }: any) {
  return boxes.map((box: any, index: number) => (
    <BoxComponent box={box} index={index} key={box.id} />
  ))
})

interface Props {
  values: any
  setValues: any
}
const DragAndDrop: React.FC<Props> = ({ values, setValues }) => {
  const classes = useStyles()
  const onDragEnd = (result: any): void => {
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }
    const boxes = reorder(
      values.boxes,
      result.source.index,
      result.destination.index
    )
    setValues({ boxes })
  }
  const LI = values.boxes.map((item: any, index: number) => (
    <li key={index}>{index + 1}</li>
  ))

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={1} sm={1}>
          <ul className={classes.numbers}>{LI}</ul>
        </Grid>
        <Grid item xs={8} sm={8}>
          <Droppable droppableId="list">
            {(provided): React.ReactElement => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <BoxList boxes={values.boxes} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </DragDropContext>
  )
}

export default DragAndDrop
