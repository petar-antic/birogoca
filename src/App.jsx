import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/sections/Hero";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
    </ChakraProvider>
  );
};

export default App;
