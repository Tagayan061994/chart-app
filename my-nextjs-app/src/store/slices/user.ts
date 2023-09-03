import type { AppState } from "@/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { StaticImageData } from "next/image";

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "@/store/api";

export type RoleValue = "CLIENT" | "AGENT";

export interface Role {
  title: "Shipper" | "Fowarder";
  value: RoleValue;
  imageUrl: StaticImageData;
  selectedImgUrl: StaticImageData;
}

export interface User {
  email: string;
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
    email: "",
  },
  valid: {
    email: false,
  },
};

const slice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },

    setValid: (state, { payload }) => {
      state.valid = { ...state.valid, ...payload };
    },
  },
});

export const { setLoading, setUser, setValid } = slice.actions;
export default slice.reducer;

export const getLoading = createSelector(
  (state: AppState) => state.userState,
  (state) => state.loading
);

export const getUser = createSelector(
  (state: AppState) => state.userState,
  (state) => state.user
);

export const getUserEmail = createSelector(
  (state: AppState) => state.userState,
  (state) => state.user.email
);

export const getUserFormValid = createSelector(
  (state: AppState) => state.userState,
  ({ valid }) => {
    let key: keyof typeof valid;

    for (key in valid) {
      if (!valid[key]) return false;
    }

    return true;
  }
);
