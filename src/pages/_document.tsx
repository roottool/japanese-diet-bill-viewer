import { CssBaseline } from '@nextui-org/react'
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from 'next/document'
import { Children } from 'react'

const { flush } = CssBaseline
class Document extends NextDocument {
  static override async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: Children.toArray([initialProps.styles]),
    }
  }

  override render() {
    return (
      <Html lang="en">
        <Head>{flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
