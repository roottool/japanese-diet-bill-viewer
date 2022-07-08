import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'

import { lightTheme } from '@/styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default App
