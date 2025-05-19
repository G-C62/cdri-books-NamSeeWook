export const typography = {
  title1: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '24px',
  },
  title2: {
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '24px',
  },
  title3: {
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '18px',
  },
  body1: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '20px',
  },
  body2: {
    fontSize: '14px',
    lineHeight: '14px',
  },
  caption: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '16px',
  },
  small: {
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '10px',
  },
} as const;

export type TypographyKey = keyof typeof typography; 