import Head from 'next/head'
import { Open_Sans } from '@next/font/google'
import PublicLayout from "@/layouts/PublicLayout";
import {Box, Title} from "@mantine/core";

const roboto = Open_Sans({
  weight: '700',
  subsets: ['latin'],
})

const robotoText = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function Imprint() {
  return (
    <PublicLayout title="Imprint" hoverNavbar={false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mx="xl" sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className={robotoText.className} style={{maxWidth: "800px"}}>
          <Title order={1} style={{marginBottom: "8px"}}>Imprint/Legal Disclosure</Title>
          <p>
            Information in accordance with Section 5 TMG.<br/>
            <br/>
            Website Operator: Joschua Haß<br/>
            <br/>
            To Westen 5<br/>
            25770 Hemmingstedt, Germany<br/>
          </p>
          <Title order={2} style={{marginBottom: "6px", marginTop: "16px"}}>Contact Information</Title>
          <p>
            Telephone: +49 151 22562454<br/>
            E-Mail: joschua.hass.sh@gmail.com<br/>
          </p>
          <Title order={2} style={{marginBottom: "6px", marginTop: "16px"}}>Copyright</Title>
          <p>
            Our web pages and their contents are subject to German copyright law.
            Unless expressly permitted by law, every form of utilizing,
            reproducing or processing works subject to copyright protection on our web pages requires the
            prior consent of the respective owner of the rights. Individual reproductions of a work are only
            allowed for private use. The materials from these pages are copyrighted and any unauthorized use
            may violate copyright laws.
          </p>
        </div>
      </Box>
    </PublicLayout>
  )
}
