import React from 'react';
import { Box, AppShell } from '@mantine/core';
import AppBar from '../../components/AppBar';
const Dashboard = () => {
  return (
    <AppShell
      className='App'
      navbar={
        <Box
          sx={(theme) => ({
            borderRight: `1px solid ${theme.colors.gray[8]}`,
          })}
          p={10}
          w={400}
          component='nav'
        >
          Nav bar
        </Box>
      }
      header={<AppBar />}
    >
      <Box p={10} w={400} component='main'>
        Main
      </Box>
    </AppShell>
  );
};

export default Dashboard;
