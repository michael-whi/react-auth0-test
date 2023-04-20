import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(
  <Auth0Provider
    domain=""
    clientId=""
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
);
