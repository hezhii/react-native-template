import { useEffect } from 'react'
import { StatusBar } from 'react-native'

const useStatusBar = (navigation, barStyle) => {
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
