import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { SButton } from './logout.styles';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <SButton
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </SButton>
  );
};
