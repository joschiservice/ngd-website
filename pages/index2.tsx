import styles from "@/styles/Home.module.css";
import Image from "next/image";
import backgroundImage from "@/public/img/tesla-rear-light.jpg";
import hyundaiInStyleImage from "@/public/img/hyundai-in-style.jpg";
import polestarImage from "@/public/img/polestar-night.jpg";
import {animated, easings, useInView, useSpring} from "@react-spring/web";
import {BsFillLightningChargeFill, BsPlayBtn, BsLightbulb} from "react-icons/bs";
import {FiArrowUpRight} from "react-icons/fi";
import {TbChargingPile} from "react-icons/tb";
import {MdOutlineElectricCar} from "react-icons/md"
import {GiCarSeat} from "react-icons/gi"
import Link from "next/link";
import {
  Accordion,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title
} from "@mantine/core";
import {useEffect, useRef, useState} from "react";
import {useTimeout} from "@mantine/hooks";
import {MdOutlineSmartDisplay} from "react-icons/md"

export default function NewLandingPage() {
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
    <div style={{background: "black"}}>
      <animated.div className={styles.main}>
        <animated.div style={{position: "relative", width: "60vw", height: "80vh", marginLeft: "auto", marginRight: 0, top: "50%", ...fadeIn}}>
          <HeroImages />
        </animated.div>
        <div style={{position: "absolute", display: "flex", alignItems: "center", minWidth: "100vw", minHeight: "100%", background: "linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"}}>
          <Stack mr={"6rem"} style={{maxWidth: "650px"}} spacing={0}>
            <Text color="#339557" fw={600}>Unlock the full potential of your BEV/FCEV</Text>
            <Text fw={500} fz="42px" color="white" mt="sm" style={{lineHeight: "50px"}}>Let&apos;s Elevate Your Driving Experience</Text>
            <Text mt="sm">Transform your electric vehicle into a cutting-edge driving machine with our range of premium software & hardware upgrade products.</Text>
          </Stack>
        </div>
        <div style={{position: "absolute", top: 0, width: "100vw", padding: 18, display: "flex", justifyContent: "space-between"}}>
          <BsFillLightningChargeFill className={styles.neonLogo} style={{fontSize: 28}} />
          <div>
            <Link href={"/"} className={styles.navLink}>Home</Link>
            <Link href={"/blog"} className={styles.navLink}>Blog</Link>
            <Link href={"/imprint"} className={styles.navLink}>Imprint</Link>
          </div>
          <div />
        </div>
      </animated.div>
      <Container size="lg">
        <Grid grow gutter={40} align="center">
          <Grid.Col span={1}>
            <Title size={34} color="white">{"There's much more to it than just driving from A to B"}</Title>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text size="sm">
              Transform your car into a world of endless entertainment and innovation. With cutting-edge technology and seamless integration, every journey becomes an experience to remember. Say goodbye to mundane drives and hello to a new era of excitement and convenience.
            </Text>
          </Grid.Col>
        </Grid>
        <Space h={80} />
        <animated.div ref={featureItemsRef} style={featureItemsAnimation}>
          <SimpleGrid cols={3} mt="xl">
            <FeatureCard title="Interior Upgrades"
                         description="Unleash the full potential of your car with advanced tech! Transform your rides into tech-savvy masterpieces with seamless infotainment, ambient lighting, and cutting-edge upgrades. Experience the next level of driving excellence and elevate your journeys to new heights!"
                         href="/"
                         icon={<GiCarSeat color="#339557" size={40} />} />
            <FeatureCard title="Charging Infrastructure"
                         description="Revolutionize your charging experience with our independent platform! Find the best nearby charging stations, rate them, and power up with ease. Say goodbye to charging headaches and hello to a smoother electric driving experience."
                         href=""
                         icon={<TbChargingPile color="#339557" size={40} />} />
            <FeatureCard title="EV Conversions"
                         description="Get ready for the ultimate driving experience. Say goodbye to gas costs and emissions and hello to a more sustainable, efficient ride. Stay tuned for more updates and join the future of driving today."
                         href="/"
                         icon={<MdOutlineElectricCar color="#339557" size={40} />} />
          </SimpleGrid>
        </animated.div>
      </Container>
      <Space h={80} />
      <Container size="md">
        <Title order={1} align={"center"} mb="lg" color="white">FAQ</Title>
        <Accordion defaultValue="customization">
          <Accordion.Item value="customization">
            <Accordion.Control><Box display="flex" mr={8}><Title color="white" order={4}>Are you only building products for BEV/FHEV vehicles and why?</Title></Box></Accordion.Control>
            <Accordion.Panel>
              Yes and no. We will also release some products, which are independent of the type of vehicle, but we are going to primarily build products and prototypes for vehicles
              using an alternative drive systems first. We have decided to go this way as we would like to help the world to complete the transition to emission-free vehicles
              in the next coming years.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
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

function FeatureCard({title, description, href, icon}: {title: string, description: string, href: string, icon: any}) {
  return (
    <Box bg="#121212" p="xl" style={{borderRadius: "8px"}}>
      {icon}
      <Title order={3} mt={10} fw={400} color="white">{title}</Title>
      <Text size="sm" mt={12}>{description}</Text>
      <Link href={href}>
        <Box>
          <Box mt={12}
               sx={(theme) => ({
                 display: "inline-flex",
                 alignItems: "center",
                 position: "relative",
                 borderBottom: "2px solid rgba(0, 0, 0, 0)",
                 '&:after': {
                   content: "''",
                   position: "absolute",
                   width: "0",
                   height: "2px",
                   display: "block",
                   marginTop: "25px",
                   right: 0,
                   background: "white",
                   transition: "width .5s ease"
                 },
                 '&:hover:after': {
                   width: "100%",
                   left: "0",
                   background: "white"
                 }
               })}>
            <Text color="#ffff" size="sm">Read More</Text>
            <FiArrowUpRight style={{marginLeft: "6px"}} />
          </Box>
        </Box>
      </Link>
    </Box>
  )
}