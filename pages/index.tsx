import styles from "@/styles/Home.module.css";
import Image from "next/image";
import backgroundImage from "@/public/img/tesla-rear-light.jpg";
import hyundaiInStyleImage from "@/public/img/hyundai-in-style.jpg";
import polestarImage from "@/public/img/polestar-night.jpg";
import ev6Image from "@/public/img/hyundai-motor-group-eQFLCKHklwg-unsplash.jpg";
import ioniq5Charging from "@/public/img/hyundai-motor-group-zHXYTK6RYmk-unsplash.jpg";
import {animated, easings, useSpring} from "@react-spring/web";
import {
  Space,
  Stack,
  Text
} from "@mantine/core";
import {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "@mantine/hooks";
import PublicLayout from "@/layouts/PublicLayout";
import {BRAND_NAME, IS_BLOG_ENABLED} from "@/config";
import { VisitBlogBanner } from "@/components/banners/VisitBlogBanner";
import { FAQ } from "@/components/FAQ";
import { OfferedServicesSection } from "@/sections/OfferedServicesSection";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_CONFIG = {
  hero: {
    title: "Unlock the full potential of your EV",
    subtitle: "Let's Elevate Your Driving Experience",
    text: "We are developing a wide range of premium software & hardware upgrade products to transform your electric vehicle into a cutting-edge driving machine."
  },
  faq: [
    { 
      question: 'Are you only developing products for BEV vehicles, and why?',
      answer: 'We are primarily building and testing product prototypes optimized for electric vehicles, but we might also release some products that could be independent of the type of vehicle. We have decided to go this way as we would like to help the world complete and accelerate the transition to emission-free vehicles in the next few years and we believe that electric vehicles are the most suitable ones for this transition given the current state of technology and infrastructure.'
    },
    {
      question: 'Is this a commercial project and how is this project funded?',
      answer: 'While we are trying to work on our current in-development product prototypes as professionally as possible, we are not an officially registered company (yet). So far, the development of prototype products has been 100% funded by our founder.'
    },
    {
      question: 'How can I support this project?',
      answer: 
      <>
        Firstly, you can share this project with people who might be interested in it. If you think you can support us in other ways, you can contact us at <Link href="mailto:contact@nextgendrive.com" style={{color: 'white'}}>contact@nextgendrive.com</Link>.
      </>
    }
  ],
  spaceBetweenSections: 80
}

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Software & Hardware Upgrades for Electric Vehicles`,
  description: `Discover cutting-edge hardware and software solutions for electric vehicles at ${BRAND_NAME}. We specialize in designing and developing advanced technology to accelerate the electric revolution.`,
  openGraph: {
    type: 'website',
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | Software & Hardware Upgrades for Electric Vehicles`,
    description: `Discover cutting-edge hardware and software solutions for electric vehicles at ${BRAND_NAME}. We specialize in designing and developing advanced technology to accelerate the electric revolution.`,
    images: backgroundImage.src
  }
};

export default function NewLandingPage() {
  const isSmallDevice = useMediaQuery('(max-width: 1020px)');

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      easing: easings.easeOutExpo,
      duration: 1500
    }
  })

  return (
    <PublicLayout title="Home">
      <div style={{background: "black"}}>
        {
          isSmallDevice ? (
              <animated.div className={styles.main}>
                <animated.div style={{position: "relative", width: "100vw", height: "80vh", top: "50%", ...fadeIn}}>
                  <HeroImages />
                </animated.div>
                <div style={{position: "absolute", zIndex: 1, display: "flex", alignItems: "center", minWidth: "100vw", minHeight: "100%", background: "rgba(0,0,0,0.7)"}}>
                  <Stack style={{maxWidth: "650px"}} spacing={0} mx="xl">
                    <Text color="#339557" fw={600}>{PAGE_CONFIG.hero.title}</Text>
                    <Text fw={500} fz="42px" color="white" mt="sm" style={{lineHeight: "50px"}}>{PAGE_CONFIG.hero.subtitle}</Text>
                    <Text mt="sm">{PAGE_CONFIG.hero.text}</Text>
                  </Stack>
                </div>
              </animated.div>
            )
            :
            (
              <animated.div className={styles.main}>
                <animated.div style={{position: "relative", width: "60vw", height: "80vh", marginLeft: "auto", marginRight: 0, top: "50%", ...fadeIn}}>
                  <HeroImages />
                </animated.div>
                <div style={{position: "absolute", display: "flex", alignItems: "center", minWidth: "100vw", minHeight: "100%", background: "linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"}}>
                  <Stack mr={"6rem"} style={{maxWidth: "650px"}} spacing={0}>
                    <Text color="#339557" fw={600}>{PAGE_CONFIG.hero.title}</Text>
                    <Text fw={500} fz="42px" color="white" mt="sm" style={{lineHeight: "50px"}}>{PAGE_CONFIG.hero.subtitle}</Text>
                    <Text mt="sm">{PAGE_CONFIG.hero.text}</Text>
                  </Stack>
                </div>
              </animated.div>
            )
        }
        <OfferedServicesSection />
        <Space h={PAGE_CONFIG.spaceBetweenSections} />
        <FAQ entries={PAGE_CONFIG.faq} />
        {
          IS_BLOG_ENABLED ?
            (
              <>
                <Space h={PAGE_CONFIG.spaceBetweenSections}/>
                <VisitBlogBanner/>
              </>
            ): null
        }
      </div>
    </PublicLayout>
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
    },
    {
      id: 4,
      src: ev6Image,
      alt: "Kia EV6",
      objectPosition: "90%"
    },
    {
      id: 5,
      src: ioniq5Charging,
      alt: "Hyundai Ioniq 5",
      objectPosition: "80%"
    }
  ])
  const [activeImageId, setActiveImageId] = useState(4);
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
      <div style={{position: "relative", height: "100%", background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 65%, rgba(0,0,0,1) 100%)", zIndex: 1}} />
      {
        images.map(image => {
          return <Image key={image.id} src={image.src} alt={image.alt} fill={true} style={{objectFit: "cover", objectPosition: image.objectPosition, opacity: image.id == activeImageId ? 1 : 0, transition: "opacity 2s ease-in-out"}}
                        priority={image.id == 1} placeholder="blur" sizes="(max-width: 1020px)100vw, 60vw"/>
        })
      }
    </>
  )
}