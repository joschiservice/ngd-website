import { Box, Flex, Title, Text } from "@mantine/core";
import Image from "next/image";

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