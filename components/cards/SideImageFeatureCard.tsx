import { Box, Flex, Title, Text } from "@mantine/core";
import Image from "next/image";
import {useMediaQuery} from "@mantine/hooks";

interface Props {
    title: string
    description: string
    imgSrc: any
    imgAlt: string
    imgPosition: string
    color: string
    pb?: boolean
}

export function SideImageFeatureCard({ title, description, imgSrc, imgAlt, imgPosition, color }: Props) {
  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  if (isSmallDevice) {
    return (
      <Box pb="sm" sx={{ width: "100%", minHeight: "200px", background: color, borderRadius: "16px" }}
      >
        <Box style={{ position: "relative", height: "150px", width: "100%"}}>
          <Image alt={imgAlt} src={imgSrc} fill={true} style={{ objectFit: "cover", objectPosition: imgPosition, borderRadius: "16px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }} />
        </Box>

        <Box pt="sm" mx="md" style={{flex: 3}}>
          <Title order={3} color="white">{title}</Title>
          <Text size="sm" style={{ color: "#bebebe" }}>{description}</Text>
        </Box>
      </Box>
    )
  }

    return (
        <Flex pl="xl" sx={{ width: "100%", minHeight: "200px", background: color, borderRadius: "16px" }} direction="row"
            >
            <Box style={{ position: "relative", flex: 2 }}>
                <Image alt={imgAlt} src={imgSrc} fill={true} style={{ objectFit: "cover", objectPosition: imgPosition }} />
            </Box>

            <Box mb="sm" pt="xl" mr="xl" style={{flex: 3}}>
                <Title order={2} color="white">{title}</Title>
                <Text style={{ color: "#bebebe" }}>{description}</Text>
            </Box>
        </Flex>
    )
}