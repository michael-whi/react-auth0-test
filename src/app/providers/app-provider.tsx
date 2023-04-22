import { TStore } from '@/shared/types';
import { createStore } from '@/shared/utils';

const store: TStore = {
  state: {
    loading: false,
    error: null
  },
  setters: {
    setLoading: (_, loading: boolean) => ({ loading }),
    setError: (_, error: any) => ({ error })
  }
}

export const [AppProvider, useAppStore, useAppSetter] = createStore(store)