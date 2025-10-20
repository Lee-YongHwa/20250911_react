// 기존코드 listidOrders.map(...)는 매번 새로운 배열을 생성 Redux는 이걸 “값이 바뀌었다”고 생각해서 불필요한 리렌더를 유발
// const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
//   listidOrders.map(uuid => listEntities[uuid])
// )
// 때문에 코드를 분리하여 메모이제이션된 셀렉터를 사용

// store/selectors.ts
import {createSelector} from '@reduxjs/toolkit'
import type {AppState} from './AppState'

export const selectLists = createSelector(
  [(state: AppState) => state.listidOrders, (state: AppState) => state.listEntities],
  (listidOrders, listEntities) => listidOrders.map(uuid => listEntities[uuid])
)
