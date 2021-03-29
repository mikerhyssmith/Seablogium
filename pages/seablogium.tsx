import { Grid, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

function Seablogium({ Component, pageProps }) {
  const isMobile = useBreakpointValue({ md: false, sm: true })

  console.log(isMobile)

  return (
    <>
      {isMobile && (
        <Grid h="100vh" templateRows="auto 90%" gap={4} overflow="hidden">
          <Header />
          <Component {...pageProps} />
        </Grid>
      )}
      {!isMobile && (
        <Grid
          h="100vh"
          templateColumns="auto minmax(85%,1fr)"
          gap={4}
          overflow="hidden"
        >
          <Sidebar />
          <Component {...pageProps} />
        </Grid>
      )}
    </>
  )
}

export default Seablogium
