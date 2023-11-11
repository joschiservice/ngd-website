import {Box, Text, Title} from "@mantine/core";
import Image from "next/image";
import {NewsItemProps} from "@/components/Blog/NewsItems/NewsItem";

export function SmallNewsItem({post}: NewsItemProps) {
  const authorName = `${post.author.firstName} ${post.author.lastName}`;
  const publishedDate = post.published.toDateString();

  return (
    <Box display="flex" style={{alignItems: "center"}}>
      <Box style={{height: "200px", width: "600px", position: "relative", overflow: "hidden"}}>
        <Image alt="news title image" src={post.imageUrl} fill={true} style={{objectFit: "cover", objectPosition: post.objectPosition}} />
      </Box>
      <Box px="xl" style={{width: "100%"}}>
        <Title order={3}>
          {post.title + ' '}
          <span style={{color: "#797979"}}>{post.subtitle}</span></Title>
        <Text size="sm" my="sm" color="dimmed">by {authorName} - {publishedDate}</Text>
      </Box>
    </Box>
  )
}