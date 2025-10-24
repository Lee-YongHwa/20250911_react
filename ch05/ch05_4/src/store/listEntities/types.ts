// list 타입 객체들을 엔티티방식으로 저장하는 역할을 수행 

import type {Action} from 'redux'
import type {List} from '../commonTypes'
export * from '../commonTypes'

export type State = Record<string, List>

// 목록을 생성하는 액션 구현
export type AddListAction = Action<'@listEntities/add'> & {
  payload: List
}
export type RemoveListAction = Action<'@listEntities/remove'> & {
  payload: string
}
export type Actions = AddListAction | RemoveListAction
