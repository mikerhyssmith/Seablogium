import { Box, Button, Center, Flex, useColorMode } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import Icon from '../assets/svg/Seablogium.svg'
import { BsMoon, BsSun } from 'react-icons/bs'

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
        <Center mt="2em">
          <Box boxShadow="dark-lg" width="75%">
            <Icon width="100%" />
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
