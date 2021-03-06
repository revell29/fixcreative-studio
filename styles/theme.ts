import { extendTheme, theme as defaultTheme, ThemeOverride } from '@chakra-ui/react';

export default extendTheme(<ThemeOverride>(<unknown>{
  colors: {
    success: {
      lighter: '#D3E5FF',
      light: '#3291FF',
      default: '#0070F3',
      dark: '#0761D1',
    },
    warning: {
      lighter: '#FFEFCF',
      light: '#F7B955',
      default: '#F5A623',
      dark: '#AB570A',
    },
    violet: {
      lighter: '#D8CCF1',
      light: '#8A63D2',
      default: '#7928CA',
      dark: '#4C2889',
    },
    highlight: {
      purple: '#F81CE5',
      magenta: '#EB367F',
      pink: '#FF0080',
      yellow: '#FFF500',
    },
    primary: {
      bg: '#fff',
      accent1: 'FAFAFA',
      accent2: '#EAEAEA',
      accent3: '#999',
      accent4: '#888',
      accent5: '#666',
      accent6: '#444',
      accent7: '#333',
      accent8: '#111',
      foreground: '#000',
      darkblue: '#090b18',
    },
  },

  components: {
    Text: {
      baseStyle: {
        fontWeight: 100,
        color: '#666',
        letterSpacing: '-0.003em',
        lineHeight: '2.2em',
        fontSize: '15px',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 100,
        color: '#000',
        fontSize: '15px',
      },
    },
  },

  shadows: {
    'shadow-smallest': '0px 2px 4px rgba(0,0,0,0.1)',
    'shadow-extra-small': '0px 4px 8px rgba(0,0,0,0.12)',
    'shadow-small': '0 5px 10px rgba(0,0,0,0.12)',
    'shadow-medium': '0 8px 30px rgba(0,0,0,0.12)',
    'shadow-large': '0 30px 60px rgba(0,0,0,0.12)',
    'shadow-hover': '0 30px 60px rgba(0,0,0,0.12)',
    'shadow-stiky': '0 12px 10px -10px rgba(0,0,0,0.12)',
    'shadow-soft': '0 5px 10px rgb(73 84 100 / 5%)',
  },
  fonts: {
    body: `'Poppins',${defaultTheme.fonts.body}`,
    heading: `'Antic Didone',${defaultTheme.fonts.heading}`,
  },

  config: {
    initialColorMode: 'white',
  },
  styles: {
    global: {
      '::selection, ::-moz-selection': {
        bgColor: 'whiteAlpha.400',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      'button:focus': {
        outline: 'none !important',
        boxShadow: 'none',
      },
      body: {
        background: 'white',
        cursor: 'default',
        fontFamily: 'body',
        lineHeight: 'base',
        minH: '100vh',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
      },
      '#nprogress': {
        pointerEvents: 'none',
      },
      '#nprogress .bar': {
        bgGradient: 'linear(to-r, whiteAlpha.400, yellow.200)',
        h: '2px',
        left: 0,
        pos: 'fixed',
        top: 0,
        w: 'full',
        zIndex: 2000,
      },
      '.nprogress-custom-parent': {
        overflow: 'hidden',
        position: 'absolute',
      },
    },
  },
}));
