import PublicLayout from "@/layouts/PublicLayout";
import { Container, Space, Stack, Text, Title } from "@mantine/core";
import React from "react";
import ngOneTeaserImage from "@/public/img/ng_one_teaser.png";
import { ImageHero } from "@/components/heros/ImageHero";
import { FAQ } from "@/components/FAQ";
import { SideImageFeatureCard } from "@/components/cards/SideImageFeatureCard";
import BetterKiaLiveActivityPreviewImg from "../../public/img/better-kia-live-activity-preview.png";


const PRODUCT_NAME = "NG 001";

const PAGE_CONFIG = {
  spaceBetweenSections: 80,
  faq: [
    {
      question: `What's the car, which is used as the ${PRODUCT_NAME} and why did you choose this car?`,
      answer: `The ${PRODUCT_NAME} is based on the 2020 Kia e-Soul 64kwh. We choose to use the Kia for this project, as we didn't have the budget to buy a specific car and therefore are using the private car of the founder.`
    },
    {
      question: "Which products will be released later and what's the state of the products?",
      answer: "This decision will be based on market research, community feedback and pre-orders in the future. We can't really say anything yet, as we just recently made this project public and as we are still developing and optimizing prototypes. Releasing any of this products will require quite some fine tuning and testing. One exception is our Sparky app, which might be released soon."
    }
  ]
}

export default function NgOnePage() {
  return (
    <PublicLayout title={PRODUCT_NAME} hoverNavbar={true}>
      <ImageHero img={ngOneTeaserImage} imgAlt={PRODUCT_NAME}>
        <Title lh={1.2} style={{ fontSize: 45 }} color="white">
          {PRODUCT_NAME} - Our Development Vehicle
        </Title>
        <Text my="xl" size="lg">
          The {PRODUCT_NAME} is our very first electric development vehicle, where we continuously develop our first set of demo hardware & software products.
        </Text>
      </ImageHero>

      <Container size="xl">
        <SideImageFeatureCard title="Ambient Lightning" description="This is an example description related to our ambient lighting system in the vehicle"
        imgSrc={BetterKiaLiveActivityPreviewImg} imgAlt="IMG ALT" imgPosition="50% 50%" color="#21262d" />
      </Container>

      <Space h={PAGE_CONFIG.spaceBetweenSections} />

      <FAQ entries={PAGE_CONFIG.faq} />
    </PublicLayout>
  )
}