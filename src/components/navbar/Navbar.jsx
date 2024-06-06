import {
  Flex,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
  Icon,
  Box,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full">
      <Flex
        bg="white"
        align="center"
        justify="space-between"
        p={4}
        alignItems="center"
      >
        <Icon
          as={HamburgerIcon}
          boxSize="24px"
          color="brand.eerieBlack"
          variant="ghost"
          aria-label="Menu"
          onClick={() => {
            onOpen();
          }}
        />

        <Image
          height={["36px", "48px", "120px"]}
          objectFit="cover"
          src={logo}
          alt="logo"
        />
      </Flex>
      <Drawer
        placement="left"
        onClose={() => {
          onClose();
        }}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image width="75%" objectFit="cover" src={logo} alt="logo" />
            <Divider mt={3} borderColor="brand.gunmetalGray" />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={8} color="brand.eerieBlack">
              <Link href="#onama">O nama</Link>
              <Link href="#usluge">Usluge</Link>
              <Link href="#nastim">Naš tim</Link>
              <Link href="#kontakt">Kontakt</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
