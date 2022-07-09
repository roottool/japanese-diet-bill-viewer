import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react'

import { lightTheme } from '@/styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <NextUIProvider theme={lightTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </StrictMode>
  )
}

export default App
