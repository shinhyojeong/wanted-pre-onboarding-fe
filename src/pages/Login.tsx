import { authApi } from '@api/apis'
// import type { GetUserPayload } from 'payloads'
import { LoginForm } from '@template'
import type { ReactElement } from 'react'
import { setStorage } from '@utils/storage'
import styled from '@emotion/styled'
import { Text } from '@base'
import type { UserInfo } from '@template'

export const Login = (): ReactElement => {
  const handleLogin = async (userInfo: UserInfo): Promise<void> => {
    await authApi.signUp(userInfo)
    const data = await authApi.signIn(userInfo)

    setStorage('at', data.access_token)
  }

  return (
    <StyledSignWrapper>
      <Text bold size={36}>
        🔥To Do List🔥
      </Text>
      <LoginForm onLogin={handleLogin} />
    </StyledSignWrapper>
  )
}

const StyledSignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
