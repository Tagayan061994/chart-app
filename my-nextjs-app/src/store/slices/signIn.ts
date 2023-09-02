import type {AppState} from '@/store';
import type {PayloadAction} from '@reduxjs/toolkit';

import {createSlice, createSelector} from '@reduxjs/toolkit';

export interface SignInValues {
  email: string;
  password: string;
}

export interface SignInState {
  loading: boolean;
  signInValues: SignInValues;
  valid: {
    [property in keyof SignInValues]: boolean;
  };
}

const initialState: SignInState = {
  loading: false,
  signInValues: {
    email: '',
    password: '',
  },
  valid: {
    email: false,
    password: false,
  },
};

const slice = createSlice({
  name: 'signInState',
  initialState,
  reducers: {
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setSignInValues: (state, {payload}: PayloadAction<SignInValues>) => {
      state.signInValues = payload;
    },

    setValid: (state, {payload}) => {
      state.valid = {...state.valid, ...payload};
    },
  },
});

export const {setLoading, setSignInValues, setValid} = slice.actions;
export default slice.reducer;

export const getLoading = createSelector(
  (state: AppState) => state.signInState,
  (state) => state.loading
);

export const getSignInValues = createSelector(
  (state: AppState) => state.signInState,
  (state) => state.signInValues
);

export const getSignInFormValid = createSelector(
  (state: AppState) => state.signInState,
  ({valid}) => {
    let key: keyof typeof valid;

    for (key in valid) {
      if (!valid[key]) return false;
    }

    return true;
  }
);
