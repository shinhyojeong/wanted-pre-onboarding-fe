import { Navigate, Outlet } from 'react-router-dom'
import { getStorage } from '@utils/storage'
import type { ReactElement } from 'react'
import { TOKEN_KEY } from '@constants/storageKey'

export const PreventRoute = (): ReactElement => {
  const token = getStorage(TOKEN_KEY, '')

  return token ? <Outlet /> : <Navigate replace to="/" />
}
