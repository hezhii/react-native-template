/**
 * Created: 2020-01-10 13:13
 * Author : biu
 * Email  : hezhou920@gmail.com
 * -----
 * Description: 定义主题，主题目前仅包括颜色和图标
 */

import React, { useState } from 'react'

import defaultTheme from './default'

const themes = {
  default: defaultTheme,
}

export const addTheme = (key, value) => (themes[key] = value)

export const ThemeContext = React.createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, changeTheme] = useState('default')
  return (
    <ThemeContext.Provider
      value={{ theme: themes[theme], themeName: theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
