import { Button, Input } from '@base'
import type { ChangeEvent, MouseEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { validationInput } from '@utils/vaildation'
import type { ValidationTypes } from '@utils/vaildation'

interface LoginFormProps {
  onLogin: MouseEventHandler<HTMLButtonElement>
}

type HandleValidation = (
  e: ChangeEvent<HTMLInputElement>,
  validationType: ValidationTypes
) => void

export const LoginForm = ({ onLogin }: LoginFormProps): ReactElement => {
  const [userInfoValid, setUserInfoValid] = useState({
    email: false,
    password: false
  })

  const handleValidation: HandleValidation = (e, validationType) => {
    const { value } = e.currentTarget
    const inputValidation = validationInput(validationType, value)

    setUserInfoValid({
      ...userInfoValid,
      [validationType]: inputValidation
    })
  }

  return (
    <form>
      <Input
        name="email"
        placeholder="이메일을 입력해 주세요."
        type="email"
        onChange={(e): void => {
          handleValidation(e, 'email')
        }}
      />
      <Input
        name="password"
        placeholder="비밀번호를 입력해 주세요."
        type="password"
        onChange={(e): void => {
          handleValidation(e, 'password')
        }}
      />
      <Button
        children="로그인/회원가입"
        disabled={userInfoValid.email && userInfoValid.password ? false : true}
        onClick={onLogin}
      />
    </form>
  )
}
