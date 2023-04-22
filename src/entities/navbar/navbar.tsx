import { AppLinks } from './links';
import { AuthButton } from '@/shared/components/auth';
import React from 'react'

export const Navbar = () => {
  return (
    <nav>
      <AppLinks />
      <AuthButton />
    </nav>
  )
}