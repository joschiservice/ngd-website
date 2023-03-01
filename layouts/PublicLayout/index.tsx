import {BsFillLightningChargeFill} from "react-icons/bs";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {Box, Container, Divider, Flex, SimpleGrid, Space, Text, Title} from "@mantine/core";
import {FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";

interface Props {
  children: any,
  hoverNavbar?: boolean,
}

export default function PublicLayout({children, hoverNavbar = true}: Props) {
  return (
    <div style={{background: "black"}}>
      <div style={{width: "100vw", padding: 18, display: "flex", justifyContent: "space-between", position: hoverNavbar ? "absolute" : "relative", zIndex: 2}}>
        <BsFillLightningChargeFill className={styles.neonLogo} style={{fontSize: 28}} />
        <div>
          <Link href={"/"} className={styles.navLink}>Home</Link>
          <Link href={"/products"} className={styles.navLink}>Products</Link>
          <Link href={"/blog"} className={styles.navLink}>Blog</Link>
          <Link href={"/imprint"} className={styles.navLink}>Imprint</Link>
        </div>
        <div />
      </div>
      {children}
      <Container size="xl">
        <Space h={120} />
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
  )
}

const FOOTER_ICON_SIZE = 26;