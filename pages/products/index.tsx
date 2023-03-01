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
  Title, ThemeIcon
} from "@mantine/core";
import {NewsItem} from "@/components/NewsItems/NewsItem";
import { SmallNewsItem } from "@/components/NewsItems/SmallNewsItem";
import PublicLayout from "@/layouts/PublicLayout";
import {MediumNewsItem} from "@/components/NewsItems/MediumNewsItem";
import {animated, easings, useInView, useSpring, useTrail} from "@react-spring/web";
import React from "react";
import {AnimatedList} from "@/components/List";
import {MdDesignServices, MdRecordVoiceOver, MdHvac, MdOutlineBatteryChargingFull, MdAutoGraph} from "react-icons/md";
import Image from "next/image";
import BetterKiaPreviewImg from "../../public/img/better-kia-preview.png";
import BetterKiaSiriPreviewImg from "../../public/img/better-kia-siri-preview.png";
import BetterKiaLiveActivityPreviewImg from "../../public/img/better-kia-live-activity-preview.png";
import {IoChevronDown} from "react-icons/io5";

export default function NewLandingPage() {
  const [titleAnimationRef, titleAnimation] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        easing: easings.easeOutExpo,
        duration: 1500
      }
    }),
    {
      rootMargin: '0% 0%',
      once: true
    }
  )

  const descriptionAnim = useSpring(
      {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
        config: {
          easing: easings.easeOutExpo,
          duration: 1500,
        },
        delay: 300
      })

  const releaseInfoAnim = useSpring(
    {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      config: {
        easing: easings.easeOutExpo,
        duration: 1500,
      },
      delay: 500
    })

  const [proLabelAnimationRef, proLabelAnimation] = useInView(
    () => ({
      delay: 1500,
      from: {
        color: "#fff"
      },
      to: {
        color: "#1182ff"
      },
      config: {
        easing: easings.easeOutExpo,
        duration: 1500,
      }
    }),
    {
      rootMargin: '0% 0%',
      once: true
    }
  )

  const chevronDownAnim = useSpring(
    {
      from: {
        bottom: "4%"
      },
      to: [
        {
          bottom: "8%"
        },
        {
          bottom: "4%"
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

  return (
    <PublicLayout hoverNavbar={true}>
      <Container size="lg" sx={{minHeight: "100vh"}}>
        <Flex justify="space-between" align="center" sx={{minHeight: "100vh"}}>
          <Box sx={{maxWidth: "610px"}}>
            <animated.div ref={titleAnimationRef} style={titleAnimation}>
              <Title lh={1.2} style={{fontSize: 64}}>The <animated.span ref={proLabelAnimationRef} style={proLabelAnimation}>Pro</animated.span>-Upgrade for your Kia & Hyundai</Title>
            </animated.div>
            <animated.div style={descriptionAnim}>
              <Text my="xl" size="lg">
                Bring your Kia & Hyundai experience to the next level and unlock brand-new features you will love. Unlock your car using your favorite voice assistant, create more than two HVAC schedules or preventing your eyes from getting burnt by enabling the dark mode.
              </Text>
            </animated.div>
            <animated.div style={releaseInfoAnim}>
              <Text color="dimmed">Coming 2023 to iOS devices</Text>
            </animated.div>
          </Box>
          <Box style={{height: "70vh", width: "30%", position: "relative", overflow: "hidden"}}>
            <Image alt="BetterKia app preview" src={BetterKiaPreviewImg} fill={true} style={{objectFit: "contain"}} />
          </Box>
        </Flex>
      </Container>
      <animated.div style={{position: "absolute", left: "50%", ...chevronDownAnim}}>
        <IoChevronDown size={32} />
      </animated.div>
      <Container size="xl">
        <SimpleGrid cols={2}>
          <Box p="xl" pb={0} sx={{width: "100%", background: "#2F58CD", borderRadius: "16px"}}>
            <Title order={2}>Siri Integration</Title>
            <Text style={{color: "#bebebe"}}>Easily check the status or control your car</Text>
            <Flex justify="center" sx={{width: "100%"}}>
              <Box style={{height: "350px", width: "70%", position: "relative", overflow: "hidden"}}>
                <Image alt="BetterKia app preview" src={BetterKiaSiriPreviewImg} fill={true} style={{objectFit: "cover", objectPosition: "50% 0%"}} />
              </Box>
            </Flex>
          </Box>
          <Flex p="xl" sx={{width: "100%", background: "#21262d", borderRadius: "16px"}} direction="column"
                justify="space-between">
            <Box>
              <Title order={2}>Always Up-To-Date</Title>
              <Text style={{color: "#bebebe"}}>View charging information at a glance</Text>
            </Box>
            <Flex justify="center" align="end" sx={{width: "100%"}}>
              <Box style={{height: "300px", width: "70%", position: "relative", overflow: "hidden"}}>
                <Image alt="BetterKia app preview" src={BetterKiaLiveActivityPreviewImg} fill={true} style={{objectFit: "cover", objectPosition: "50% 94%"}} />
              </Box>
            </Flex>
          </Flex>
        </SimpleGrid>

        <Text color="dimmed" size="sm" align="center" mt={120}>
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