import { ColorScheme } from '@mantine/core';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'light' ? 'dark' : 'light');
    Cookies.set('color-scheme', nextColorScheme);

    setColorScheme(nextColorScheme);
  };

  useEffect(() => {
    const colorScheme = Cookies.get('color-scheme') as ColorScheme;
    if (colorScheme) {
      setColorScheme(colorScheme);
    }
    console.log('colorScheme', colorScheme);
  }, [colorScheme]);

  return { colorScheme, toggleColorScheme };
};
