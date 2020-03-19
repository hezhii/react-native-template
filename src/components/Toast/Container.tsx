import React, { useState, useEffect, memo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
  Image,
} from 'react-native'

import useThemeContext from '../../hooks/useThemeContext'

export type ToastType = 'info' | 'success' | 'fail' | 'loading'

interface Props {
  title: string
  type: ToastType
  content?: string
  duration?: number
  mask?: boolean
  onClose?: () => void
  onAnimationEnd?: () => void
}

const ICONS = {
  success: require('../../assets/icons/success.png'),
  fail: require('../../assets/icons/fail.png'),
}

const ToastContainer = memo((props: Props) => {
  const {
    mask = false,
    duration = 2,
    type = 'info',
    title,
    content,
    onClose,
    onAnimationEnd,
  } = props
  const [fadeAnim] = useState(new Animated.Value(0))
  const { theme } = useThemeContext()

  useEffect(() => {
    let anim: null | Animated.CompositeAnimation = null
    const timing = Animated.timing
    const animArr = [
      // show toast
      timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(duration * 1000),
    ]
    if (duration > 0) {
      // hide toast after delay
      animArr.push(
        timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      )
    }
    anim = Animated.sequence(animArr)
    anim.start(() => {
      if (duration > 0) {
        anim = null
        if (onClose) {
          onClose()
        }
        if (onAnimationEnd) {
          onAnimationEnd()
        }
      }
    })

    return () => {
      if (anim) {
        anim.stop()
        anim = null
      }
    }
  }, [])

  let iconDom = null
  if (type === 'loading') {
    iconDom = (
      <ActivityIndicator
        animating
        style={styles.icon}
        color={theme.colors.text_color}
        size="large"
      />
    )
  } else if (type === 'info') {
    iconDom = null
  } else {
    iconDom = <Image source={ICONS[type]} style={styles.icon} />
  }

  return (
    <View
      style={styles.container}
      pointerEvents={mask ? undefined : 'box-none'}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.innerWrap}>
          {iconDom}
          <Text style={[styles.title, { color: theme.colors.toast_title }]}>
            {title}
          </Text>
          {content && (
            <Text
              style={[styles.content, { color: theme.colors.toast_content }]}>
              {content}
            </Text>
          )}
        </View>
      </Animated.View>
    </View>
  )
})

export default ToastContainer

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 80,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  innerWrap: {
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: 213,
    borderRadius: 8,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  content: {
    marginTop: 10,
    lineHeight: 20,
    textAlign: 'center',
  },
})
