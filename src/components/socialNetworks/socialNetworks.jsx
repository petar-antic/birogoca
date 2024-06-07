import { Box, Heading, HStack, IconButton, Icon } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

import { FaFacebookF, FaInstagram, FaLinkedin, FaPlus } from "react-icons/fa";

const SocialNetworks = () => {
  const theme = useTheme();
  const paddingX = theme.space.paddingX;
  const paddingY = theme.space.paddingY;

  return (
    <Box
      position="relative"
      paddingX={paddingX}
      paddingY={paddingY}
      minHeight={["68px", "68px", "68px"]}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      gap={["12px", "12px", "12px"]}
      bgColor="brand.oxfordBlue"
      color="white"
    >
      <Icon
        top={2}
        left={2}
        position="absolute"
        as={FaPlus}
        boxSize={["16px", "16px", "16px"]}
      />
      <Heading
        as="h2"
        fontWeight="bold"
        fontSize={["sm", "2xl", "3xl"]}
        textAlign="left"
      >
        Pratite nas na društvenim mrežama
      </Heading>
      <HStack>
        <IconButton
          isRound={true}
          variant="solid"
          size="sm"
          bgColor="#2563EB"
          aria-label="Done"
          fontSize={["16px", "16px", "16px"]}
          icon={<FaFacebookF />}
        />
        <IconButton
          isRound={true}
          variant="solid"
          size="sm"
          bgColor="#1E293B"
          aria-label="Done"
          fontSize={["16px", "16px", "16px"]}
          icon={<FaInstagram />}
        />
        <IconButton
          isRound={true}
          variant="solid"
          bgColor="#1E293B"
          size="sm"
          aria-label="Done"
          fontSize={["16px", "16px", "16px"]}
          icon={<FaLinkedin />}
        />
      </HStack>
    </Box>
  );
};

export default SocialNetworks;
