export const colors = {
  palette: {
    primary: "#4880EE",
    red: "#E84118",
    gray: "#DADADA",
    lightGray: "#F2F4F6",
    white: "#FFFFFF",
    black: "#222222",
  },

  text: {
    primary: "#353C49",
    secondary: "#6D7582",
    subtitle: "#8D94A0",
  },
} as const;

export type PaletteKey = keyof typeof colors.palette;
export type TextKey = keyof typeof colors.text;
export type ColorValue = typeof colors.palette[PaletteKey] | typeof colors.text[TextKey];