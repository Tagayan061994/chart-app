import type { ThunkAction, Action } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
import reducer from "@/store/reducer";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

const wrapper = createWrapper<AppStore>(makeStore);
export default wrapper;
