import React from 'react';
import { Box, Text } from '@mantine/core';

const NotFound = () => {
  return (
    <Box p={10} w={400} component='main' m='auto'>
      <Text
        sx={(theme) => ({
          fontSize: 100,
          fontWeight: 700,
        })}
      >
        404
      </Text>
      <Text sx={{ fontSize: 30, fontWeight: 500 }}>Page not found</Text>

      <Text sx={{ fontSize: 20, fontWeight: 400 }}>
        The page you are looking for does not exist or has been moved.
      </Text>

      <Text sx={{ fontSize: 20, fontWeight: 400 }}>
        Go back to the home page
      </Text>

      <Text sx={{ fontSize: 20, fontWeight: 400 }}>
        <a href='/'>Home</a>
      </Text>
    </Box>
  );
};

export default NotFound;
