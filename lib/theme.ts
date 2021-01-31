import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// bg: #2E2C2F
// bg: #171219

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#FFFFFF', '#171219')(props),
    },
  }),
}

export const theme = extendTheme({
  styles,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#136F63',
      bg: '#161925',
    },
  },
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Nunito', sans-serif",
  },
})
