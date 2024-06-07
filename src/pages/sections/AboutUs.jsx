import {
  Box,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

import quotationMarks from "../../assets/quotation-marks.png";
import colleagues from "../../assets/colleagues.jpg";
import dots from "../../assets/dots.png";

const AboutUs = () => {
  const theme = useTheme();
  const paddingX = theme.space.paddingX;
  const paddingY = theme.space.paddingY;

  return (
    <Box
      id="aboutUs"
      position="relative"
      paddingX={paddingX}
      paddingY={paddingY}
      color="brand.eerieBlack"
      display="flex"
      flexDirection="column"
      gap={10}
    >
      <VStack align="center" justifyContent="center" width="full" spacing={0}>
        <Text
          fontWeight="bold"
          color="brand.cobaltBlue"
          fontSize={["lg", "xl", "2xl"]}
        >
          O nama
        </Text>
        <Heading
          fontWeight="bold"
          textAlign="center"
          as="h2"
          fontSize={["4xl", "5xl", "6xl"]}
          color="brand.eerieBlack"
          lineHeight={["4xl", "5xl", "7xl"]}
        >
          Naša posvećenost vašem uspehu
        </Heading>
      </VStack>
      <VStack width="full" spacing={0} align="start" gap={4}>
        <Image
          height={["20px", "22px", "40px"]}
          objectFit="cover"
          src={quotationMarks}
          alt="quotation-marks"
        />
        <Text
          fontWeight="bold"
          color="brand.eerieBlack"
          fontSize={["lg", "xl", "2xl"]}
        >
          Poslujemo preko 20 godina, sa klijentima od velikih lanaca apoteka do
          IT firmi, naš tim koji ste do sada viđali na poslovnim sastancima sada
          možete videti i online.
        </Text>
        <VStack width="full" spacing={0} align="start" gap={4}>
          <Text
            fontWeight="bold"
            color="brand.eerieBlack"
            fontSize={["lg", "xl", "2xl"]}
          >
            Nakon ekspertize u oblasti knjigovodstva vreme je da se naš tim
            širi.
          </Text>
          <UnorderedList display="flex" flexDirection="column" gap={2}>
            <ListItem color="brand.gunmetalGray" fontSize={["lg", "xl", "2xl"]}>
              Pružamo prilike mladim ljudima da pre svega kroz praksu steknu
              znanje iz oblasti knjigovodstva i na taj način damo šansu za
              razvoj i ostanak u našoj kompaniji.
            </ListItem>
            <ListItem color="brand.gunmetalGray" fontSize={["lg", "xl", "2xl"]}>
              Otvoreni smo za mlade ljude, početnike ali i za iskusnije
              knjigovođe koji su se već susretali sa knjigovodstvom.
            </ListItem>
          </UnorderedList>
        </VStack>
        <Image
          borderRadius="lg"
          height={["280px", "300px", "400px"]}
          objectFit="cover"
          src={colleagues}
          alt="colleagues"
          zIndex={1}
        />
      </VStack>
      <Box position="absolute" right={0} bottom="-10%" zIndex={0}>
        <Image src={dots} alt="dots" width="150px" />
      </Box>
    </Box>
  );
};

export default AboutUs;
