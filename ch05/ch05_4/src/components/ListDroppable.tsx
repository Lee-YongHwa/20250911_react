// components/ListDroppable.tsx
import type { ReactNode } from 'react'
import { useDroppable } from '@dnd-kit/core'

interface ListDroppableProps {
  children: ReactNode
  className?: string
  id?: string // 기본값: 'board'
}

export function ListDroppable({ children, className, id = 'board' }: ListDroppableProps) {
  const { setNodeRef, isOver } = useDroppable({
    id, // 이 droppable 영역의 고유 ID
  })

  return (
    <div
      ref={setNodeRef}
      className={`${className ?? ''} ${isOver ? 'bg-blue-50' : ''}`}
    >
      {children}
    </div>
  )
}
