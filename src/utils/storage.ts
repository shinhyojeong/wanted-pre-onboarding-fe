const storage = window.localStorage

export const getStorage = (key: string, defaultValue = ''): string => {
  try {
    const value = storage.getItem(key)

    if (!value) {
      return defaultValue
    }

    return JSON.parse(value)
  } catch (e) {
    alert('storage에서 데이터를 불러오는데 실패했습니다.')

    return ''
  }
}

export const setStorage = (key: string, value: string): void => {
  storage.setItem(key, JSON.stringify(value))
}
