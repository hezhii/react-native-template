import { useContext } from 'react'

import { ThemeContext } from '../theme/index'

const userThemeContext = () => {
  return useContext(ThemeContext)
}

export default userThemeContext
