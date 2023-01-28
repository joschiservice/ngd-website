import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from "next-auth/react";
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../rtl-cache';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}
        emotionCache={rtlCache}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}
