import { authApi } from '@api/apis'
import { LoginForm } from '@template'
import type { ReactElement } from 'react'
import { setStorage } from '@utils/storage'
import styled from '@emotion/styled'
import { Text } from '@base'
import { TOKEN_KEY } from '@constants/storageKey'
import { useNavigate } from 'react-router-dom'
import type { UserInfo } from '@template'

export const Login = (): ReactElement => {
  const navigate = useNavigate()

  const handleLogin = async (userInfo: UserInfo): Promise<void> => {
    try {
      await authApi.signUp(userInfo)
    } catch (e) {
      console.warn(e)
    }

    try {
      const { data } = await authApi.signIn(userInfo)
      setStorage(TOKEN_KEY, data.access_token)
      navigate('/todo', { replace: true })
    } catch (e) {
      console.warn(e)
    }
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
