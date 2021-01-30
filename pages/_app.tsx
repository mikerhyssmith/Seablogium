import "../styles/globals.css";
import { ChakraProvider, Grid, Box, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import fonts from "../lib/fonts";
import Icon from "./Seablogium.svg";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#136F63",
    },
  },
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "Georgia, serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Grid h="100vh" templateColumns="20% 1fr" gap={4}>
        <Box bg="brand.900" w="100%" p={4} color="white">
          This is the Box
        </Box>
        <Component {...pageProps} />
      </Grid>
    </ChakraProvider>
  );
}

export default MyApp;
