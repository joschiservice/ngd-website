import React from "react";
import {animated, useTrail} from "@react-spring/web";
import {List as MantineList} from "@mantine/core";
import styles from "@/styles/Home.module.css";

interface ListProps {
  children: any,

  delay?: number,

  icon?: any
}
export const AnimatedList = ({ children, delay = 0, icon = null }: ListProps) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    delay,
    from: { opacity: 0 },
  })
  return (
    <MantineList icon={icon}>
      {trail.map(({...style }, index) => (
        <animated.div key={index} className={styles.trailsText} style={style}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </MantineList>
  )
}