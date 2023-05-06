import React from 'react';

export type TState = { [k: string]: any };
export type TInitialSetters = {
  [k: string]: (s: TState, ...args: any[]) => void | Partial<TState>;
};
export type TProxySetters = { [k: string]: (v: any) => void };
export type TStore = { state: TState; setters: TInitialSetters };
export type TChildren = { children: React.ReactNode };
