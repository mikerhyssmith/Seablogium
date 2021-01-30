import '../styles/globals.css'
import { ChakraProvider, Grid, Box, extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import fonts from '../lib/fonts'
import { Sidebar } from '../components/Sidebar'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#136F63',
    },
  },
  fonts: {
    body: "'Nunito', sans-serif",
    heading: 'Georgia, serif',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Grid h="100vh" templateColumns="15em 1fr" gap={4}>
        <Sidebar />
        <Component {...pageProps} />
      </Grid>
    </ChakraProvider>
  )
}

export default MyApp
