import {
  Box,
  Button,
  Center,
  Flex,
  Link,
  LinkBox,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { BsMoon, BsSun } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import Icon from '../assets/svg/Seablogium.svg'

export const Header: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px="1.5rem"
      py="0.75rem"
      bg="brand.900"
      color="white"
    >
      <Flex align="center" mr={1}>
        <LinkBox href="/" width="20%">
          <Box boxShadow="dark-lg">
            <Icon width="100%" />
          </Box>
        </LinkBox>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="1em"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Box width="80%" marginBottom="0.75em">
          <Text fontSize="sm">
            The personal blog of{' '}
            <Link
              isExternal
              target="_blank"
              href="https://twitter.com/mikerhyssmith"
            >
              @mikerhyssmith
            </Link>
            <br />
            <br />
            Posts mostly involve: data, personal finance or the web.
          </Text>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          width="80%"
        >
          <Link
            href="https://twitter.com/mikerhyssmith"
            isExternal
            target="_blank"
          >
            <AiFillTwitterSquare size="1.3em" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mikerhyssmith/"
            isExternal
            target="_blank"
          >
            <AiFillLinkedin size="1.3em" />
          </Link>
          <Link
            href="https://github.com/mikerhyssmith"
            isExternal
            target="_blank"
          >
            <FaGithubSquare size="1.3em" />
          </Link>
        </Box>

        <Center>
          {colorMode === 'light' && (
            <Button
              display="flex"
              alignItems="center"
              size="lg"
              variant="unstyled"
              onClick={toggleColorMode}
            >
              <BsMoon />
            </Button>
          )}

          {colorMode === 'dark' && (
            <Button
              display="flex"
              alignItems="center"
              size="lg"
              variant="unstyled"
              onClick={toggleColorMode}
            >
              <BsSun />
            </Button>
          )}
        </Center>
      </Box>
    </Flex>
  )
}
