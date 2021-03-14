import { NativeModules, NativeEventEmitter, PermissionsAndroid } from 'react-native'
import { Location, ReGeocode } from './types'
import { IS_ANDROID } from '../../utils/device'

const { RNAmapGeolocation } = NativeModules

export default RNAmapGeolocation
export const eventEmitter = new NativeEventEmitter(RNAmapGeolocation)

export const getCurrentLocation = async () => {
  // android 请求权限
  if (IS_ANDROID) {
    const permissions = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ])
    if (Object.values(permissions).some(status => status !== PermissionsAndroid.RESULTS.GRANTED)) {
      return
    }
  }

  // 监听定位变化，监听到城市位置信息之后，resolve 并停止定位
  const locationPromise = new Promise(resolve => {
    eventEmitter.addListener('onLocationChanged', (location: Location & ReGeocode) => {
      if (location && location.adCode) {
        resolve(location)
        RNAmapGeolocation.stop()
      }
    })
  })

  // 超时，20 秒之后直接 resolve
  const timeoutPromise = new Promise(resolve => {
    setTimeout(() => {
      RNAmapGeolocation.stop()
      resolve(null)
    }, 20 * 1000)
  })

  RNAmapGeolocation.start()
  return Promise.race([locationPromise, timeoutPromise])
}
