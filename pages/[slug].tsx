import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import React from 'react'
import AllComponents from '../components/AllComponents'
import { getAllPostSlugs, getPostdata } from '../lib/posts'

const components = AllComponents

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components })

  return (
    <Box px={2} py={5}>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Breadcrumb mb={9} separator={<Heading>/</Heading>}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Heading>Posts</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="">
            <Heading>{frontMatter.title}</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box>
        <Box sx={{ mt: '2rem' }}>
          <Box sx={{ px: '4rem' }}>{content}</Box>
        </Box>
      </Box>
    </Box>
  )
}
export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug)
  const { data, content } = matter(postContent)
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  })
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
