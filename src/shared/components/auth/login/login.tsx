import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { SButton } from './login.styles';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <SButton onClick={() => loginWithRedirect()}>Log In</SButton>;
};
