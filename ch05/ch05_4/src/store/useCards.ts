import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import type {AppState} from '../store'
import type {Card, UUID} from '../store/commonTypes'
import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardidOrders'
import * as D from '../data'
import {selectLists} from './selectors'

export const useCards = (listid: UUID) => {
  const dispatch = useDispatch()
  // const cards = useSelector<AppState, Card[]>(({cardEntities, listidCardidOrders}) =>
  //   listidCardidOrders[listid].map(uuid => cardEntities[uuid])
  // )
  const cards = useSelector<AppState, Card[]>(({cardEntities, listidCardidOrders}) =>
    (listidCardidOrders[listid] ?? []).map(uuid => cardEntities[uuid])
  )
  // 기존코드 listidOrders.map(...)는 매번 새로운 배열을 생성 Redux는 이걸 “값이 바뀌었다”고 생각해서 불필요한 리렌더를 유발
  // const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
  //   listidOrders.map(uuid => listEntities[uuid])
  // )
  const lists = useSelector(selectLists)

  const onPrependCard = useCallback(() => {
    const card = D.makeRandomCard()
    dispatch(C.addCard(card))
    dispatch(LC.prependCardidToListid({listid, cardid: card.uuid}))
  }, [dispatch, listid])

  const onAppendCard = useCallback(() => {
    const card = D.makeRandomCard()
    dispatch(C.addCard(card))
    dispatch(LC.appendCardidToListid({listid, cardid: card.uuid}))
  }, [dispatch, listid])

  const onRemoveCard = useCallback(
    (uuid: UUID) => () => {
      dispatch(C.removeCard(uuid))
      dispatch(LC.removeCardIdFromListId({listid: listid, cardid: uuid}))
    },
    [dispatch, listid]
  )
  return {cards, onPrependCard, onAppendCard, onRemoveCard}
}
