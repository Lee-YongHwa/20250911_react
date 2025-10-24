import type {FC, PropsWithChildren} from 'react'
import {useDraggable} from '@dnd-kit/core'
import {CSS} from '@dnd-kit/utilities'

export type CardDraggableProps = {
  draggableId: string
  index: number
}

export const CardDraggable: FC<PropsWithChildren<CardDraggableProps>> = ({
  draggableId,
  index,
  children
}) => {
  const {attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: draggableId
  })

  const style:React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? undefined : 'transform 200ms ease', 
    touchAction: 'none',
    cursor: isDragging ? 'grabbing' : 'grab',
    userSelect: 'none',
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  )
}

// 이전 소스
// import type {FC, PropsWithChildren} from 'react'
// import {Draggable} from 'react-beautiful-dnd'

// export type CardDraggableProps = {
//   draggableId: string
//   index: number
// }

// export const CardDraggable: FC<PropsWithChildren<CardDraggableProps>> = ({
//   draggableId,
//   index,
//   children
// }) => {
//   return (
//     <Draggable draggableId={draggableId} index={index}>
//       {provided => {
//         return (
//           <div
//             ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}>
//             {children}
//           </div>
//         )
//       }}
//     </Draggable>
//   )
// }
