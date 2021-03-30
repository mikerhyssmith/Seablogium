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
      as="header"
      align="center"
      justify="space-between"
      direction="column"
      wrap="wrap"
      px="1.5rem"
      py="0.75rem"
      bg="brand.900"
      color="white"
      height={show ? '100vh' : 'auto'}
    >
      <Flex
        align="center"
        justifyContent="space-between"
        width="100%"
        height="min-content"
      >
        <LinkBox href="/" width="20%">
          <Box width="3.5em" boxShadow="dark-lg">
            <Icon />
          </Box>
        </LinkBox>
        <Box display="block" cursor="pointer" onClick={handleToggle}>
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
      </Flex>

      <Flex
        display={show ? 'block' : 'none'}
        width="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box px={20} marginBottom="0.75em">
          <Text fontSize="lg">
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
      </Flex>

      <Center
        display={show ? 'flex' : 'none'}
        width="full"
        justifyContent="space-between"
        flexDirection="row"
        alignSelf="flex-end"
        px={20}
      >
        <Link
          href="https://twitter.com/mikerhyssmith"
          isExternal
          target="_blank"
        >
          <AiFillTwitterSquare size="2em" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mikerhyssmith/"
          isExternal
          target="_blank"
        >
          <AiFillLinkedin size="2em" />
        </Link>
        <Link
          href="https://github.com/mikerhyssmith"
          isExternal
          target="_blank"
        >
          <FaGithubSquare size="2em" />
        </Link>
      </Center>
      <Center display={show ? 'block' : 'none'}>
        {colorMode === 'light' && (
          <Button
            display="flex"
            alignItems="center"
            size="lg"
            variant="unstyled"
            title="Toggle to dark mode"
            onClick={toggleColorMode}
          >
            <BsMoon size="1.5em" />
          </Button>
        )}

        {colorMode === 'dark' && (
          <Button
            display="flex"
            alignItems="center"
            size="lg"
            variant="unstyled"
            title="Toggle to light mode"
            onClick={toggleColorMode}
          >
            <BsSun size="1.5em" />
          </Button>
        )}
      </Center>
    </Flex>
  )
}
