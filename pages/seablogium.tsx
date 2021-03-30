import { Grid, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

function Seablogium({ children }) {
  const isMobile = useBreakpointValue({ base: false, sm: true })

  return (
    <>
      {isMobile && (
        <Grid h="100vh" templateRows="auto 90%" gap={4} overflow="hidden">
          <Header />
          {children}
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
          {children}
        </Grid>
      )}
    </>
  )
}

export default Seablogium
