import React from 'react';
import { AppLinks } from './links';
import { AuthButton } from '@/shared/components/auth';

export const Navbar = () => (
  <nav>
    <AppLinks />
    <AuthButton />
  </nav>
);
