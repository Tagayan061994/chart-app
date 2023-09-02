import type {AppState} from '@/store';
import type {PayloadAction} from '@reduxjs/toolkit';

import {createSlice, createSelector} from '@reduxjs/toolkit';
import {RequestInfo} from '../agentRequest';
import {AgentRequestStatuses} from '@/consts';

export interface QuotesInfo {
  id: string;
  status: AgentRequestStatuses | string;
  requestInfo: RequestInfo;
  selectedCategoryId: string;
}

export interface QuotesState {
  loading: boolean;
  quotes: QuotesInfo[];
  page: number;
  itemsPerPage: number;
  pageCount: number;
}

const initialState: QuotesState = {
  loading: false,
  quotes: [],
  page: 1,
  itemsPerPage: 10,
  pageCount: 0,
};

const slice = createSlice({
  name: 'quotesState',
  initialState,
  reducers: {
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setQuotes: (state, {payload}: PayloadAction<QuotesInfo[]>) => {
      state.quotes = payload;
    },

    setPage: (state, {payload}: PayloadAction<number>) => {
      state.page = payload;
    },

    setItemsPerPage: (state, {payload}: PayloadAction<number>) => {
      state.itemsPerPage = payload;
    },

    setPageCount: (state, {payload}: PayloadAction<number>) => {
      state.pageCount = payload;
    },
  },
});

export const {setLoading, setQuotes, setPage, setItemsPerPage, setPageCount} =
  slice.actions;

export default slice.reducer;

export const getLoading = createSelector(
  (state: AppState) => state.quotesState,
  (state) => state.loading
);
export const getQuotes = createSelector(
  (state: AppState) => state.quotesState,
  (state) => state.quotes
);
export const getPage = createSelector(
  (state: AppState) => state.quotesState,
  (state) => state.page
);

export const getItemsPerPage = createSelector(
  (state: AppState) => state.quotesState,
  (state) => state.itemsPerPage
);

export const getPageCount = createSelector(
  (state: AppState) => state.quotesState,
  (state) => state.pageCount
);
