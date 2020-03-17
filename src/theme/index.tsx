/**
 * Created: 2020-01-10 13:13
 * Author : biu
 * Email  : hezhou920@gmail.com
 * -----
 * Description: 定义主题，主题目前仅包括颜色和图标
 */

import React, { useState } from 'react'

import defaultTheme from './default'
import dark from './dark'

export interface Theme {
  colors: {
    [protities: string]: string
  }
}
interface Themes {
  [protities: string]: Theme
}
interface Props {
  children: React.ReactNode
}
interface ContextValue {
  theme: Theme
  themeName: string
  changeTheme: (key: string) => void
}

const themes: Themes = {
  default: defaultTheme,
  dark,
}

export const addTheme = (key: string, value: Theme) => (themes[key] = value)

export const ThemeContext = React.createContext<ContextValue>({
  theme: themes.default,
  themeName: 'default',
  changeTheme: () => { }
})

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, changeTheme] = useState('default')
  return (
    <ThemeContext.Provider
      value={{ theme: themes[theme], themeName: theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
