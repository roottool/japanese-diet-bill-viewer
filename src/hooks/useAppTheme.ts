import { useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'

export const useAppTheme = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  const isDarkMode = isDark ?? false
  return {
    isDarkMode,
    currentThemeType: type,
    setAppTheme: setTheme,
  }
}
