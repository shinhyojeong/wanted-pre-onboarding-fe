import type { AxiosInstance } from 'axios'
import { getStorage } from '@utils/storage'
import { TOKEN_KEY } from '@constants/storageKey'

export const setInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use((config: any) => {
    const token = getStorage(TOKEN_KEY, '')

    config.headers = {
      Authorization: `Bearer ${token}`
    }

    return config
  })
}
