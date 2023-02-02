import styles from "@/styles/Home.module.css";
import {BsFillLightningChargeFill} from "react-icons/bs";
import Link from "next/link";
import {
  Accordion,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title
} from "@mantine/core";

export default function NewLandingPage() {
  return (
    <div style={{background: "black"}}>
      <div style={{width: "100vw", padding: 18, display: "flex", justifyContent: "space-between"}}>
        <BsFillLightningChargeFill className={styles.neonLogo} style={{fontSize: 28}} />
        <div>
          <Link href={"/"} className={styles.navLink}>Home</Link>
          <Link href={"/blog"} className={styles.navLink}>Blog</Link>
          <Link href={"/imprint"} className={styles.navLink}>Imprint</Link>
        </div>
        <div />
      </div>
      <Container size={1300}>
        <Box display="flex" p="xl" sx={{background: "#212121", height: "60vh", flexDirection: "column", justifyContent: "space-between"}}>
          <Box />
          <Box style={{maxWidth: "650px"}}>
            <Title order={1}>Using the private Kia API <span style={{color: "#797979"}}>Kia, when will you make our life easier?</span></Title>
            <Text size="sm" my="lg" color="dimmed">by Joschua Haß - January 30, 2023 - 2 minute read</Text>
          </Box>
        </Box>
        <Space h="xl" />
        <SimpleGrid cols={3}>
          <Box display="flex" p="xl" sx={{background: "#212121", height: "60vh", flexDirection: "column", justifyContent: "space-between"}}>
            <Box />
            <Box style={{maxWidth: "650px"}}>
              <Title order={2}>Using the private Kia API <span style={{color: "#797979"}}>Kia, when will you make our life easier?</span></Title>
              <Text size="sm" my="lg" color="dimmed">by Joschua Haß - January 30, 2023 - 2 minute read</Text>
            </Box>
          </Box>
          <Box display="flex" p="xl" sx={{background: "#212121", height: "60vh", flexDirection: "column", justifyContent: "space-between"}}>
            <Box />
            <Box style={{maxWidth: "650px"}}>
              <Title order={2}>Using the private Kia API <span style={{color: "#797979"}}>Kia, when will you make our life easier?</span></Title>
              <Text size="sm" my="lg" color="dimmed">by Joschua Haß - January 30, 2023 - 2 minute read</Text>
            </Box>
          </Box>
          <Box display="flex" p="xl" sx={{background: "#212121", height: "60vh", flexDirection: "column", justifyContent: "space-between"}}>
            <Box />
            <Box style={{maxWidth: "650px"}}>
              <Title order={2}>Using the private Kia API <span style={{color: "#797979"}}>Kia, when will you make our life easier?</span></Title>
              <Text size="sm" my="lg" color="dimmed">by Joschua Haß - January 30, 2023 - 2 minute read</Text>
            </Box>
          </Box>
        </SimpleGrid>
        <Space h={42} />
        <SimpleGrid cols={2}>
          <SmallNewsItem />
          <SmallNewsItem />
          <SmallNewsItem />
          <SmallNewsItem />
          <SmallNewsItem />
        </SimpleGrid>
      </Container>
    </div>
  )
}

function SmallNewsItem() {
  return (
    <Box display="flex" style={{alignItems: "center"}}>
      <Box style={{height: "200px", width: "100%", background: "#212121"}} />
      <Box mx="xl" style={{}}>
        <Title order={3}>Using the private Kia API <span style={{color: "#797979"}}>Kia, when will you make our life easier?</span></Title>
        <Text size="sm" my="sm" color="dimmed">by Joschua Haß - January 30, 2023</Text>
      </Box>
    </Box>
  )
}