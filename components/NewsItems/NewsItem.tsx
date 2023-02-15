import {Box, Text, Title} from "@mantine/core";
import Image from "next/image";
import {Post} from "@/models/Post";
import Link from "next/link";
import dayjs from "dayjs";

export interface NewsItemProps {
  post: Post;
}
export function NewsItem({post}: NewsItemProps) {
  const authorName = `${post.author.firstName} ${post.author.lastName}`;
  const publishedDate = dayjs(post.published).format("MMMM D, YYYY");

  return (
    <Link href={"/blog/post/" + post.id}>
      <Box display="flex" sx={{height: "60vh", position: "relative"}}>
        <Image alt="news title image" src={post.imageUrl} fill={true} style={{objectFit: "cover", objectPosition: "50% 50%"}} priority />
        <Box p="xl" sx={{background: "rgba(0,0,0,0.5)", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "end", zIndex: 2}}>
          <Box style={{maxWidth: "650px"}}>
            <Title order={1} style={{textShadow: "1px 1px 4px black"}}>
              {post.title + ' '}
              <span style={{color: "#b2b2b2", fontWeight: 400}}>{post.subtitle}</span>
            </Title>
            <Text size="sm" my="lg" color="#b2b2b2">by {authorName} - {publishedDate} - {post.readTime} minute read</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}