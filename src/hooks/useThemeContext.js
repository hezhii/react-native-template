import { useContext } from 'react'

import { ThemeContext } from '../theme/index'

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export default useThemeContext
