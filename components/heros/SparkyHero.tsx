import {Box, Container, Flex, MediaQuery, Text, Title} from "@mantine/core";
import {animated, easings, useSpring} from "@react-spring/web";
import Image from "next/image";
import BetterKiaPreviewImg from "@/public/img/better-kia-preview.png";
import React, { useState } from "react";

interface Props {
  productName: string;
  pageConfig: {
    productHeadline: string;
    productDescription: string;
    releaseInfo: string;
  };
}

export function SparkyHero({productName, pageConfig}: Props) {
  const headlineAnim = useSpring(
    {
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
        duration: 1500,
      },
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

  const headLineHightlightAnim = useSpring(
    {
      delay: 500,
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
    }
  )

  const [headlineContent] = useState(() => {
    const headLinePartsArray = pageConfig.productHeadline.split("<highlight>").map(part => part.split("</highlight>")).flat().filter(part => part.trim() !== '');
    return <>{headLinePartsArray[0]}<animated.span style={headLineHightlightAnim}>{headLinePartsArray[1]}</animated.span>{headLinePartsArray[2]}</>;
  });

  return (
    <Container size="lg" sx={{minHeight: "100vh"}}>
      {/* Desktop Variant */}
      <MediaQuery smallerThan="md" styles={{display: "none"}}>
        <Flex justify="space-between" align="center" sx={{minHeight: "100vh"}}>
          <Box sx={{maxWidth: "660px"}}>
            <animated.div style={headlineAnim}>
              <Title lh={1.2} style={{fontSize: 64}} color="white">
                {headlineContent}
              </Title>
            </animated.div>
            <animated.div style={descriptionAnim}>
              <Text my="xl" size="lg">
                {pageConfig.productDescription}
              </Text>
            </animated.div>
            <animated.div style={releaseInfoAnim}>
              <Text color="dimmed">{pageConfig.productDescription}</Text>
            </animated.div>
          </Box>
          <Box style={{height: "70vh", width: "30%", position: "relative", overflow: "hidden"}}>
            <Image alt={`${productName} app preview`} src={BetterKiaPreviewImg} fill={true} style={{objectFit: "contain"}} />
          </Box>
        </Flex>
      </MediaQuery>

      {/* Mobile Variant */}
      <MediaQuery largerThan="md" styles={{display: "none"}}>
        <Box>
          <Box pt={80} sx={{maxWidth: "610px", minHeight: "100vh"}} className="min-height-full">
            <Box>
              <animated.div style={headlineAnim}>
                <Title align="center" lh={1.2} pb="md" style={{fontSize: 32}} color="white">
                  {headlineContent}
                </Title>
              </animated.div>
              <Box style={{height: "58vh", width: "100%", position: "relative", overflow: "hidden"}}>
                <Image alt={`${productName} app preview`} src={BetterKiaPreviewImg} fill={true} style={{objectFit: "contain"}} />
              </Box>
            </Box>
          </Box>
          <Box pt="xl" pb={50}>
            <animated.div style={descriptionAnim}>
              <Text my="xl">
                {pageConfig.productDescription}
              </Text>
            </animated.div>
            <animated.div style={releaseInfoAnim}>
              <Text color="dimmed" size="sm">{pageConfig.releaseInfo}</Text>
            </animated.div>
          </Box>
        </Box>
      </MediaQuery>
    </Container>
  )
}