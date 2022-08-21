import axios from 'axios'
import type { AxiosInstance } from 'axios'
const BASE_URL =
  'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production'

export interface SignOption {
  email: string
  password: string
}

export interface TodoOption {
  todo: string
  isCompleted?: boolean
}

export type AxiosInstanceOptions = SignOption | TodoOption

const create = (url: string, options?: AxiosInstanceOptions): AxiosInstance => {
  const instance = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
    ...options
  })

  return instance
}

export const instance = create(BASE_URL)
