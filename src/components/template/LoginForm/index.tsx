import { Button, Input } from '@base'
import type { ChangeEvent, MouseEvent, ReactElement } from 'react'
import { useState } from 'react'
import { validationInput } from '@utils/vaildation'

interface UserInfo {
  email: string
  password: string
}
interface LoginFormProps {
  onLogin(userInfo: UserInfo): void
}

export const LoginForm = ({ onLogin }: LoginFormProps): ReactElement => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: ''
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.currentTarget

    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const handleLogin = (e: MouseEvent<HTMLButtonElement>): void => {
    onLogin(userInfo)
  }

  return (
    <form>
      <Input
        name="email"
        placeholder="이메일을 입력해 주세요."
        type="email"
        onChange={handleChangeInput}
      />
      <Input
        name="password"
        placeholder="비밀번호를 입력해 주세요."
        type="password"
        onChange={handleChangeInput}
      />
      <Button
        children="로그인/회원가입"
        disabled={
          !(
            validationInput('email', userInfo.email) &&
            validationInput('password', userInfo.password)
          )
        }
        onClick={handleLogin}
      />
    </form>
  )
}
