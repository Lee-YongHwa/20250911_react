import {useCallback, useRef, useState, type ChangeEvent, type FormEvent} from 'react'
import {useSearchParams} from 'react-router-dom'

type FormType = {id: string; pass: string}

function Login() {
  const [search] = useSearchParams() // 쿼리 스트링으로 넘어오는 값을 받기 위한 객체 선언
  const idRef = useRef<HTMLInputElement | null>(null)
  const passRef = useRef<HTMLInputElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  const [form, setForm] = useState<FormType>({id: '', pass: ''})
  const [error, setError] = useState<string | null>(null)

  const onChangeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, id: e.target.value}))
    setError(null)
  }, [])
  const onChangePass = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, pass: e.target.value}))
    setError(null)
  }, [])
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!form.id.trim()) {
        setError('ID를 입력하세요')
        idRef.current?.focus()
        return
      }
      if (!form.pass.trim()) {
        setError('비밀번호를 입력하세요')
        passRef.current?.focus()
        return
      }
      formRef.current?.submit()
    },
    [form]
  )
  return (
    <div>
      <h4>Login</h4>
      <div>
        {/* prettier-ignore */}
        <form action="/login" onSubmit={onSubmit} ref={formRef}>
          <span className="inline-block mb-4 w-12">ID:</span><input type="text" name="id" className="input mb-4" 
            onChange={onChangeId} ref={idRef} value={form.id} /><br />
          <span className="inline-block mb-4 w-12">Pass:</span><input type="password" name="pass" className="input mb-4" 
            onChange={onChangePass} ref={passRef} value={form.pass} /><br />
          {error && (
            <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>
          )}
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <p>useSearchParams: 쿼리 스트링 파라미터를 가져 올 때 사용</p>
        <p>id: {search.get('id')}</p>
        <p>pass: {search.get('pass')}</p>
      </div>
    </div>
  )
}

export default Login
