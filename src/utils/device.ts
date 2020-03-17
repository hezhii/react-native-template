/**
 * 屏幕适配工具类。
 *
 * 设计稿基于 iPhone 6（375*667，2 倍图） 设计
 */
import {
  Platform,
  Dimensions,
  PixelRatio,
  StatusBar,
  ViewStyle,
} from 'react-native'

// iPhone X、iPhone XS
const X_WIDTH = 375
const X_HEIGHT = 812

// iPhone XR、iPhone XS Max
const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

// UI 尺寸
const UI_WIDTH = 375

export const DEVICE_SIZE = Dimensions.get('window')
const { height: D_HEIGHT, width: D_WIDTH } = DEVICE_SIZE

export const IS_IOS = Platform.OS === 'ios'

export const IS_ANDROID = Platform.OS === 'android'

export const IS_IPHONEX =
  IS_IOS &&
  ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
    (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT) ||
    (D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
    (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))

export const ifiPhoneX = (iPhoneXStyle: ViewStyle, regularStyle: ViewStyle) =>
  IS_IPHONEX ? iPhoneXStyle : regularStyle

// iphonex 顶部 44 ，底部 34
export const STATUS_BAR_HEIGHT: number = IS_IOS
  ? IS_IPHONEX
    ? 44
    : 20
  : StatusBar.currentHeight || 0

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
