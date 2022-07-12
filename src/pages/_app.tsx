import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react'

import Header from '@/components/layouts/Header'
import { darkTheme, lightTheme } from '@/styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Header />
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </StrictMode>
  )
}

export default App
