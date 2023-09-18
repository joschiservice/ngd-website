import styles from "@/styles/Home.module.css";
import Image from "next/image";
import backgroundImage from "@/public/img/tesla-rear-light.jpg";
import hyundaiInStyleImage from "@/public/img/hyundai-in-style.jpg";
import polestarImage from "@/public/img/polestar-night.jpg";
import {animated, easings, useInView, useSpring} from "@react-spring/web";
import {IoIosCellular} from "react-icons/io";
import {MdOutlineElectricCar} from "react-icons/md"
import {GiCarSeat} from "react-icons/gi"
import {
  Container,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title
} from "@mantine/core";
import {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "@mantine/hooks";
import PublicLayout from "@/layouts/PublicLayout";
import {IS_BLOG_ENABLED} from "@/config";
import { IconFeatureCard } from "@/components/cards/IconFeatureCard";
import { VisitBlogBanner } from "@/components/banners/VisitBlogBanner";
import { FAQ } from "@/components/FAQ";

const FaqEntries = [
  { 
    question: 'Are you only building products for BEV/FHEV vehicles and why?', 
    answer: 'Yes and no. We will also release some products, which are independent of the type of vehicle, but we are going to primarily build products and prototypes for vehicles using an alternative drive systems first. We have decided to go this way as we would like to help the world to complete the transition to emission-free vehicles in the next coming years.' 
  }
]

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

  const [featureItemsRef, featureItemsAnimation] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        easing: easings.easeOutExpo,
        duration: 1500
      }
    }),
    {
      rootMargin: '0% 0%',
      once: true
    }
  )

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
                    <Text color="#339557" fw={600}>Unlock the full potential of your BEV/FCEV</Text>
                    <Text fw={500} fz="42px" color="white" mt="sm" style={{lineHeight: "50px"}}>Let&apos;s Elevate Your Driving Experience</Text>
                    <Text mt="sm">We are developing a wide range of premium software & hardware upgrade products to transform your electric vehicle into a cutting-edge driving machine.</Text>
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
                    <Text color="#339557" fw={600}>Unlock the full potential of your BEV/FCEV</Text>
                    <Text fw={500} fz="42px" color="white" mt="sm" style={{lineHeight: "50px"}}>Let&apos;s Elevate Your Driving Experience</Text>
                    <Text mt="sm">We are developing a wide range of premium software & hardware upgrade products to transform your electric vehicle into a cutting-edge driving machine.</Text>
                  </Stack>
                </div>
              </animated.div>
            )
        }
        <Container size="xl">
          <SimpleGrid cols={isSmallDevice ? 1 : 2} spacing={isSmallDevice ? 10 : 40}>
            <Title size={isSmallDevice ? 28 : 34} color="white">{"There's much more to it than just driving from A to B"}</Title>
            <Text size="sm">
              Transform your car into a world of endless entertainment and innovation. With cutting-edge technology and seamless integration, every journey becomes an experience to remember. Say goodbye to mundane drives and hello to a new era of excitement and convenience.
            </Text>
          </SimpleGrid>
          <Space h={80} />
          <animated.div ref={featureItemsRef} style={featureItemsAnimation}>
            <SimpleGrid cols={isSmallDevice ? 1 : 3} mt="xl">
              <IconFeatureCard title="Interior Upgrades"
                               description="Unleash the full potential of your car with advanced tech! Transform your rides into tech-savvy masterpieces with seamless infotainment, ambient lighting, and cutting-edge upgrades. Experience the next level of driving excellence and elevate your journeys to new heights!"
                               icon={<GiCarSeat color="#339557" size={40} />} />
              <IconFeatureCard title="Connected Car"
                               description="Unlock next-gen features for a connected car experience."
                               icon={<IoIosCellular color="#339557" size={40} />} />
              <IconFeatureCard title="EV Conversions"
                               description="Get ready for the ultimate driving experience. Say goodbye to gas costs and emissions and hello to a more sustainable, efficient ride. Stay tuned for more updates and join the future of driving today."
                               icon={<MdOutlineElectricCar color="#339557" size={40} />} />
            </SimpleGrid>
          </animated.div>
        </Container>
        <Space h={80} />
        <FAQ entries={FaqEntries} />
        {
          IS_BLOG_ENABLED ?
            (
              <>
                <Space h={80}/>
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
      <div style={{position: "relative", height: "100%", background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 65%, rgba(0,0,0,1) 100%)", zIndex: 1}} />
      {
        images.map(image => {
          return <Image key={image.id} src={image.src} alt={image.alt} fill={true} style={{objectFit: "cover", objectPosition: image.objectPosition, opacity: image.id == activeImageId ? 1 : 0, transition: "opacity 2s ease-in-out"}}
                        priority={image.id == activeImageId}/>
        })
      }
    </>
  )
}