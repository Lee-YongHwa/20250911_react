// import type {DragEndEvent} from '@dnd-kit/core'
import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '.'
import * as LO from './listidOrders'
import * as L from './listEntities'
import * as C from './cardEntities'
import * as LC from './listidCardidOrders'
import * as U from '../utils'
import {selectLists} from './selectors'

export const useLists = () => {
  const dispatch = useDispatch()

  // 기존코드 listidOrders.map(...)는 매번 새로운 배열을 생성 Redux는 이걸 “값이 바뀌었다”고 생각해서 불필요한 리렌더를 유발
  // const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
  //   listidOrders.map(uuid => listEntities[uuid])
  // )
  const lists = useSelector(selectLists)

  const listidCardidOrders = useSelector<AppState, LC.State>(
    ({listidCardidOrders}) => listidCardidOrders
  )
  const listidOrders = useSelector<AppState, LO.State>(({listidOrders}) => listidOrders)

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(uuid))
      dispatch(L.addList(list))
      dispatch(LC.setListidCardids({listid: list.uuid, cardids: []}))
    },
    [dispatch]
  )

  const onRemoveList = useCallback(
    (listid: string) => () => {
      listidCardidOrders[listid].forEach(cardid => {
        dispatch(C.removeCard(cardid))
      })
      dispatch(LC.removeListid(listid))
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch, listidCardidOrders]
  )

  const onMoveList = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newOrders = listidOrders.map((item, index) =>
        index === dragIndex
          ? listidOrders[hoverIndex]
          : index === hoverIndex
          ? listidOrders[dragIndex]
          : item
      )
      dispatch(LO.setListidOrders(newOrders))
    },
    [dispatch, listidOrders]
  )

  // const onDragEnd = useCallback(
  //   (event: DragEndEvent) => {
  //     const {active, over} = event
  //     if (!over) return

  //     const [activeType, activeListid] = active.id.toString().split(':') // e.g. "card:abc", "list:def"
  //     const [overType, overListid] = over.id.toString().split(':')

  //     if (activeType === 'list' && overType === 'list') {
  //       // 리스트 이동
  //       const fromIndex = listidOrders.indexOf(activeListid)
  //       const toIndex = listidOrders.indexOf(overListid)
  //       if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
  //         const newOrder = U.swapItemsInArray(listidOrders, fromIndex, toIndex)
  //         dispatch(LO.setListidOrders(newOrder))
  //       }
  //       return
  //     }

  //     if (activeType === 'card') {
  //       const sourceListid = activeListid
  //       const cardid = active.data.current?.cardid
  //       const sourceCardIndex = listidCardidOrders[sourceListid].indexOf(cardid)

  //       if (overType === 'card') {
  //         const destinationListid = overListid
  //         const overCardid = over.id.toString().split(':')[2] // "card:listid:cardid"
  //         const destinationCardIndex =
  //           listidCardidOrders[destinationListid].indexOf(overCardid)

  //         if (sourceListid === destinationListid) {
  //           // 같은 리스트 내에서 이동
  //           const newCardOrder = U.swapItemsInArray(
  //             listidCardidOrders[sourceListid],
  //             sourceCardIndex,
  //             destinationCardIndex
  //           )
  //           dispatch(LC.setListidCardids({listid: sourceListid, cardids: newCardOrder}))
  //         } else {
  //           // 다른 리스트로 이동
  //           const sourceCards = U.removeItemAtIndexInArray(
  //             listidCardidOrders[sourceListid],
  //             sourceCardIndex
  //           )
  //           const destCards = U.insertItemAtIndexInArray(
  //             listidCardidOrders[destinationListid],
  //             destinationCardIndex,
  //             cardid
  //           )
  //           dispatch(LC.setListidCardids({listid: sourceListid, cardids: sourceCards}))
  //           dispatch(LC.setListidCardids({listid: destinationListid, cardids: destCards}))
  //         }
  //       }
  //     }
  //   },
  //   [dispatch, listidOrders, listidCardidOrders]
  // )

  return {
    lists,
    onCreateList,
    onRemoveList
    // onMoveList,
    // onDragEnd
  }
}
