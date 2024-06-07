import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/sections/Hero";
import SocialNetworks from "./components/socialNetworks/socialNetworks";
import AboutUs from "./pages/sections/AboutUs";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <SocialNetworks />
      <AboutUs />
    </ChakraProvider>
  );
};

export default App;
