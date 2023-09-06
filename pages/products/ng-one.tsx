import PublicLayout from "@/layouts/PublicLayout";
import {animated} from "@react-spring/web";
import {Box, Container, Flex, MediaQuery, Stack, Text, Title} from "@mantine/core";
import React from "react";
import Image from "next/image";
import hyundaiInStyleImage from "@/public/img/ng_one_teaser.png";
import styles from "@/styles/Home.module.css";

export default function NgOnePage() {
  return (
    <PublicLayout title="NG 1" hoverNavbar={true}>
      <animated.div className={styles.main}>
        <animated.div style={{position: "relative", width: "60vw", height: "80vh", marginLeft: "auto", marginRight: 0, top: "50%"}}>
          <div style={{position: "relative", height: "100%", background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 65%, rgba(0,0,0,1) 100%)", zIndex: 1}} />
          <Image src={hyundaiInStyleImage} alt="NG One" fill={true} style={{objectFit: "cover", objectPosition: "center", transition: "opacity 2s ease-in-out"}}/>
        </animated.div>
        <div style={{position: "absolute", display: "flex", alignItems: "center", minWidth: "100vw", minHeight: "100%", background: "linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"}}>
          <Stack mr={"6rem"} style={{maxWidth: "700px"}} spacing={0}>
            <Title lh={1.2} style={{fontSize: 45}} color="white">
              NG 1 - Our Development Vehicle
            </Title>
            <Text my="xl" size="lg">
              The NG 1 is our very first development vehicle, where we continuously develop universal products for a wide-range of vehicles.
            </Text>
          </Stack>
        </div>
      </animated.div>
    </PublicLayout>
  )
}