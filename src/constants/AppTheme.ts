const palette = {
  WHITE: '#ffffff',
  TRANSPARENT: 'transparent',
  LIGHT_GRAY: '#eeeeef',
  DANGER: '#e74c3c',
  primaryFont: '#222',
  secondaryFont: '#9b9b9b',
};

const AppTheme = {
  colors: palette,
  sizes: {
    minTouchableArea: '44@s',
    imageAspectRatio: 522 / 292,
  },
  spacing: {
    xs: '4@s',
    s: '8@s',
    m: '16@s',
    l: '24@s',
    xl: '40@s',
  },
  textVariants: {
    title: {
      fontSize: '12@mvs',
    },
    body: {
      fontSize: '8@mvs',
    },
  },
};

export default AppTheme;
