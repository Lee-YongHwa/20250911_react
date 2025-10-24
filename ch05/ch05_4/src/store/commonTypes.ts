import type {ICard} from '../data'


// 공통으로 사용하는 타입 구현
export type UUID = string
export type List = {
  uuid: UUID
  title: string
}
export type Card = ICard
export type CardidListid = {
  cardid: UUID
  listid: UUID
}
export type ListidCardid = CardidListid
export type ListidCardidS = {listid: UUID; cardids: UUID[]}
export type CardidListidIndex = CardidListid & {
  index: number
}
