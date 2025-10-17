import {useCallback, useRef, useState, type ChangeEvent, type FormEvent} from 'react'
import {useSearchParams} from 'react-router-dom'

type FormType = {title: string; content: string}

function Register() {
  const [search] = useSearchParams() // 쿼리 스트링으로 넘어오는 값을 받기 위한 객체 선언
  const titleRef = useRef<HTMLInputElement | null>(null)
  const contentRef = useRef<HTMLInputElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  const [form, setForm] = useState<FormType>({title: '', content: ''})
  const [error, setError] = useState<string | null>(null)

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, title: e.target.value}))
    setError(null)
  }, [])
  const onChangeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, content: e.target.value}))
    setError(null)
  }, [])
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!form.title.trim()) {
        setError('제목을 입력하세요')
        titleRef.current?.focus()
        return
      }
      if (!form.content.trim()) {
        setError('내용을 입력하세요')
        contentRef.current?.focus()
        return
      }
      formRef.current?.submit()
    },
    [form]
  )
  return (
    <div>
      <h4>Borad Register</h4>
      <div>
        {/* prettier-ignore */}
        <form action="/board/register" onSubmit={onSubmit} ref={formRef}>
          <span className="inline-block mb-4 w-12">제목:</span>
          <input type="text" name="title" className="input" ref={titleRef} onChange={onChangeTitle} value={form.title} /><br />
          <span className="inline-block mb-4 w-12">내용:</span>
          <input type="password" name="content" className="input" onChange={onChangeContent} ref={contentRef} value={form.content} /><br />
          {error && (
            <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>
          )}
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <p>useSearchParams: 쿼리 스트링 파라미터를 가져 올 때 사용</p>
        <p>title: {search.get('title')}</p>
        <p>content: {search.get('content')}</p>
      </div>
    </div>
  )
}

export default Register
