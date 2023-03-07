import {BsFillLightningChargeFill} from "react-icons/bs";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {Box, Container, Divider, Flex, SimpleGrid, Space, Text, Title} from "@mantine/core";
import {FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import {useRouter} from "next/router";
import {useMediaQuery} from "@mantine/hooks";
import Head from "next/head";

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
    id: "products",
    title: "Products",
    href: "/products"
  },
  {
    id: "blog",
    title: "Blog",
    href: "/blog"
  },
  {
    id: "imprint",
    title: "Imprint",
    href: "/imprint"
  }
]

export default function PublicLayout({children, title, hoverNavbar = true}: Props) {
  const router = useRouter();

  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  return (
    <>
      <Head>
        <title>{title} | NextGen Drive</title>
        <meta name="theme-color" content="#000000" />
      </Head>
      <div style={{background: "black"}}>
        <div style={{width: "100vw", padding: 18, display: "flex", justifyContent: "space-between", position: hoverNavbar ? "absolute" : "relative", zIndex: 2}}>
          <BsFillLightningChargeFill className={styles.neonLogo} style={{fontSize: 28}} />
          <div>
            {
              NAV_ITEMS.map(navItem =>
                <Link key={navItem.id} href={navItem.href} className={styles.navLink}
                      style={navItem.href == router.pathname ? { opacity: 1 } : {}}>
                  {navItem.title}
                </Link>
              )
            }
          </div>
          <div />
        </div>
        {children}
        <Container size="xl">
          <Space h={isSmallDevice ? 60 : 120} />
          <Box>
            <Flex align="center">
              <BsFillLightningChargeFill style={{fontSize: 28, color: '#cc910a'}} />
              <Title pr="sm" order={2}>NextGen Drive</Title>
            </Flex>
            <Text mt="sm" color="dimmed" size="md">
              Creating amazing solutions for the electrified driving experience.
            </Text>
          </Box>
          <Flex mt={28} gap={28}>
            <Text color="white">Products</Text>
            <Text color="white">Blog</Text>
            <Text color="white">Privacy</Text>
            <Text color="white">Imprint</Text>
          </Flex>
          <Divider mt={28} />
          <Flex py={32} style={{justifyContent: "space-between"}}>
            <Text>© 2023 NextGen Drive</Text>
            <Flex gap="md">
              <FaTwitter size={FOOTER_ICON_SIZE} />
              <FaInstagram size={FOOTER_ICON_SIZE} />
              <FaGithub size={FOOTER_ICON_SIZE} />
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  )
}

const FOOTER_ICON_SIZE = 26;