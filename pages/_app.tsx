import '../styles/globals.css'
import { ChakraProvider, Grid } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { theme } from '../lib/theme'
import MDXProvider from '../components/MDXProvider'

import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider>
        <Grid h="100vh" templateColumns="auto minmax(85%,1fr)" gap={4}>
          <Sidebar />
          <Component {...pageProps} />
        </Grid>
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
