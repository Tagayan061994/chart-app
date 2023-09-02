import type {AppState} from '@/store';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {StaticImageData} from 'next/image';

import {createSlice, createSelector} from '@reduxjs/toolkit';
import {apiCallBegan} from '@/store/api';

export type RoleValue = 'CLIENT' | 'AGENT';

export interface Role {
  title: 'Shipper' | 'Fowarder';
  value: RoleValue;
  imageUrl: StaticImageData;
  selectedImgUrl: StaticImageData;
}

export interface User {
  role: RoleValue | '';
  fullName: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

export interface UserState {
  loading: boolean;
  user: User;
  valid: {
    [property in keyof User]: boolean;
  };
}

const initialState: UserState = {
  loading: false,
  user: {
    role: '',
    fullName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  },
  valid: {
    role: false,
    fullName: false,
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false,
  },
};

const slice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setRole: (state, {payload}: PayloadAction<RoleValue>) => {
      state.user.role = payload;
      state.valid.role = true;
    },

    setUser: (state, {payload}: PayloadAction<User>) => {
      state.user = payload;
    },

    setValid: (state, {payload}) => {
      state.valid = {...state.valid, ...payload};
    },
  },
});

export const {setLoading, setRole, setUser, setValid} = slice.actions;
export default slice.reducer;

// To Do research why no API calls are fired
export const signUp = (user: Omit<User, 'confirmEmail' | 'confirmPassword'>) =>
  apiCallBegan({
    url: '/auth/register',
    method: 'post',
    data: user,
    onSuccess: setUser.type,
  });

export const getLoading = createSelector(
  (state: AppState) => state.userState,
  (state) => state.loading
);

export const getRole = createSelector(
  (state: AppState) => state.userState,
  (state) => state.user.role
);

export const getUser = createSelector(
  (state: AppState) => state.userState,
  (state) => state.user
);

export const getRoleFormValid = createSelector(
  (state: AppState) => state.userState,
  ({valid}) => valid.role
);

export const getUserFormValid = createSelector(
  (state: AppState) => state.userState,
  ({valid}) => {
    let key: keyof typeof valid;

    for (key in valid) {
      if (!valid[key]) return false;
    }

    return true;
  }
);
