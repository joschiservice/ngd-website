import PublicLayout from "@/layouts/PublicLayout";
import { Text, Title } from "@mantine/core";
import React from "react";
import ngOneTeaserImage from "@/public/img/ng_one_teaser.png";
import { ImageHero } from "@/components/heros/ImageHero";

const PRODUCT_NAME = "NG 001";

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
    </PublicLayout>
  )
}