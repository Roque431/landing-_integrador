// Paleta de colores personalizada de LexIA
export const theme = {
  colors: {
    // Colores principales basados en la paleta personalizada
    primary: {
      light: '#E8A894', // versión más clara del secondary
      main: '#D19A86',  // SECONDARY_COLOR
      dark: '#B8876F',  // versión más oscura
      darker: '#A07457',
    },
    secondary: {
      light: '#4A453C', // versión más clara del tertiary
      main: '#302E28',  // TERTIARY_COLOR
      dark: '#25231E',
    },
    // Accent color para destacar elementos importantes
    accent: {
      light: '#F0E2D8',
      main: '#E8D9CE',  // ACCENT_COLOR
      dark: '#D4C1B1',
    },
    background: {
      paper: '#F8F4EF', // PRIMARY_COLOR
      main: '#FFFFFF',
      hero: '#F8F4EF',  // PRIMARY_COLOR
      dark: '#F2EDE6',
    },
    text: {
      primary: '#302E28', // TERTIARY_COLOR para texto principal
      secondary: '#5A5650',
      light: '#8A8680',
      inverse: '#FFFFFF',
    },
    border: '#E8D9CE', // ACCENT_COLOR para bordes
    success: '#7FA976',
    warning: '#E8B961',
    error: '#D19A86', // Usando el secondary color para errores suaves
  },
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      // use a classic serif for headings to give a more legal/official tone
      secondary: '"Merriweather", Georgia, "Times New Roman", serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem',
    '5xl': '5rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
};

export type Theme = typeof theme;

