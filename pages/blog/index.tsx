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
import {Post} from "@/models/Post";
import {NewsItem} from "@/components/NewsItems/NewsItem";
import { SmallNewsItem } from "@/components/NewsItems/SmallNewsItem";
import PublicLayout from "@/layouts/PublicLayout";
import {MediumNewsItem} from "@/components/NewsItems/MediumNewsItem";

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
    <PublicLayout hoverNavbar={false}>
      <Container size="xl">
        <NewsItem post={posts[0]} />
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
    </PublicLayout>
  )
}