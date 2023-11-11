import { Box, Title, Text } from "@mantine/core";
import Link from "next/link";
import { ReadMoreTextBtn } from "../shared/ReadMoreTextBtn";

export function IconFeatureCard({title, description, icon, href = null}: {title: string, description: string, href?: string | null, icon: any}) {
    return (
      <Box bg="#121212" p="xl" style={{borderRadius: "8px"}}>
        {icon}
        <Title order={3} mt={10} fw={400} color="white">{title}</Title>
        <Text size="sm" mt={12}>{description}</Text>
        {
          href &&
            <Link href={href}>
                <ReadMoreTextBtn />
            </Link>
        }
      </Box>
    )
  }