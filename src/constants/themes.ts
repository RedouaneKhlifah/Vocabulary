import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export const COLORS = {
  // Primary colors
  primary: '#EEE5D4',
  secondary: '#808080', 

  // Neutral colors
  white: '#ffffff',
  black: '#000000',
  gray: "#737372",

  // Additional colors can be added here...
};

export const SIZES = {
  // Spacing (tailwind-like naming)
  spaceXxs: 2, // Extra extra small
  spaceXs: 4,  // Extra small
  spaceSm: 8,  // Small
  spaceMd: 12, // Medium
  spaceLg: 16, // Large
  spaceXl: 24, // Extra large
  space2xl: 32, // 2x Extra large
  space3xl: 40, // 3x Extra large

  // Border radius (tailwind-like naming)
  roundedSm: 4,
  rounded: 8,
  roundedMd: 12,
  roundedLg: 16,
  roundedXl: 24,
  roundedFull: 999,

  // Font sizes (tailwind-like naming)
  textXxs: 10,
  textXs: 12,
  textSm: 14,
  textBase: 16,
  textLg: 18,
  textXl: 20,
  text2xl: 24,
  text3xl: 30,
  text4xl: 36,
  text5xl: 48,
  text6xl: 60,

  // App dimensions
  screenW: width,
  screenH: height,
};

export const FONTS = {
  // Font styles with tailwind-like naming
  largeTitle: {
    fontFamily: 'System-Bold',
    fontSize: SIZES.text5xl,
    lineHeight: 55,
  },
  semiLargeTitle: { fontFamily: 'System-Regular', fontSize: SIZES.text4xl },
  heading1: { fontFamily: 'System-Bold', fontSize: SIZES.text3xl },
  heading2: { fontFamily: 'System-Bold', fontSize: SIZES.text2xl },
  headingSm: { fontFamily: 'System-Bold', fontSize: SIZES.textLg },
  heading3: { fontFamily: 'System-Regular', fontSize: SIZES.textBase },
  heading4: { fontFamily: 'System-Regular', fontSize: SIZES.textSm },
  heading5: { fontFamily: 'System-Regular', fontSize: SIZES.textXs },

  bodyLg: {
    fontFamily: 'System-Regular',
    fontSize: SIZES.text3xl,
    lineHeight: 36,
  },
  bodyMd: {
    fontFamily: 'System-Regular',
    fontSize: SIZES.text2xl,
    lineHeight: 30,
  },
  bodySm: {
    fontFamily: 'System-Regular',
    fontSize: SIZES.textBase,
  },
  bodyXs: {
    fontFamily: 'System-Regular',
    fontSize: SIZES.textSm,
  },
  bodyXxs: {
    fontFamily: 'System-Regular',
    fontSize: SIZES.textXs,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
