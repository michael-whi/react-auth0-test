import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { TChildren } from '@/shared/types';

export const Auth0ProviderWithNavigate = ({ children }: TChildren) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN!}
      clientId={process.env.AUTH0_CLIENT_ID!}
      authorizationParams={{
      redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
 )
}