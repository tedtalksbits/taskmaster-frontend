import { useEffect, useState } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
const BASE_URL = 'http://localhost:3001/api/v1';
export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function login() {
    return useMutation({
      mutationFn: async (credentials: {
        username: string;
        password: string;
      }) => {
        const response = await fetch(BASE_URL + '/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (response.status === 200) {
          return data;
        } else {
          throw new Error(data.message);
        }
      },
    });
  }

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
    fetch(BASE_URL + '/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      queryClient.invalidateQueries(['auth']);
    })
  );

  const useWhoAmI = () => {
    return useQuery(['auth'], async () => {
      const response = await fetch(BASE_URL + '/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();

      if (response.status === 200) {
        return data;
      } else {
        throw new Error(data.message);
      }
    });
  };

  return {
    login,
    logout: logout.mutate,
    register: register.mutate,
    useWhoAmI,
  };
};

export default useAuth;
