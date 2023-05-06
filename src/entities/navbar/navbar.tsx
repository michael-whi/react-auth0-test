import React from 'react';
import { AppLinks } from './links';
import { AuthButton } from '@/shared/components/auth';
import { SNav } from './navbar.styles';

export const Navbar = () => (
  <SNav>
    <AppLinks />
    <AuthButton />
  </SNav>
);
