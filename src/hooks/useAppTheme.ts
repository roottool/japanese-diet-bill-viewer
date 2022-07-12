import { type ThemeType, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { useCallback } from 'react'

const useAppTheme = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  const isDarkMode = isDark ?? false
  const toggleAppTheme = useCallback(
    (themeType: ThemeType) => setTheme(themeType),
    [setTheme],
  )
  return {
    isDarkMode,
    currentThemeType: type,
    toggleAppTheme,
  }
}

export default useAppTheme
