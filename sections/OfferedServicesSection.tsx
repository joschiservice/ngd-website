import { IconFeatureCard } from "@/components/cards/IconFeatureCard";
import {
    Container,
    SimpleGrid,
    Space,
    Text,
    Title
  } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { animated, easings, useInView } from "@react-spring/web";
import { IoIosCellular } from "react-icons/io";
import { MdOutlineElectricCar } from "react-icons/md";
import { GiCarSeat } from "react-icons/gi";
import { HiOutlineLightBulb  } from "react-icons/hi";

const SECTION_TITLE = "Upgrading and Innovating the in-car experience";
const SECTION_DESCRIPTION = "Transform your car into a world of endless entertainment and innovation. With cutting-edge technology and seamless integration, every journey becomes an experience to remember. Say goodbye to mundane drives and hello to a new era of excitement and convenience.";

const OFFERED_SERVICES_PRODUCTS = [
  {
    title: "Smart Ambient Light",
    description: "Turn your ride into a special experience for you and your passengers and feel like driving in a spaceship at night. Our reactive lighting system does offer automatic triggers to automatically switch the light theme, when switching into sport mode and much more.",
    icon: <HiOutlineLightBulb color="#339557" size={40} />
  },
  {
    title: "Connected Car",
    description: "Unlock next-gen features for an improved connected car experience, like a custom mobile app and a infotainment system for your passengers",
    icon: <IoIosCellular color="#339557" size={40} />
  },
  {
    title: "Interior Upgrades",
    description: "Never miss out on new next-gen features for your in-car experience.",
    icon: <GiCarSeat color="#339557" size={40} />
  }
]

export function OfferedServicesSection() {
    const isSmallDevice = useMediaQuery('(max-width: 600px)');
    const isMediumDevice = useMediaQuery('(max-width: 1020px)');

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
        <Container size="xl">
          <SimpleGrid cols={isMediumDevice ? 1 : 2} spacing={isMediumDevice ? 10 : 40}>
            <Title size={isMediumDevice ? 28 : 34} color="white">{SECTION_TITLE}</Title>
            <Text size="sm">{SECTION_DESCRIPTION}</Text>
          </SimpleGrid>

          <Space h={80} />

          <animated.div ref={featureItemsRef} style={featureItemsAnimation}>
            <SimpleGrid cols={isSmallDevice ? 1 : (isMediumDevice ? 2 : 3)} mt="xl">
              {
                OFFERED_SERVICES_PRODUCTS.map((item, index) => 
                <IconFeatureCard key={index} title={item.title} description={item.description} icon={item.icon} />)
              }
            </SimpleGrid>
          </animated.div>
        </Container>
    )
}