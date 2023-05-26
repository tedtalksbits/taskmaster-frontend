import { Button, Box, Input } from '@mantine/core';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const loginFn = login();

  const handleLogin = () => {
    if (!loginData.username || !loginData.password) {
      setError('Username and password are required');
      return;
    }
    loginFn.mutate(loginData, {
      onSuccess: (data) => {
        console.log(data);
        navigate('/');
      },
      onError: (error) => {
        const { message } = error as any;
        console.log(message);
        setError(message);
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <Box component='div'>
      <Input
        placeholder='Username'
        name='username'
        onChange={handleInputChange}
        value={loginData.username}
        pattern='[A-Za-z0-9]{3,}'
      />
      <Input
        placeholder='Password'
        name='password'
        type='password'
        onChange={handleInputChange}
        onInvalid={(e) => {
          e.preventDefault();
          console.log('invalid');
          setError('Password is required');
        }}
        value={loginData.password}
        pattern='[A-Za-z0-9]{3,18}'
      />
      <Button onClick={handleLogin}>Login</Button>
      {loginFn.isError && <div>{loginFn.data}</div>}
      {error}
      {loginFn.isLoading && <div>Loading...</div>}
    </Box>
  );
};

export default Login;
