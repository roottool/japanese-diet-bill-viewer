import type { SwitchEvent } from '@nextui-org/react'
import { useCallback } from 'react'

import { useAppTheme } from '@/hooks/useAppTheme'

export const useHeader = () => {
  const { isDarkMode, toggleAppTheme } = useAppTheme()
  const handleAppThemeSwitchPress = useCallback(
    (event: SwitchEvent) => {
      const themeType = event.target.checked ? 'dark' : 'light'
      toggleAppTheme(themeType)
    },
    [toggleAppTheme],
  )
  return { isDarkMode, handleAppThemeSwitchPress }
}
