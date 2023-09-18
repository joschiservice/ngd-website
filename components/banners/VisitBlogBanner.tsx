import { Flex, Title, Text,Button } from "@mantine/core";
import { BaseBanner } from "./BaseBanner";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

export function VisitBlogBanner() {
    const isSmallDevice = useMediaQuery('(max-width: 1020px)');
    
    return (
        <BaseBanner background="linear-gradient(90deg, rgba(10,31,89,1) 0%, rgba(21,182,166,1) 100%)">
            <Flex align="center" direction="column">
                <Title color="white" order={isSmallDevice ? 2 : 1}>Stay Up-To-Date On Our Blog</Title>
                <Text color="white" align="center" mt="md" maw={550}>
                    On our blog, we are regularly releasing development updates about our products, news about new developments
                    in the rapidly changing electric vehicle industry and other milestones.
                </Text>
                <Link href="/blog">
                    <Button mt="xl" size="md" color="green">
                        Visit Our Blog
                    </Button>
                </Link>
            </Flex>
        </BaseBanner>
    )
}