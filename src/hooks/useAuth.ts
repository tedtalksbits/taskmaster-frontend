import { useEffect, useState } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
const BASE_URL = 'http://localhost:3001/api/v1';
export const useAuth = () => {
  /*
    this hook should return 
    {
      user: User, 
      isLoading: boolean, 
      isError: boolean, 
      error: Error, 
      login: (email: string, password: string) => void, 
      logout: () => void,
      register: (email: string, password: string) => void
    }

    User is an object with the following properties:
    {
      id: string,
      username: string,
      permissions: string[]
      role: string,
      team_id: string,
    }

    login should call the login endpoint and set the user in the state
    logout should call the logout endpoint and remove the user from the state
    register should call the register endpoint and set the user in the state

    the base url for the api is http://localhost:3000/api/v1
  */
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const login = useMutation(
    (credentials: { username: string; password: string }) =>
      fetch(BASE_URL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      }).then((res) => res.json())
  );

  const register = useMutation(
    (credentials: { username: string; password: string }) =>
      fetch(BASE_URL + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      }).then((res) => res.json())
  );

  const logout = useMutation(() =>
    fetch(BASE_URL + '/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      queryClient.invalidateQueries(['auth']);
    })
  );

  // useEffect(() => {
  //   const fetchWhoAmI = async () => {
  //     try {
  //       const res = await fetch(BASE_URL + '/whoami');
  //       const data = await res.json();
  //       if (res.status === 200) {
  //         queryClient.setQueryData(['auth'], data);
  //       } else {
  //         navigate('/login');
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchWhoAmI();
  // }, [navigate, queryClient]);

  // const currentUser = useQuery(['auth'], () =>
  //   queryClient.getQueryData(['auth'])
  // );

  return {
    // user: currentUser.data,
    // isLoading: currentUser.isLoading,
    // isError: currentUser.isError,
    // error: currentUser.error,
    login: login.mutate,
    logout: logout.mutate,
    register: register.mutate,
  };
};

export default useAuth;
