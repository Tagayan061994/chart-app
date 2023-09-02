import type {AppState} from '@/store';
import type {PayloadAction} from '@reduxjs/toolkit';

import {createSlice, createSelector} from '@reduxjs/toolkit';

import {mdiInstagram} from '@mdi/js';

export interface TGood {
  createdAt: string;
  group: string;
  id: string;
  name: string;
  updatedAt: string;
  icon: string;
}

export interface goodsState {
  loading: string;
  goods: Array<TGood>;
}

const initialState: goodsState = {
  loading: '',
  goods: [],
};

const slice = createSlice({
  name: 'goodsState',
  initialState,
  reducers: {
    setGoodsLoading: (state, {payload}: PayloadAction<string>) => {
      state.loading = payload;
    },
    setGoods: (state, {payload}: PayloadAction<Array<TGood>>) => {
      const serializedGoods = payload.map((good: TGood) => {
        return {...good, icon: mdiInstagram};
      });
      state.goods = serializedGoods;
    },
  },
});

export const {setGoodsLoading, setGoods} = slice.actions;
export default slice.reducer;

export const getGoodsLoading = createSelector(
  (state: AppState) => state.goodsState,
  (state): string => state.loading
);

export const getAllGoods = createSelector(
  (state: AppState) => state.goodsState,
  (state): Array<TGood> => state.goods
);
