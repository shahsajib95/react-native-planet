import { colors } from "../../theme/color";
import { typogrphy } from "../../theme/typogrphy";

const BASE = {
  fontFamily: typogrphy.primary,
  fontSize: 16,
  color: colors.white,
};
const BASE_BOLD = {
  fontFamily: typogrphy.primaryBold,
  fontSize: 16,
  color: colors.white,
};
const BOLD = {
  fontFamily: typogrphy.bold,
  color: colors.white,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BOLD,
    fontSize: 24,
  },
  h3: {
    ...BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
