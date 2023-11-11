import { BsFillLightningChargeFill } from "react-icons/bs";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Box, Container, Divider, Flex, MantineProvider, Space, Stack, Text, Title } from "@mantine/core";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
import Head from "next/head";
import { useState } from "react";
import { BRAND_NAME, IS_BLOG_ENABLED } from "@/config";
import {rtlCache} from "@/rtl-cache";

interface Props {
  children: any,
  hoverNavbar?: boolean,

  title: string,
}

const FOOTER_ICON_SIZE = 26;

const DATA = {
  slogan: "Creating amazing solutions for the electrified driving experience.",
  navBarItems: [
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
      href: "/legal/imprint"
    }
  ],
  footerNavItems: [
    {
      title: "Blog",
      href: "/blog",
      isDisabled: !IS_BLOG_ENABLED
    },
    {
      title: "Privacy",
      href: "/legal/privacy",
    },
    {
      title: "Imprint",
      href: "/legal/imprint"
    }
  ],
  socialLinks: [
    {
      icon: <FaInstagram size={FOOTER_ICON_SIZE} />,
      href: "https://instagram.com/ngdrive"
    }
  ]
}

function HamburgerMenu({ items }: { items: { id: string, title: string, href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter();

  function toogleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Box>
        <RxHamburgerMenu style={{ fontSize: 28, color: "white" }} onClick={toogleMenu} />
      </Box>
      {
        isOpen ?
          <Box p={18} style={{ minHeight: "100vh", minWidth: "100vw", zIndex: 40, position: "fixed", top: 0, left: 0, backgroundColor: "rgba(0,0,0,1)" }}>
            <Flex justify="space-between" style={{ minWidth: "100%" }}>
              <BsFillLightningChargeFill className={styles.neonLogo} style={{ fontSize: 28 }} />
              <MdClose style={{ fontSize: 28, color: "white" }} onClick={toogleMenu} />
            </Flex>
            <Stack spacing="xl" mt={35}>
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

export default function PublicLayout({ children, title, hoverNavbar = true }: Props) {
  const router = useRouter();
  const [navItems] = useState(DATA.navBarItems.filter(item => item.isDisabled === undefined || !item.isDisabled));

  const [footerNavItems] = useState(DATA.footerNavItems.filter(item => item.isDisabled === undefined || !item.isDisabled))

  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
      emotionCache={rtlCache}
    >
      <Head>
        <title>{`${title} | ${BRAND_NAME}`}</title>
        <meta name="theme-color" content="#000000" />
      </Head>
      <div style={{ background: "black" }}>
        <div style={{ width: "100vw", padding: 18, display: "flex", justifyContent: "space-between", position: hoverNavbar ? "absolute" : "relative", zIndex: 2 }}>
          <Link href="/">
            <BsFillLightningChargeFill className={styles.neonLogo} style={{ fontSize: 28 }} />
          </Link>
          <div>
            {
              isSmallDevice ? <HamburgerMenu items={navItems} /> :
                navItems.map(navItem =>
                  <Link key={navItem.id} href={navItem.href} className={styles.navLink}
                    style={navItem.href == router.pathname ? { opacity: 1 } : {}}>
                    {navItem.title}
                  </Link>
                )
            }
          </div>
          {isSmallDevice ? null : <div />}
        </div>
        {children}
        <Container size="xl">
          <Space h={isSmallDevice ? 60 : 120} />
          <Box>
            <Flex align="center">
              <BsFillLightningChargeFill style={{ fontSize: 28, color: '#cc910a' }} />
              <Title pr="sm" order={2}>{BRAND_NAME}</Title>
            </Flex>
            <Text mt="sm" color="dimmed" size="md">
              {DATA.slogan}
            </Text>
          </Box>
          <Flex mt={28} gap={28}>
            {
              footerNavItems.map((item, index) =>
                <Link key={`footer-${index}`} href={item.href}>
                  <Text color="white">{item.title}</Text>
                </Link>
              )
            }
          </Flex>
          <Divider mt={28} />
          <Flex py={32} style={{ justifyContent: "space-between" }}>
            <Text>© 2023 {BRAND_NAME}</Text>
            <Flex gap="md">
              {
                DATA.socialLinks.map((item, index) =>
                  <Link key={`footer-social-${index}`} href={item.href}>
                    {item.icon}
                  </Link>
                )
              }
            </Flex>
          </Flex>
        </Container>
      </div>
    </MantineProvider>
  )
}