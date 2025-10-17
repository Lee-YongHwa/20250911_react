import {useCallback} from 'react'
import {Icon3, Subtitle, Title} from '../components'
import type {AppState} from '../store'
import * as C from '../store/counter'
import {useDispatch, useSelector} from 'react-redux'

export default function CounterTest() {
  const dispatch = useDispatch()
  const counter = useSelector<AppState, C.State>(({counter}) => counter)
  const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch])
  const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch])

  return (
    <section className="mt-4" style={{background: 'yellow'}}>
      <Title>CounterTest</Title>
      <div className="flex justify-center p-4 mt-4">
        <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
          <Icon3 name="add_circle" className='cursor-pointer text-5xl select-none' onClick={increase} />
          <Subtitle>{counter}</Subtitle>
          <Icon3 name="remove_circle" className='cursor-pointer text-5xl select-none' onClick={decrease} />
        </div>
      </div>
    </section>
  )
}
