import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../rtl-cache';
import {useRouter} from "next/router";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
