import {
  Box,
  Heading,
  Link,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import DarkModeWrapper from './DarkModeWrapper'

export default function MDXCompProvider(props) {
  const state = {
    h1: (props) => <Heading my={4} as="h2" size="lg" {...props} />,
    h2: (props) => <Heading my={4} as="h3" size="md" {...props} />,
    h3: (props) => <Heading my={4} as="h4" size="sm" {...props} />,
    h4: (props) => <Heading my={4} as="h5" size="xs" {...props} />,
    p: (props) => (
      <Text as="p" sx={{ mb: '2', lineHeight: '1.5' }} {...props} />
    ),
    a: (props) => <Link as="a" {...props} />,
    ul: (props) => <UnorderedList {...props} />,
    li: (props) => <ListItem {...props} />,
    table: (props) => (
      <DarkModeWrapper>
        <Table variant="simple" {...props} />
      </DarkModeWrapper>
    ),
    th: (props) => <Th {...props} />,
    thead: (props) => <Thead {...props} />,
    tr: (props) => <Tr {...props} />,
    td: (props) => <Td {...props} />,
    tbody: (props) => <Tbody {...props} />,
  }

  return (
    <MDXProvider components={state}>
      <Box {...props} />
    </MDXProvider>
  )
}
