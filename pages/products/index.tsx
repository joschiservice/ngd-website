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
  List,
  Stack,
  Text,
  Title, ThemeIcon, MediaQuery
} from "@mantine/core";
import {NewsItem} from "@/components/Blog/NewsItems/NewsItem";
import { SmallNewsItem } from "@/components/Blog/NewsItems/SmallNewsItem";
import PublicLayout from "@/layouts/PublicLayout";
import {MediumNewsItem} from "@/components/Blog/NewsItems/MediumNewsItem";
import {animated, easings, useInView, useSpring, useTrail} from "@react-spring/web";
import React from "react";
import {AnimatedList} from "@/components/shared/List";
import {MdDesignServices, MdRecordVoiceOver, MdHvac, MdOutlineBatteryChargingFull, MdAutoGraph} from "react-icons/md";
import Image from "next/image";
import BetterKiaPreviewImg from "../../public/img/better-kia-preview.png";
import BetterKiaSiriPreviewImg from "../../public/img/better-kia-siri-preview.png";
import BetterKiaLiveActivityPreviewImg from "../../public/img/better-kia-live-activity-preview.png";
import {IoChevronDown} from "react-icons/io5";
import {useMediaQuery} from "@mantine/hooks";
import {ProductBanner} from "@/components/Products/ProductBanner";
import {FeatureCard} from "@/components/Products/FeatureCard";

export default function NewLandingPage() {
  const chevronDownAnim = useSpring(
    {
      from: {
        bottom: "0%"
      },
      to: [
        {
          bottom: "2%"
        },
        {
          bottom: "0%"
        }
      ],
      config: {
        easing: easings.easeInOutCubic,
        duration: 3000,
      },
      loop: true
    }
  )

  const FEATURE_ICON_SIZE = 26

  const hoverNavbar = !useMediaQuery('(max-width: 440px)');

  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  return (
    <PublicLayout title="BetterKia" hoverNavbar={true}>
      <ProductBanner />
      <animated.div style={{position: "absolute", left: "50%", ...chevronDownAnim}}>
        <IoChevronDown size={32} />
      </animated.div>
      <Container size="xl">
        <SimpleGrid cols={isSmallDevice ? 1 : 2}>
          <FeatureCard title="Siri Integration" description="Easily check the status or control your car"
                       imgSrc={BetterKiaSiriPreviewImg} imgAlt="BetterKia Siri demonstration"
                       imgPosition="50% 0%" color="#2F58CD" pb={false}
                       imgHeightDesktop={350} imgHeightMobile={250} />

          <FeatureCard title="Always Up-To-Date" description="View charging information at a glance"
                       imgSrc={BetterKiaLiveActivityPreviewImg} imgAlt="BetterKia charging live activity demonstration"
                       imgPosition="50% 94%" color="#21262d"
                       imgHeightDesktop={300} imgHeightMobile={200} />
        </SimpleGrid>

        <Text color="dimmed" size={isSmallDevice ? "xs" : "sm"} align="center" mt={isSmallDevice ? 60 : 120}>
          All images were created in an early development build. These features are subject to change in terms of functionality and design. All rights reserved. <br/>
          Kia® and the Kia® logo are registered trademarks by the Kia Corporation. <br/>
          Hyundai® and the Hyundai® logo are registered trademarks by the Hyundai Motor Company.
        </Text>
      </Container>
    </PublicLayout>
  )
}

interface FeaturesListItemProps {
  children: any,

  icon?: any
}

function FeaturesListItem({children, icon = null}: FeaturesListItemProps) {
  return (
    <Box sx={{fontSize: 24, fontWeight: 500}}>
      <Flex align="center" gap="sm">
        {icon}
        <Text>
          {children}
        </Text>
      </Flex>
    </Box>
  )
}