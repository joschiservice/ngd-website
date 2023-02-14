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

import KiaEv6DriftImage from "../../public/img/2023-ev6-gt-action-1660755931.jpg";
import TeslaAutopilotImage from "../../public/img/tesla-model-s-autopilot-software-70.jpeg";
import RivianR1TImage from "../../public/img/RivianR1T.jpeg";
import FreewireImage from "../../public/img/FreewireChargingStation.jpeg"
import Image from "next/image";

interface Post {
  id: number;

  title: string;

  subtitle: string;

  published: Date,

  readTime: number,

  author: {
    firstName: string;

    lastName: string;
  },

  imageUrl: string;

  objectPosition?: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Using the private Kia API",
    subtitle: "Kia, when will you make our life easier?",
    author: {
      firstName: "NextGen",
      lastName: "Drive"
    },
    published: new Date(2022, 1, 3),
    readTime: 2,
    imageUrl: KiaEv6DriftImage.src
  },
  {
    id: 2,
    title: "Tesla works on v4 Hardware",
    subtitle: "Autopilot gettin' spicy",
    author: {
      firstName: "NextGen",
      lastName: "Drive"
    },
    published: new Date(2022, 1, 9),
    readTime: 4,
    imageUrl: TeslaAutopilotImage.src
  },
  {
    id: 3,
    title: "Rivian suffers from production difficulties",
    subtitle: "God save the Rivian",
    author: {
      firstName: "NextGen",
      lastName: "Drive"
    },
    published: new Date(2022, 1, 7),
    readTime: 2,
    imageUrl: RivianR1TImage.src,
    objectPosition: "0% 50%"
  },
  {
    id: 4,
    title: "Freewire shows us how to not care about the grid",
    subtitle: "Juice 'em up",
    author: {
      firstName: "NextGen",
      lastName: "Drive"
    },
    published: new Date(2022, 0, 29),
    readTime: 6,
    imageUrl: FreewireImage.src,
    objectPosition: "0% 50%"
  }
]

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
        <HeaderNewsItem post={posts[0]} />
        <Space h="xl" />
        <SimpleGrid cols={3}>
          <MediumNewsItem post={posts[1]} />
          <MediumNewsItem post={posts[2]} />
          <MediumNewsItem post={posts[3]} />
        </SimpleGrid>
        <Space h={42} />
        <SimpleGrid cols={2}>
          {
            posts.map((post) => <SmallNewsItem key={post.id} post={post} />)
          }
        </SimpleGrid>
      </Container>
    </div>
  )
}

function SmallNewsItem({post}: NewsItemProps) {
  const authorName = `${post.author.firstName} ${post.author.lastName}`;
  const publishedDate = post.published.toDateString();

  return (
    <Box display="flex" style={{alignItems: "center"}}>
      <Box style={{height: "200px", width: "600px", position: "relative", overflow: "hidden"}}>
        <Image alt="news title image" src={post.imageUrl} fill={true} style={{objectFit: "cover", objectPosition: post.objectPosition}} />
      </Box>
      <Box px="xl" style={{width: "100%"}}>
        <Title order={3}>
          {post.title + ' '}
          <span style={{color: "#797979"}}>{post.subtitle}</span></Title>
        <Text size="sm" my="sm" color="dimmed">by {authorName} - {publishedDate}</Text>
      </Box>
    </Box>
  )
}

interface NewsItemProps {
  post: Post;
}
function HeaderNewsItem({post}: NewsItemProps) {
  const authorName = `${post.author.firstName} ${post.author.lastName}`;
  const publishedDate = post.published.toDateString();

  return (
    <Box display="flex" sx={{height: "60vh", position: "relative"}}>
      <Image alt="news title image" src={post.imageUrl} fill={true} style={{objectFit: "cover", objectPosition: "50% 50%"}} priority />
      <Box p="xl" sx={{background: "rgba(0,0,0,0.5)", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "end", zIndex: 2}}>
        <Box style={{maxWidth: "650px"}}>
          <Title order={1} style={{textShadow: "1px 1px 4px black"}}>
            {post.title + ' '}
            <span style={{color: "#b2b2b2", fontWeight: 400}}>{post.subtitle}</span>
          </Title>
          <Text size="sm" my="lg" color="#b2b2b2">by {authorName} - {publishedDate} - {post.readTime} minute read</Text>
        </Box>
      </Box>
    </Box>
  )
}

function MediumNewsItem({post}: NewsItemProps) {
  const authorName = `${post.author.firstName} ${post.author.lastName}`;
  const publishedDate = post.published.toDateString();

  return (
    <Box display="flex" sx={{height: "60vh", position: "relative"}}>
      <Image alt="news title image" src={post.imageUrl} fill={true} style={{objectFit: "cover", objectPosition: post.objectPosition}} priority />
      <Box p="xl" style={{background: "rgba(0,0,0,0.4)", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "end", zIndex: 2}}>
        <Box style={{maxWidth: "650px"}}>
          <Title order={2} style={{textShadow: "1px 1px 4px black"}}>
            {post.title + ' '}
            <span style={{color: "#b2b2b2", fontWeight: 400}}>{post.subtitle}</span>
          </Title>
          <Text size="sm" my="lg" color="#b2b2b2">by {authorName} - {publishedDate} - {post.readTime} minute read</Text>
        </Box>
      </Box>
    </Box>
  )
}