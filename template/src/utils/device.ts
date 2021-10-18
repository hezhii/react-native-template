/**
 * 屏幕适配工具类。
 *
 * 设计稿基于 iPhone 6（375*667，2 倍图） 设计
 */
import {
  Platform,
  Dimensions,
  PixelRatio,
} from 'react-native'

// UI 尺寸
const UI_WIDTH = 375

export const DEVICE_SIZE = Dimensions.get('window')
const { width: D_WIDTH } = DEVICE_SIZE

export const IS_IOS = Platform.OS === 'ios'

export const IS_ANDROID = Platform.OS === 'android'

export const HEADER_HEIGHT = 44

/**
 * UI 适配，将设计稿上的 px 等比转换为 rn 中的 dp。字体的转换还考虑系统字体的设置
 */

// 获取屏幕缩放比例
const radio = D_WIDTH / UI_WIDTH

// 字体大小缩放比例
const fontRadio = PixelRatio.getFontScale()

// 大小转换
export const scaleSize = (size: number) => Math.round(size * radio)

// 字体转换
export const scaleText = (size: number) => Math.round(size * radio * fontRadio)
