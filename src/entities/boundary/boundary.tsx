import { useAppStore } from '@/app/providers';
import { TChildren } from '@/shared/types';
import { Error } from './error';
import { Spinner } from '@/shared/components/spinner';
import React from 'react';

export const Boundary = ({ children }: TChildren) => {
  const { loading, error } = useAppStore();

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

  return <div>{children}</div>;
};
