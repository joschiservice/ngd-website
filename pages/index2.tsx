import styles from "@/styles/Home.module.css";
import Image from "next/image";
import backgroundImage from "@/public/img/tesla-rear-light.jpg";
import hyundaiInStyleImage from "@/public/img/hyundai-in-style.jpg";
import polestarImage from "@/public/img/polestar-night.jpg";
import {animated} from "@react-spring/web";
import {BsFillLightningChargeFill} from "react-icons/bs";
import Link from "next/link";
import {Group, Stack, Text} from "@mantine/core";
import {useEffect, useRef, useState} from "react";
import {useTimeout} from "@mantine/hooks";

export default function NewLandingPage() {
  return (
    <div className={styles.main}>
      <div style={{position: "relative", width: "55vw", height: "80vh", marginLeft: "auto", marginRight: 0, top: "50%"}}>
        <HeroImages />
      </div>
      <div style={{position: "absolute", display: "flex", alignItems: "center", minWidth: "100vw", minHeight: "100%", marginRight: "8px", marginLeft: "8px", background: "linear-gradient(90deg, rgba(0,0,0,1) 44%, rgba(0,0,0,0) 100%)"}}>
        <Stack mr={"6rem"} style={{maxWidth: "650px"}} spacing={0}>
          <Text color="#339557" fw={600}>Unlock the full potential of your BEV/FCEV</Text>
          <Text fw={500} fz="42px" color="white" mt="sm" style={{lineHeight: "50px"}}>Let&apos;s Elevate Your Driving Experience</Text>
          <Text mt="sm">Transform your electric vehicle into a cutting-edge driving machine with our range of premium software & hardware upgrade products.</Text>
        </Stack>
      </div>
      <div style={{position: "absolute", top: 0, width: "100vw", padding: 18, display: "flex", justifyContent: "space-between"}}>
        <BsFillLightningChargeFill className={styles.neonLogo} style={{fontSize: 28}} />
        <div>
          <Link href={"/imprint"} className={styles.navLink}>Home</Link>
          <Link href={"/imprint"} className={styles.navLink}>Blog</Link>
          <Link href={"/imprint"} className={styles.navLink}>Imprint</Link>
        </div>
        <div />
      </div>
    </div>
  )
}

function HeroImages() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: backgroundImage,
      alt: "Tesla Rear Light",
      objectPosition: "25%"
    },
    {
      id: 2,
      src: hyundaiInStyleImage,
      alt: "Hyundai cars drifting",
      objectPosition: "10%"
    },
    {
      id: 3,
      src: polestarImage,
      alt: "Polestar2",
      objectPosition: "70%"
    }
  ])
  const [activeImageId, setActiveImageId] = useState(1);
  const activeImageIdRef = useRef(activeImageId);
  activeImageIdRef.current = activeImageId;

  let timer: NodeJS.Timeout;

  function scheduleNextImage() {
    timer = setTimeout(() => {
      let nextImageId = activeImageIdRef.current + 1 > images.length ? 1 : activeImageIdRef.current + 1

      setActiveImageId(nextImageId)

      scheduleNextImage()
    }, 5000);
  }

  useEffect(() => {
    scheduleNextImage();
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <div style={{position: "relative", height: "100%", background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 65%, rgba(0,0,0,1) 100%)", zIndex: 20}} />
      {
        images.map(image => {
          return <Image key={image.id} src={image.src} alt={image.alt} fill={true} style={{objectFit: "cover", objectPosition: image.objectPosition, opacity: image.id == activeImageId ? 1 : 0, transition: "opacity 2s ease-in-out"}}
          priority={image.id == activeImageId}/>
        })
      }
    </>
  )
}