import { Box, Title, Text } from "@mantine/core";
import Link from "next/link";
import { ReadMoreTextBtn } from "../shared/ReadMoreTextBtn";
import {animated, easings, useInView} from "@react-spring/web";

export function IconFeatureCard({title, description, icon, href = null}: {title: string, description: string, href?: string | null, icon: any}) {
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
    <animated.div ref={featureItemsRef} style={{borderRadius: "8px", backgroundColor: '#121212', padding: '24px', ...featureItemsAnimation}}>
      {icon}
      <Title order={3} mt={10} fw={400} color="white">{title}</Title>
      <Text size="sm" mt={12}>{description}</Text>
      {
        href &&
          <Link href={href}>
              <ReadMoreTextBtn />
          </Link>
      }
    </animated.div>
    )
  }