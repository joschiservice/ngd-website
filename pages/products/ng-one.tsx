import PublicLayout from "@/layouts/PublicLayout";
import { Container, Space, Stack, Text, Title } from "@mantine/core";
import React from "react";
import ngOneTeaserImage from "@/public/img/ng_one_teaser.png";
import { ImageHero } from "@/components/heros/ImageHero";
import { FAQ } from "@/components/FAQ";
import { SideImageFeatureCard } from "@/components/cards/SideImageFeatureCard";
import BetterKiaPreviewImg from "../../public/img/better-kia-preview.png";
import NgOneAmbientLightTeaserImg from "../../public/img/ng-one-ambient-light-teaser.png";
import {useMediaQuery} from "@mantine/hooks";


const PRODUCT_NAME = "NG 001";

const PAGE_CONFIG = {
  spaceBetweenSections: 80,
  faq: [
    {
      question: `What's the car, which is used as the ${PRODUCT_NAME} and why did you choose this car?`,
      answer: `The ${PRODUCT_NAME} is based on the 2020 Kia e-Soul 64 kwh. We chose to use the Kia for this project, as we didn't have the budget to buy a specific car and therefore are using the private car of the founder.`
    },
    {
      question: "Which products will be released later and what's the state of the products?",
      answer: "This decision will be based on market research, community feedback, and pre-orders in the future. We can't really say anything yet, as we just recently made this project public and are still developing and optimizing prototypes. Releasing any of these products will require quite some fine-tuning and testing. One exception is our Sparky app, which might be released soon."
    }
  ],
  features: [
    {
      title: 'Ambient Lighting',
      description: 'Our special ambient lightning system is one of the smartest systems using in-vehicle data. It automatically dims for the night to avoid distractions and switches the color based on the current drive mode to always create the right mood.',
      img: NgOneAmbientLightTeaserImg,
      imgAlt: 'Glowing ambient light strip under the in-car infotainment display',
      imgPosition: '50% 95%',
      color: '#21262d'
    },
    {
      title: 'Custom Mobile App',
      description: `Our upcoming Sparky mobile app for Kia & Hyundai electric vehicles is being actively tested on our ${PRODUCT_NAME} prototype. The mobile app is also the primary option for configuring the ambient lighting to your needs.`,
      img: BetterKiaPreviewImg,
      imgAlt: 'Screenshot of the Sparky iOS app, which is displaying information about the Kia e-Soul',
      imgPosition: '50% 5%',
      color: '#21262d'
    }
  ]
}

export default function NgOnePage() {
  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  return (
    <PublicLayout title={PRODUCT_NAME} hoverNavbar={true}>
      <ImageHero img={ngOneTeaserImage} imgAlt={PRODUCT_NAME}>
        <Title lh={1.2} style={{ fontSize: (isSmallDevice ? 35 : 45) }} color="white">
          {PRODUCT_NAME} - Our Development Vehicle
        </Title>
        <Text my="xl" size={isSmallDevice ? "md" : "lg"}>
          The {PRODUCT_NAME} is our very first electric development vehicle, where we continuously develop our first set of demo hardware & software products.
        </Text>
      </ImageHero>

      <Container size="xl">
        <Stack spacing="xl">
          {PAGE_CONFIG.features.map(item=> <SideImageFeatureCard key={item.title} title={item.title} description={item.description}
                                                                    imgSrc={item.img} imgAlt={item.imgAlt} imgPosition={item.imgPosition} color={item.color} />)}
        </Stack>
      </Container>

      <Space h={PAGE_CONFIG.spaceBetweenSections} />

      <FAQ entries={PAGE_CONFIG.faq} />
    </PublicLayout>
  )
}