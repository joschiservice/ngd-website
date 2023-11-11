import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text
} from "@mantine/core";
import PublicLayout from "@/layouts/PublicLayout";
import {animated, easings, useSpring} from "@react-spring/web";
import React from "react";
import BetterKiaSiriPreviewImg from "../../public/img/better-kia-siri-preview.png";
import BetterKiaLiveActivityPreviewImg from "../../public/img/better-kia-live-activity-preview.png";
import BetterKiaDriveHistoryPreviewImg from "../../public/img/better-kia-drive-history-preview.png";
import BetterKiaHvacSchedulesPreviewImg from "../../public/img/better-kia-hvac-schedules.png"
import {IoChevronDown} from "react-icons/io5";
import {useMediaQuery} from "@mantine/hooks";
import {SparkyHero} from "@/components/heros/SparkyHero";
import {ImageFeatureCard} from "@/components/cards/ImageFeatureCard";

const PRODUCT_NAME = "Sparky";

const PAGE_CONFIG = {
  productHeadline: "The <highlight>Pro</highlight>-Upgrade for your Kia & Hyundai EV",
  productDescription: "Bring your Kia & Hyundai experience to the next level and unlock brand-new features you will love. Unlock your car using your favorite voice assistant, create more than two HVAC schedules or simply prevent your eyes from getting burnt by switching to the dark side (mode).",
  releaseInfo: "Coming 2024 to iOS devices",
  features: [
    {
      title: "Siri Integration",
      description: "Easily check the status or control your car",
      img: BetterKiaSiriPreviewImg,
      imgAlt: `${PRODUCT_NAME} Siri demo`,
      imgPosition: "50% 5%",
      imgHeightDesktop: 350,
      imgHeightMobile: 250,
      paddingBottom: false,
      color: "#2F58CD"
    },
    {
      title: "Always Up-To-Date",
      description: "View real-time charging information at a glance",
      img: BetterKiaLiveActivityPreviewImg,
      imgAlt: `${PRODUCT_NAME} charging live activity demonstration`,
      imgPosition: "50% 94%",
      imgHeightDesktop: 300,
      imgHeightMobile: 200,
      paddingBottom: undefined,
      color: "#21262d"
    },
    {
      title: "Driving History",
      description: "Get relevant information about your recent trips",
      imgAlt: "",
      img: BetterKiaDriveHistoryPreviewImg,
      imgPosition: "50% 18%",
      imgHeightDesktop: 300,
      imgHeightMobile: 200,
      paddingBottom: undefined,
      color: "#21262d"
    },
    {
      title: "Improved Schedules",
      description: "Don't be limited to just 2 schedules",
      imgAlt: "",
      img: BetterKiaHvacSchedulesPreviewImg,
      imgPosition: "50% 18%",
      imgHeightDesktop: 300,
      imgHeightMobile: 200,
      paddingBottom: undefined,
      color: "#21262d"
    }
  ],
  disclaimer: 
  <>
  All images were created in an early development build. These features are subject to change in terms of functionality and design. All rights reserved. <br/>
  Kia® and the Kia® logo are registered trademarks by the Kia Corporation. <br/>
  Hyundai® and the Hyundai® logo are registered trademarks by the Hyundai Motor Company.
  </>
}

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

  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  return (
    <PublicLayout title={PRODUCT_NAME} hoverNavbar={true}>
      <SparkyHero productName={PRODUCT_NAME} pageConfig={PAGE_CONFIG} />
      <animated.div style={{position: "absolute", left: 0, right: 0, marginRight: "auto", marginLeft: "auto", width: "20px", ...chevronDownAnim}}>
        <IoChevronDown size={32} />
      </animated.div>
      <Container size="xl">
        <SimpleGrid cols={isSmallDevice ? 1 : 2}>
          {
            PAGE_CONFIG.features.map((item, index) => 
            <ImageFeatureCard key={index} title={item.title} description={item.description} imgSrc={item.img} imgAlt={item.imgAlt} imgPosition={item.imgPosition} color={item.color} pb={item.paddingBottom} imgHeightDesktop={item.imgHeightDesktop} imgHeightMobile={item.imgHeightMobile} />)
          }
        </SimpleGrid>

        <Text color="dimmed" size={isSmallDevice ? "xs" : "sm"} align="center" mt={isSmallDevice ? 60 : 120}>
          {PAGE_CONFIG.disclaimer}
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