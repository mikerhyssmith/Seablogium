import { Box, Center, Flex } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import Icon from '../assets/svg/Seablogium.svg'

export const Sidebar: FunctionComponent = () => {
  return (
    <Box bg="brand.900" w="100%" p={4} color="white">
      <Flex flexDirection="column" w="100%" color="white">
        <Center mt="2em">
          <Box boxShadow="dark-lg" width="60%">
            <Icon width="100%" />
          </Box>
        </Center>
      </Flex>
    </Box>
  )
}
