import { animated } from "@react-spring/web";
import {Stack, Text} from "@mantine/core";
import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/Home.module.css";
import {useMediaQuery} from "@mantine/hooks";

interface Props {
    img: StaticImageData;
    imgAlt: string;
    children: any;
}

/**
 * Single Image Page Hero
 * @returns 
 */
export function ImageHero({ img, imgAlt, children }: Props) {
  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  if (isSmallDevice) {
    return (
      <animated.div className={styles.main}>
        <animated.div style={{position: "relative", width: "100vw", height: "80vh", top: "50%"}}>
          <div style={{ position: "relative", height: "100%", background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 65%, rgba(0,0,0,1) 100%)", zIndex: 1 }} />
          <Image src={img} alt={imgAlt} fill={true} style={{ objectFit: "cover", objectPosition: "center", transition: "opacity 2s ease-in-out" }} />
        </animated.div>
        <div style={{position: "absolute", zIndex: 1, display: "flex", alignItems: "center", minWidth: "100vw", minHeight: "100%", background: "rgba(0,0,0,0.7)"}}>
          <Stack style={{maxWidth: "650px"}} spacing={0} mx="xl">
            {children}
          </Stack>
        </div>
      </animated.div>
    )
  }

    return (
        <animated.div className={styles.main}>
            <animated.div style={{ position: "relative", width: "60vw", height: "80vh", marginLeft: "auto", marginRight: 0, top: "50%" }}>
                <div style={{ position: "relative", height: "100%", background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 65%, rgba(0,0,0,1) 100%)", zIndex: 1 }} />
                <Image src={img} alt={imgAlt} fill={true} style={{ objectFit: "cover", objectPosition: "center", transition: "opacity 2s ease-in-out" }} />
            </animated.div>

            <div style={{ position: "absolute", display: "flex", alignItems: "center", minWidth: "100vw", minHeight: "100%", background: "linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)" }}>
                <Stack mr={"6rem"} style={{ maxWidth: "700px" }} spacing={0}>
                    {children}
                </Stack>
            </div>
        </animated.div>
    )
}