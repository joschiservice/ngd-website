import {BsFillLightningChargeFill} from "react-icons/bs";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {Container, SimpleGrid, Space} from "@mantine/core";
import {NewsItem} from "@/components/NewsItems/NewsItem";
import {SmallNewsItem} from "@/components/NewsItems/SmallNewsItem";

interface Props {
  children: any
}

export default function PublicLayout({children}: Props) {
  return (
    <div style={{background: "black"}}>
      <div style={{width: "100vw", padding: 18, display: "flex", justifyContent: "space-between"}}>
        <BsFillLightningChargeFill className={styles.neonLogo} style={{fontSize: 28}} />
        <div>
          <Link href={"/"} className={styles.navLink}>Home</Link>
          <Link href={"/blog"} className={styles.navLink}>Blog</Link>
          <Link href={"/imprint"} className={styles.navLink}>Imprint</Link>
        </div>
        <div />
      </div>
      {children}
    </div>
  )
}