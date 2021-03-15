import { Container, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const DarkModeWrapper: FC = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <Container
      height="inherit"
      boxShadow="dark-lg"
      maxW="container.lg"
      background={`brand.cntnr_${colorMode}`}
      p={3}
      borderRadius={1}
      mb={2}
    >
      {children}
    </Container>
  )
}

export default DarkModeWrapper
