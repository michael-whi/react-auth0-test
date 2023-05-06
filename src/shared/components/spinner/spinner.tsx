import React from 'react';
import { Oval } from 'react-loader-spinner';

export const Spinner = ({ width = 50 }: { width?: string | number }) => (
  <Oval color="#0275d8" width={width} />
);
