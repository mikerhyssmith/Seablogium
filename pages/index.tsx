import { Flex, Heading, Box, Text, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { getSortedPosts } from '../lib/posts'

export interface IBlogIndex {
  allPostsData: {
    date: string
    slug: string
    title: string
    excerpt: string
  }[]
}

const BlogIndex: FunctionComponent<IBlogIndex> = ({ allPostsData }) => {
  return (
    <Box>
      <Heading>Posts</Heading>
      <Flex flexDirection="column">
        <List spacing="3em">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <Box sx={{ my: '0.5rem' }} key={slug}>
              <ListItem>
                <Box>
                  <Link key={slug} href="/[slug]" as={`/${slug}`}>
                    <Heading
                      sx={{
                        fontSize: 'calc(1.6rem + 0.2vw)',
                        fontWeight: '500',
                      }}
                    >
                      {title}
                    </Heading>
                  </Link>
                  <Box sx={{ my: '0.5rem' }}>{excerpt}</Box>
                  <Text>{date}</Text>
                </Box>
              </ListItem>
            </Box>
          ))}
        </List>
      </Flex>
    </Box>
  )
}
export default BlogIndex

export async function getStaticProps() {
  const allPostsData = getSortedPosts()
  return {
    props: {
      allPostsData,
    },
  }
}
