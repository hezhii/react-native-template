import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null, // 默认设置永不过期，针对指定数据设置过期时间
})

export const saveToken = (token: string) => {
  storage.save({
    key: 'token',
    data: token,
  })
}

export const getToken = (): Promise<string> => storage.load({ key: 'token' })

export const clearToken = () => storage.remove({ key: 'token' })

export default storage
