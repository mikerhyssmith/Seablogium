import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import MDXProvider from '../components/MDXProvider'
import { theme } from '../lib/theme'
import '../styles/globals.css'
import Seablogium from './seablogium'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider>
        <Seablogium Component={Component} pageProps={pageProps} />
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
