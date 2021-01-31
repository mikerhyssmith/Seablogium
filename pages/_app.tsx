import '../styles/globals.css'
import { ChakraProvider, Grid } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { theme } from '../lib/theme'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Grid h="100vh" templateColumns="auto minmax(87%,1fr)" gap={4}>
        <Sidebar />
        <Component {...pageProps} />
      </Grid>
    </ChakraProvider>
  )
}

export default MyApp
