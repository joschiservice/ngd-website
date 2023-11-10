import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from "next-auth/react";
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../rtl-cache';
import {useRouter} from "next/router";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>

        <Component {...pageProps} />
    </SessionProvider>
  );
}
