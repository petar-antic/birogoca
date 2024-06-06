import {
  Box,
  Heading,
  Text,
  HStack,
  Divider,
  Center,
  VStack,
} from "@chakra-ui/react";
import heroIllustration from "../../assets/hero-illustration.png";
import { useTheme } from "@emotion/react";

const Hero = () => {
  const theme = useTheme();
  const paddingX = theme.space.paddingX;
  const paddingY = theme.space.paddingY;

  return (
    <Box
      id="hero"
      paddingX={paddingX}
      paddingY={paddingY}
      color="black"
      minHeight={["calc(100vh - 68px)", "100vh", "100vh"]}
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="space-evenly"
    >
      <VStack spacing={5} align="start">
        <VStack align="start">
          <Heading
            as="h1"
            fontWeight="bold"
            fontSize={["4xl", "5xl", "6xl"]}
            textAlign="left"
          >
            Najbolje od
            <br />
            najboljih.
          </Heading>
          <Text fontSize={["sm", "lg", "xl"]} color="gray.500">
            Lepeza zadovoljnih klijenata iz Niša i okoline svedoči o
            višegodišnjem unapređenju kvaliteta u razvoju poslovanja preduzeća.
          </Text>
        </VStack>
        <HStack width="full" justify="start" spacing={[4, 6, 8]}>
          <HStack spacing={[2, 4, 8]}>
            <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="medium">
              20+
            </Text>
            <Text fontSize={["xs", "md", "lg"]} lineHeight={["xs", "md", "lg"]}>
              godina
              <br />
              iskustva
            </Text>
          </HStack>
          <Center height="64px">
            <Divider
              opacity={1}
              orientation="vertical"
              borderColor="brand.darkRaspberry"
              borderLeftWidth="16px"
            />
          </Center>
          <HStack spacing={[4, 4, 8]}>
            <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="medium">
              30+
            </Text>
            <Text fontSize={["xs", "md", "lg"]} lineHeight={["xs", "md", "lg"]}>
              aktivnih
              <br />
              klijenata
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          src={heroIllustration}
          alt="Illustration"
          style={{ width: "100%", maxWidth: "600px" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
