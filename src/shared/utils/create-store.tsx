import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  TState,
  TInitialSetters,
  TProxySetters,
  TStore,
  TChildren,
} from '@/shared/types';

const createSetters = (
  setters: TInitialSetters,
  setState: React.Dispatch<(prevState: TState) => TState>
) => {
  const proxySetters = {} as TProxySetters;

  for (const key in setters) {
    proxySetters[key] = (...args) => {
      setState((state) => {
        const newState = setters[key](state, ...args);

        return { ...state, ...newState };
      });
    };
  }

  return proxySetters;
};

export function createStore(store: TStore) {
  const StateContext = createContext<TState>(store.state);
  const SetterContext = createContext<TProxySetters>(store.setters);

  const Provider = ({ children }: TChildren) => {
    const [state, setState] = useState(store.state);
    const setters = useMemo(() => createSetters(store.setters, setState), []);

    return (
      <StateContext.Provider value={state}>
        <SetterContext.Provider value={setters}>
          {children}
        </SetterContext.Provider>
      </StateContext.Provider>
    );
  };

  const useStore = () => useContext(StateContext);
  const useSetter = () => useContext(SetterContext);

  return [Provider, useStore, useSetter] as const;
}
