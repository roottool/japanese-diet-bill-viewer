import { createTheme } from '@nextui-org/react'

import darkTokens from '@/styles/tokens/darkTokens'
import lightTokens from '@/styles/tokens/lightTokens'

export const lightTheme = createTheme({
  type: 'light',
  ...lightTokens,
})

export const darkTheme = createTheme({
  type: 'dark',
  ...darkTokens,
})
