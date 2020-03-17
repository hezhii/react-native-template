import { useEffect } from 'react'
import { StatusBar, StatusBarStyle } from 'react-native'

const useStatusBar = (navigation: any, barStyle: StatusBarStyle) => {
  useEffect(() => {
    const onWillFocus = () => {
      StatusBar.setBarStyle(barStyle)
    }

    StatusBar.setBarStyle(barStyle)

    const listener = navigation.addListener('willFocus', onWillFocus)

    return () => listener.remove()
  }, [])
}

export default useStatusBar
