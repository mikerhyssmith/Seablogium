import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// bg: #2E2C2F
// bg: #171219

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#FFFFFF', '#0E0F19')(props),
    },
  }),
}

export const theme = extendTheme({
  styles,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#136F63',
      bg: '#161925',
      cntnr_dark: '#272838',
      cntnr_light: '#EBEBEB',
    },
  },
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Nunito', sans-serif",
  },
})
