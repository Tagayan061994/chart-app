import type {AppState} from '@/store';
import type {PayloadAction} from '@reduxjs/toolkit';

import {createSlice, createSelector} from '@reduxjs/toolkit';

interface AdditionalServicePayload {
  [key: string]: boolean;
  pickUp: boolean;
  dropOff: boolean;
  insurance: boolean;
  customsClearance: boolean;
}

export interface AdditionalService {
  [key: string]: boolean | string;
}

export interface AllAdditionalServicesState {
  loading: string;
  allAdditionalService: AdditionalService[];
}

const initialState: AllAdditionalServicesState = {
  loading: '',
  allAdditionalService: [
    {
      name: 'Customs Clearance',
      customsClearance: false,
    },
    {
      name: 'Insurance',
      insurance: false,
    },
    {
      name: 'Delivery to Address',
      dropOff: false,
    },
    {
      name: 'Pick Up/Delivery',
      pickUp: false,
    },
  ],
};

const slice = createSlice({
  name: 'allAdditionalServicesState',
  initialState,
  reducers: {
    setAdditionalServiceLoading: (state, {payload}: PayloadAction<string>) => {
      state.loading = payload;
    },
    setAllAdditionalServices: (
      state,
      {payload}: PayloadAction<AdditionalServicePayload | AdditionalService>
    ) => {
      const serializedAdditionalService = state.allAdditionalService
        .map((service: AdditionalService) => {
          for (const key in service) {
            if (payload.hasOwnProperty(key)) {
              service[key] = payload[key];
              return {...service};
            }
          }
        })
        .filter(
          (service): service is AdditionalService => service !== undefined
        );

      state.allAdditionalService = serializedAdditionalService;
    },
  },
});

export const {setAdditionalServiceLoading, setAllAdditionalServices} =
  slice.actions;
export default slice.reducer;

export const getAdditionalServicesLoading = createSelector(
  (state: AppState) => state.allAdditionalServicesState,
  (state): string => state.loading
);

export const getAdditionalServices = createSelector(
  (state: AppState) => state.allAdditionalServicesState,
  (state): AdditionalService[] => state.allAdditionalService
);
