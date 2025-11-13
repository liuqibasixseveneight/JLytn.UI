export const zinc = {
  lightest: '#fafafa', // 50
  lighter: '#f4f4f5', // 100
  light: '#e4e4e7', // 200
  muted: '#d4d4d8', // 300
  neutral: '#a1a1aa', // 400
  base: '#71717a', // 500
  dark: '#52525b', // 600
  darker: '#3f3f46', // 700
  deep: '#27272a', // 800
  darkest: '#18181b', // 900
  black: '#09090b', // 950
};

export const theme = {
  colors: {
    zinc,
  },
} as const;

export type Theme = typeof theme;
