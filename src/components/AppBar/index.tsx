import React from 'react';
import {
  Box,
  useMantineColorScheme,
  Button,
  Switch,
  Menu,
} from '@mantine/core';
import { IconMoon, IconSunFilled, IconMenu } from '@tabler/icons-react';
const AppBar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        py: 5,
        borderBottom: `1px solid ${theme.colors.gray[8]}`,
      })}
    >
      <Box sx={{ fontWeight: 700 }}>Logo</Box>
      <Menu>
        <Menu.Target>
          <Button>
            <IconMenu />
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Theme</Menu.Label>

          <Menu.Item>
            <Switch
              checked={dark}
              onChange={() => toggleColorScheme()}
              onLabel={<IconSunFilled />}
              offLabel={<IconMoon />}
              size='lg'
            />
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default AppBar;
