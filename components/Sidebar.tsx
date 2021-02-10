import {
  Box,
  Button,
  Center,
  Flex,
  useColorMode,
  Text,
  Link,
} from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import Icon from '../assets/svg/Seablogium.svg'
import { BsMoon, BsSun } from 'react-icons/bs'
import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

export const Sidebar: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg="brand.900" w="100%" p={4} color="white">
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        h="100%"
        w="100%"
        color="white"
      >
        <Center display="flex" flexDirection="column" mt="0.75em">
          <Box boxShadow="dark-lg" width="80%" marginBottom="2em">
            <Icon width="100%" />
          </Box>

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
        </Center>

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
      </Flex>
    </Box>
  )
}
