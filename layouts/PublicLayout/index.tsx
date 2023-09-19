import {BsFillLightningChargeFill} from "react-icons/bs";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {Box, Container, Divider, Flex, SimpleGrid, Space, Stack, Text, Title} from "@mantine/core";
import {FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import {RxHamburgerMenu} from "react-icons/rx";
import {MdClose} from "react-icons/md";
import {useRouter} from "next/router";
import {useMediaQuery} from "@mantine/hooks";
import Head from "next/head";
import {useEffect, useState} from "react";
import {BRAND_NAME, IS_BLOG_ENABLED} from "@/config";

interface Props {
  children: any,
  hoverNavbar?: boolean,

  title: string,
}

const NAV_ITEMS = [
  {
    id: "home",
    title: "Home",
    href: "/"
  },
  {
    id: "ng_one",
    title: "NG 001",
    href: "/products/ng-one"
  },
  {
    id: "sparky",
    title: "Sparky",
    href: "/products/sparky"
  },
  {
    id: "blog",
    title: "Blog",
    href: "/blog",
    isDisabled: !IS_BLOG_ENABLED
  },
  {
    id: "imprint",
    title: "Imprint",
    href: "/imprint"
  }
]

function HamburgerMenu({items}: { items: { id: string, title: string, href: string }[]}) {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter();

  function toogleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <RxHamburgerMenu style={{fontSize: 28, color: "white"}} onClick={toogleMenu} />
      {
        isOpen ?
          <Box p="xl" style={{minHeight: "100vh", minWidth: "100vw", zIndex: 40, position: "fixed", top: 0, left: 0, backgroundColor: "rgba(0,0,0,1)"}}>
            <Flex justify="end" style={{minWidth: "100%"}}>
              <MdClose style={{fontSize: 28, color: "white"}} onClick={toogleMenu} />
            </Flex>
            <Stack spacing="xl" mt="xl">
              {
                items.map(navItem =>
                  <Link key={navItem.id} href={navItem.href} className={styles.navLink}
                        style={navItem.href == router.pathname ? { opacity: 1 } : {}}>
                    {navItem.title}
                  </Link>
                )
              }
            </Stack>
          </Box> : null
      }
    </>
  )
}

export default function PublicLayout({children, title, hoverNavbar = true}: Props) {
  const router = useRouter();
  const [navItems] = useState<{
    id: string;
    title: string;
    href: string;
    isDisabled?: boolean;
}[]>(NAV_ITEMS.filter(item => item.isDisabled === undefined || !item.isDisabled));

  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  return (
    <>
      <Head>
        <title>{`${title} | ${BRAND_NAME}`}</title>
        <meta name="theme-color" content="#000000" />
      </Head>
      <div style={{background: "black"}}>
        <div style={{width: "100vw", padding: 18, display: "flex", justifyContent:  "space-between", position: hoverNavbar ? "absolute" : "relative", zIndex: 2}}>
          <BsFillLightningChargeFill className={styles.neonLogo} style={{fontSize: 28}} />
          <div>
            {
              isSmallDevice ? <HamburgerMenu items={navItems}/> :
                navItems.map(navItem =>
                <Link key={navItem.id} href={navItem.href} className={styles.navLink}
                      style={navItem.href == router.pathname ? { opacity: 1 } : {}}>
                  {navItem.title}
                </Link>
              )
            }
          </div>
          { isSmallDevice ? null : <div />}
        </div>
        {children}
        <Container size="xl">
          <Space h={isSmallDevice ? 60 : 120} />
          <Box>
            <Flex align="center">
              <BsFillLightningChargeFill style={{fontSize: 28, color: '#cc910a'}} />
              <Title pr="sm" order={2}>{BRAND_NAME}</Title>
            </Flex>
            <Text mt="sm" color="dimmed" size="md">
              Creating amazing solutions for the electrified driving experience.
            </Text>
          </Box>
          <Flex mt={28} gap={28}>
            <Link href="/products">
              <Text color="white">Products</Text>
            </Link>
            <Link href="/blog">
              <Text color="white">Blog</Text>
            </Link>
            <Link href="/privacy">
              <Text color="white">Privacy</Text>
            </Link>
            <Link href="/imprint">
              <Text color="white">Imprint</Text>
            </Link>
          </Flex>
          <Divider mt={28} />
          <Flex py={32} style={{justifyContent: "space-between"}}>
            <Text>© 2023 {BRAND_NAME}</Text>
            <Flex gap="md">
              { /* <FaTwitter size={FOOTER_ICON_SIZE} /> */ }
              <Link href="https://instagram.com/ngdrive">
                <FaInstagram size={FOOTER_ICON_SIZE} />
              </Link>
              { /*<FaGithub size={FOOTER_ICON_SIZE} />*/ }
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  )
}

const FOOTER_ICON_SIZE = 26;