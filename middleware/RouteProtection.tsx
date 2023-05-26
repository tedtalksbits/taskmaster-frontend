import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../src/hooks/useAuth';
const RouteProtection = () => {
  const { useWhoAmI } = useAuth();

  const whoAmIQuery = useWhoAmI();

  return (
    <>
      {whoAmIQuery.isSuccess ? (
        <Outlet />
      ) : whoAmIQuery.isError ? (
        <Navigate to='/login' />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default RouteProtection;
