import {
  Button,
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  AppShell,
} from '@mantine/core';
import theme from './config/theme';
import { useColorScheme } from './hooks/useColorScheme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteProtection from '../middleware/RouteProtection';
import NotFound from './pages/error/404';
import Dashboard from './pages/dashboard';
import Login from './pages/auth/Login';

function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...theme, colorScheme }}
      >
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<RouteProtection />}>
              <Route path='/' element={<Dashboard />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
