import type {AppState} from '@/store';
import type {PayloadAction} from '@reduxjs/toolkit';

import {createSlice, createSelector} from '@reduxjs/toolkit';

export interface AgentRoutesData {
  title: string;
  routesData: {
    flag: string;
    countryCode?: string;
    name: string;
    checked: boolean;
  }[];
}

interface AdditionalService {
  [key: string]: any;
  pickUp?: boolean;
  dropOff?: boolean;
  insurance?: boolean;
  customsClearance?: boolean;
}

export interface Location {
  type: string;
  countryCode: string;
}

export interface Route {
  id: string;
  categories: string[];
  routeLocations: Location[];
  routeDefaultLocations: Location[];
  additionalService: AdditionalService;
  defaultService: AdditionalService | null;
  defaultCategories: string[] | null;
}

export interface RoutesState {
  loading: string;
  locations: AgentRoutesData[];
  route: Route;
}

const initialState: RoutesState = {
  loading: '',
  locations: [],
  route: {
    id: '',
    categories: [],
    routeLocations: [],
    routeDefaultLocations: [],
    defaultService: null,
    defaultCategories: null,
    additionalService: {
      pickUp: false,
      dropOff: false,
      insurance: false,
      customsClearance: false,
    },
  },
};

const slice = createSlice({
  name: 'routesState',
  initialState,
  reducers: {
    setRoutesLoading: (state, {payload}: PayloadAction<string>) => {
      state.loading = payload;
    },

    setRoute: (state, {payload}: PayloadAction<Route>) => {
      state.route = payload;
    },

    setLocations: (state, {payload}: PayloadAction<AgentRoutesData[]>) => {
      state.locations = [...payload];
    },

    setRouteLocations: (state, {payload}: PayloadAction<Location[]>) => {
      state.route.routeLocations = payload;
    },

    setDefaultLocations: (state, {payload}: PayloadAction<Location[]>) => {
      state.route.routeDefaultLocations = payload;
    },

    setAdditionalServices: (
      state,
      {payload}: PayloadAction<AdditionalService>
    ) => {
      state.route.additionalService = payload;
    },

    setDefaultAdditionalServices: (
      state,
      {payload}: PayloadAction<AdditionalService>
    ) => {
      state.route.defaultService = payload;
    },

    setDefaultCategories: (state, {payload}: PayloadAction<string[]>) => {
      state.route.defaultCategories = payload;
    },

    updateRouteAddtionalService: (
      state,
      {payload}: PayloadAction<string>
    ): void => {
      const {additionalService} = state.route;
      additionalService[payload] = !additionalService[payload];
    },

    setRouteCategories: (state, {payload}: PayloadAction<string[]>) => {
      state.route.categories = payload;
    },

    changeRouteCategories: (state, {payload}: PayloadAction<string>) => {
      const {categories} = state.route;

      if (categories.indexOf(payload) === -1) {
        categories.push(payload);
      } else {
        state.route.categories = categories.filter(
          (id: string) => id !== payload
        );
      }
    },
  },
});

export const {
  setRoute,
  setLocations,
  setRoutesLoading,
  setRouteLocations,
  setRouteCategories,
  setDefaultLocations,
  setDefaultCategories,
  changeRouteCategories,
  setAdditionalServices,
  setDefaultAdditionalServices,
  updateRouteAddtionalService,
} = slice.actions;

export default slice.reducer;

export const getRoutesLoading = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.loading
);

export const getRoutes = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.route
);

export const getRoutesId = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.route.id
);

export const getRouteCategories = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.route.categories
);

export const getRouteAdditionalServices = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.route.additionalService
);

export const getRouteDefaultAdditionalServices = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.route.defaultService
);

export const getRouteDefaultCategories = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.route.defaultCategories
);

export const getLocations = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.locations
);

export const getRouteLocations = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.route.routeLocations
);

export const getRouteDefaultLocations = createSelector(
  (state: AppState) => state.routesState,
  (state) => state.route.routeDefaultLocations
);
