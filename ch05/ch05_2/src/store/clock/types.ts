import type {Action} from 'redux'

// State가 하나의 단순 값 확장 X     {}안에 여러 필드를 가질 수 있는 구조, 확장 O
export type State = string // export type AppState = {today: Date}

// Action에 대하여 type을 선언함으로 actions에서 발생할 수 있는 타입오류를 예방
export type SetClockAction = Action<'@clock/setClock'> & {
  payload: State // 전송되는 데이터의 실제 내용
}

export type Actions = SetClockAction
