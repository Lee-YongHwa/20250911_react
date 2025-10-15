import {Title, Avatar, Icon3} from '../components'
import * as D from '../data'
import {useToggle} from '../hooks'
import {useState, useCallback} from 'react'

export default function FetchTest() {
  // loading: 데이터 로딩 상태(boolean), toggleLoading: loading 상태를 토글하는 함수
  const [loading, toggleLoading] = useToggle() //checked, toggleChecked 기본값은 false
  const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const getRandomUser = useCallback(() => {
    toggleLoading() // 로딩 시작 (true로 설정)
    D.fetchRandomUser()
    .then(setRandomUser)
    .catch(setError)
    .finally(toggleLoading)
  }, [toggleLoading])

  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <button className="btn btn-sm btn-primary" onClick={getRandomUser}>
          <Icon3 name="get_app" />
          <span>get random user {loading}</span>
        </button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <button className="btn btn-circle loading"></button>
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center">
          <p className="btn btn-circle loading">{error.message}</p>
        </div>
      )}
      {/* {조건 && ()} 형태를 만들면 오류없이 쉽게 구성 가능 */}
      {randomUser && (
        <div className="flex justify-center p-4 mt-4">
          <Avatar src={randomUser.picture.large} />
          <div className="ml-4">
            <p className="text-xl text-bold">
              {randomUser.name.title}.{randomUser.name.first}
              {randomUser.name.last}
            </p>
            <p className="italic text-gray-600">{randomUser?.email}</p>
          </div>
        </div>
      )}
    </section>
  )
}
