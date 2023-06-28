import {Box, Flex, Text, Title} from "@mantine/core";
import Image from "next/image";
import React from "react";
import {useMediaQuery} from "@mantine/hooks";

export function FeatureCard({title, description, imgSrc, imgAlt, imgHeightDesktop, imgHeightMobile, imgPosition, color, pb = true}: FeatureCardProps) {
  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  return (
    <Flex px="xl" pt="xl" pb={pb ? 0 : 0} sx={{width: "100%", background: color, borderRadius: "16px"}} direction="column"
          justify="space-between">
      <Box mb="sm">
        <Title order={2} color="white">{title}</Title>
        <Text style={{color: "#bebebe"}}>{description}</Text>
      </Box>

      <Flex justify="center" align="end" sx={{width: "100%", height: "100%"}}>
        {
          isSmallDevice ?
            <Box style={{height: imgHeightMobile + "px", width: "70%", position: "relative", overflow: "hidden"}}>
              <Image alt={imgAlt} src={imgSrc} fill={true} style={{objectFit: "cover", objectPosition: imgPosition}} />
            </Box>
            :
            <Box style={{height: imgHeightDesktop + "px", width: "70%", position: "relative", overflow: "hidden"}}>
              <Image alt={imgAlt} src={imgSrc} fill={true} style={{objectFit: "cover", objectPosition: imgPosition}} />
            </Box>
        }
      </Flex>
    </Flex>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  imgSrc: any
  imgAlt: string
  imgHeightDesktop: number
  imgHeightMobile: number
  imgPosition: string
  color: string
  pb?: boolean
}