import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import {createGetInitialProps, createStylesServer, ServerStyles} from '@mantine/next';
import {rtlCache} from "@/rtl-cache";

const getInitialProps = createGetInitialProps();

const stylesServer = createStylesServer(rtlCache);

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
