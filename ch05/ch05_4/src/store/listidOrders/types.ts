// 생성한 list 목록의 uuid값을 배열에 담아 웹 페이지에 어떤 순서로 표시할 것인지를 결정하는 역할

import type {Action} from 'redux'
import type {UUID} from '../commonTypes'
export * from '../commonTypes'

export type State = UUID[]

export type SetListidOrders = Action<'@listidOrders/set'> & {
  payload: State
}
export type AddListidToOrders = Action<'@listidOrders/add'> & {
  payload: UUID
}
export type RemoveListidFromOrders = Action<'@listidOrders/remove'> & {
  payload: UUID
}

export type Actions = SetListidOrders | AddListidToOrders | RemoveListidFromOrders
