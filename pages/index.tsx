import Head from 'next/head'
import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useSpring, animated, easings } from '@react-spring/web'
import backgroundImage from '../public/img/charging-stations.jpg'
import {BsFillLightningChargeFill} from "react-icons/bs"
import Link from "next/link";
import {signIn} from "next-auth/react";

const roboto = Open_Sans({
  weight: '700',
  subsets: ['latin'],
})

const roboto2 = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

const navLinkFont = Open_Sans({
  weight: '300',
  subsets: ['latin'],
})

export default function Home() {
  const springs = useSpring({
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0 },
    config: {
      easing: easings.easeOutExpo,
      duration: 1500
    }
  })

  return (
    <>
      <Head>
        <title>NextGen Drive</title>
        <meta name="description" content="We are building amazing products for people, who want to get more of their (electric) vehicles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
      </Head>
      <main className={styles.main} style={{position: "relative"}}>
        <Image src={backgroundImage} alt="Charging stations" fill={true} style={{objectFit: "cover"}}/>
        <div style={{position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", top: "25%", marginRight: "8px", marginLeft: "8px"}}>
          <animated.div style={{textAlign: "center", ...springs}}>
            <h1 className={roboto.className + " " + styles.title}>Hold tight! We are juicing up our 🔋</h1>
            <p className={roboto2.className} style={{opacity: 0.8}}>We are currently actively developing this website to reveal our plans to the world.</p>
          </animated.div>
        </div>
        <div style={{position: "absolute", bottom: 0, width: "100vw", padding: 18, display: "flex", justifyContent: "space-between"}}>
          <BsFillLightningChargeFill className={styles.neonLogo} style={{fontSize: 28}} />
          <div>
            <Link href={"/imprint"} className={navLinkFont.className + " " + styles.navLink}>Imprint</Link>
          </div>
        </div>
      </main>
    </>
  )
}
