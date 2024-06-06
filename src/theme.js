import { extendTheme } from "@chakra-ui/react";

// Colors
const colors = {
  brand: {
    darkRaspberry: "#5a0d39",
    cobaltBlue: "#2f5cad",
    oxfordBlue: "#0f172a",
    eerieBlack: "18181b",
    gunmetalGray: "#52525b",
  },
};

// Fonts
const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

// Font Sizes
const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem", // 72px
  "8xl": "6rem", // 96px
  "9xl": "8rem", // 128px
};

// Line Heights
const lineHeights = {
  xs: "1rem", // 16px
  sm: "1.25rem", // 20px
  md: "1.5rem", // 24px
  lg: "1.75rem", // 28px
  xl: "1.75rem", // 28px
  "2xl": "2rem", // 32px
  "3xl": "2.25rem", // 36px
  "4xl": "2.5rem", // 40px
  "5xl": "1", // 48px
  "6xl": "1", // 60px
  "7xl": "1", // 72px
  "8xl": "1", // 96px
  "9xl": "1", // 128px
};

// Breakpoints
const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

// Padding
const space = {
  paddingX: {
    base: "16px", // Phones (portrait)
    sm: "20px", // Phones (landscape)
    md: "24px", // Tablets
    lg: "32px", // Laptops
    xl: "40px", // Desktops
  },
  paddingY: {
    base: "30px", // Phones (portrait)
    sm: "40px", // Phones (landscape)
    md: "24px", // Tablets
    lg: "32px", // Laptops
    xl: "40px", // Desktops
  },
};

// Components (optional, for custom component styles)
const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    sizes: {
      xl: {
        h: "56px",
        fontSize: "lg",
        px: "32px",
      },
    },
    variants: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
        },
      },
    },
  },
};

// Theme configuration
const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  lineHeights,
  breakpoints,
  space,
  components,
});

export default theme;
