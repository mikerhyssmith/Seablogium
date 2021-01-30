import '../styles/globals.css'
import { ChakraProvider, Grid, Box, extendTheme } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import GoogleFonts from 'next-google-fonts'

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
    heading: "'Nunito', sans-serif",
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" />

      <Grid h="100vh" templateColumns="15em 1fr" gap={4}>
        <Sidebar />
        <Component {...pageProps} />
      </Grid>
    </ChakraProvider>
  )
}

export default MyApp
