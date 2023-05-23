import { MantineThemeOverride } from '@mantine/core';
import { themeColors } from './themeColors';

const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'purple',
  primaryShade: 5,
  colors: themeColors as any,
};

export default theme;
