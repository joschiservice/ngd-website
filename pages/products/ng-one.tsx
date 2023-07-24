import PublicLayout from "@/layouts/PublicLayout";
import {animated} from "@react-spring/web";
import {Box, Container, Flex, MediaQuery, Text, Title} from "@mantine/core";
import React from "react";

export default function NgOnePage() {
  return (
    <PublicLayout title="NG 1" hoverNavbar={true}>
      <Container size="lg" sx={{minHeight: "100vh"}}>
        {/* Desktop Variant */}
        <MediaQuery smallerThan="md" styles={{display: "none"}}>
          <Flex justify="space-between" align="center" sx={{minHeight: "100vh"}}>
            <Box sx={{maxWidth: "660px"}}>
              <Title lh={1.2} style={{fontSize: 45}} color="white">
                NG 1 - Our Development Vehicle
              </Title>
              <Text my="xl" size="lg">
                The NG 1 is our very first development vehicle, where we continuously develop universal products for a wide-range of vehicles.
              </Text>
            </Box>
          </Flex>
        </MediaQuery>
      </Container>
    </PublicLayout>
  )
}