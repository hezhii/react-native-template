/**
 * 定位信息
 */
export interface Location {
  /**
   * 定位精度 (米)
   */
  accuracy: number

  /**
   * 经度，[-180, 180]
   */
  latitude: number

  /**
   * 纬度，[-90, 90]
   */
  longitude: number

  /**
   * 海拔（米），需要 GPS
   */
  altitude?: number

  /**
   * 移动速度（米/秒），需要 GPS
   */
  speed?: number

  /**
   * 移动方向，需要 GPS
   */
  heading?: number

  /**
   * 定位时间（毫秒）
   */
  timestamp?: number

  /**
   * 错误信息
   */
  errorInfo?: string

  /**
   * 定位信息描述
   *
   * @platform android
   */
  locationDetail?: string

  /**
   * 坐标系类型
   *
   * @platform android
   */
  coordinateType?: 'WGS84' | 'GCJ02'
}

/**
 * 逆地理编码信息
 */
export interface ReGeocode {
  adCode: string

  /**
   * 详细地址
   */
  address?: string

  /**
   * 国家
   */
  country?: string

  /**
   * 省份
   */
  province?: string

  /**
   * 城市
   */
  city?: string

  /**
   * 城市编码
   */
  cityCode?: string

  /**
   * 地区
   */
  district?: string

  /**
   * 街道
   */
  street?: string

  /**
   * 门牌号
   */
  streetNumber?: string

  /**
   * 兴趣点
   */
  poiName?: string
}
