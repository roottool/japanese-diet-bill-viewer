import type { SwitchEvent } from '@nextui-org/react'
import { useCallback } from 'react'

import { useAppTheme } from '@/hooks/useAppTheme'

export const useHeader = () => {
  const { isDarkMode, setAppTheme } = useAppTheme()
  const handleAppThemeTypeSwitchClick = useCallback(
    (event: SwitchEvent) =>
      setAppTheme(event.target.checked ? 'dark' : 'light'),
    [setAppTheme],
  )
  return { isDarkMode, handleAppThemeTypeSwitchClick }
}
