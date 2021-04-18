import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest}) => {
  const { isAuthenticated, user } = useAuth0()
  const isAuthorized = isAuthenticated && user
  return (
    <Route
      {...rest}
      render={() => isAuthorized ? children : <Redirect to='/login' />}
    />
  )
};
export default PrivateRoute;
