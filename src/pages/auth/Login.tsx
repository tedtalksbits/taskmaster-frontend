import { Button, Box, Input } from '@mantine/core';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const handleLogin = () => {
    login(loginData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <Box component='div'>
      <Input
        placeholder='Username'
        name='username'
        onChange={handleInputChange}
      />
      <Input
        placeholder='Password'
        name='password'
        type='password'
        onChange={handleInputChange}
      />
      {JSON.stringify(loginData)}
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;
