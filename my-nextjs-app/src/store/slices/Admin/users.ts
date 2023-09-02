import type {AppState} from '@/store';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {Contact} from '@/store/slices/contact';
import type {ClientRequestItem} from '@/store/slices/clientRequests';
import type {AgentRequestItem} from '@/store/slices/agentRequests';

import {createSlice, createSelector} from '@reduxjs/toolkit';

export interface UsersInfo {
  id: string;
  fullName: string;
  role: string;
  email: string;
  userContact: Contact & {email: string};
  status: string;
}

export interface UserCategories {
  categoryId: string;
  id: string;
  routeId: string;
}

export interface UserStatisticsInfo {
  month: string;
  adminreviewflag: boolean;
  totalcharge: number;
}

interface AdditionalService {
  [key: string]: any;
}

export interface Location {
  id: number;
  type: string;
  countryCode: string;
}
export interface UserRoutesInfo {
  id: string;
  euForwarder: boolean;
  isTrusted: boolean;
  locations: Location[];
  additionalService: AdditionalService;
  categories: UserCategories[];
}
export interface UsersState {
  loading: boolean;
  users: UsersInfo[];
  subUsersLoading: boolean;
  subUsers: UsersInfo[];
  singleUser: UsersInfo[];
  page: number;
  itemsPerPage: number;
  pageCount: number;
  subPage: number;
  subItemsPerPage: number;
  subPageCount: number;
  routesLoading: boolean;
  userRoute: UserRoutesInfo | null;
  routesPage: number;
  routesItemsPerPage: number;
  routesPageCount: number;
  selectedRoute: UserRoutesInfo | null;
  selectedRouteRole: string;
  clientLoading: boolean;
  clientRequests: ClientRequestItem[];
  clientPage: number;
  clientItemsPerPage: number;
  clientPageCount: number;
  agentLoading: boolean;
  agentRequests: AgentRequestItem[];
  agentPage: number;
  agentItemsPerPage: number;
  agentPageCount: number;
  statistics: UserStatisticsInfo[];
  statisticsLoading: boolean;
}

const initialState: UsersState = {
  loading: false,
  users: [],
  singleUser: [],
  page: 1,
  itemsPerPage: 10,
  pageCount: 0,
  subUsersLoading: false,
  subPage: 1,
  subItemsPerPage: 10,
  subPageCount: 0,
  subUsers: [],
  routesLoading: false,
  userRoute: null,
  routesPage: 1,
  routesItemsPerPage: 10,
  routesPageCount: 0,
  selectedRoute: null,
  selectedRouteRole: '',
  clientLoading: false,
  clientRequests: [],
  clientPage: 1,
  clientItemsPerPage: 10,
  clientPageCount: 0,
  agentLoading: false,
  agentRequests: [],
  agentPage: 1,
  agentItemsPerPage: 10,
  agentPageCount: 0,
  statistics: [],
  statisticsLoading: false,
};

const slice = createSlice({
  name: 'usersState',
  initialState,
  reducers: {
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setUsers: (state, {payload}: PayloadAction<UsersInfo[]>) => {
      state.users = payload;
    },
    setSingleUser: (state, {payload}: PayloadAction<UsersInfo[]>) => {
      state.singleUser = payload;
    },
    setSubUsersLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.subUsersLoading = payload;
    },
    setSubUsers: (state, {payload}: PayloadAction<UsersInfo[]>) => {
      state.subUsers = payload;
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
    setSubPage: (state, {payload}: PayloadAction<number>) => {
      state.subPage = payload;
    },

    setSubItemsPerPage: (state, {payload}: PayloadAction<number>) => {
      state.subItemsPerPage = payload;
    },

    setSubPageCount: (state, {payload}: PayloadAction<number>) => {
      state.subPageCount = payload;
    },

    setUserRoutesLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.routesLoading = payload;
    },
    setUserRoutes: (state, {payload}: PayloadAction<UserRoutesInfo>) => {
      state.userRoute = payload;
    },

    setSelectedUserRole: (state, {payload}: PayloadAction<string>) => {
      state.selectedRouteRole = payload;
    },

    toggleUserTrusted: (state, {payload}: PayloadAction<boolean>) => {
      if (state.userRoute) {
        state.userRoute.isTrusted = payload;
      }
    },

    toggleUserEuForwarder: (state, {payload}: PayloadAction<boolean>) => {
      if (state.userRoute) {
        state.userRoute.euForwarder = payload;
      }
    },

    setClientLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.clientLoading = payload;
    },

    setClientRequests: (
      state,
      {payload}: PayloadAction<ClientRequestItem[]>
    ) => {
      state.clientRequests = payload;
    },

    setClientPage: (state, {payload}: PayloadAction<number>) => {
      state.clientPage = payload;
    },

    setClientItemsPerPage: (state, {payload}: PayloadAction<number>) => {
      state.clientItemsPerPage = payload;
    },

    setClientPageCount: (state, {payload}: PayloadAction<number>) => {
      state.clientPageCount = payload;
    },

    setAgentLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.agentLoading = payload;
    },

    setAgentRequests: (state, {payload}: PayloadAction<AgentRequestItem[]>) => {
      state.agentRequests = payload;
    },

    setAgentPage: (state, {payload}: PayloadAction<number>) => {
      state.agentPage = payload;
    },

    setAgentItemsPerPage: (state, {payload}: PayloadAction<number>) => {
      state.agentItemsPerPage = payload;
    },

    setAgentPageCount: (state, {payload}: PayloadAction<number>) => {
      state.agentPageCount = payload;
    },

    setStatisticsLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.statisticsLoading = payload;
    },

    setStatistics: (state, {payload}: PayloadAction<UserStatisticsInfo[]>) => {
      state.statistics = payload;
    },
  },
});

export const {
  setLoading,
  setUsers,
  setSubUsers,
  setPage,
  setSingleUser,
  setSubUsersLoading,
  setItemsPerPage,
  setPageCount,
  setSubPage,
  setSubItemsPerPage,
  setSubPageCount,
  setUserRoutesLoading,
  setUserRoutes,
  setClientLoading,
  setClientRequests,
  setClientPage,
  setClientItemsPerPage,
  setClientPageCount,
  setAgentLoading,
  setAgentRequests,
  setAgentPage,
  setAgentItemsPerPage,
  setAgentPageCount,
  toggleUserTrusted,
  toggleUserEuForwarder,
  setSelectedUserRole,
  setStatisticsLoading,
  setStatistics,
} = slice.actions;

export default slice.reducer;

export const getLoading = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.loading
);
export const getUsers = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.users
);
export const getSingleUser = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.singleUser
);
export const getSubUsersLoading = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.subUsersLoading
);
export const getSubUsers = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.subUsers
);

export const getPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.page
);

export const getItemsPerPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.itemsPerPage
);

export const getPageCount = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.pageCount
);
export const getSubPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.subPage
);

export const getSubItemsPerPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.subItemsPerPage
);

export const getSubPageCount = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.subPageCount
);
export const getRoutesLoading = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.routesLoading
);
export const getRoutes = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.userRoute
);

export const getRoutesPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.routesPage
);

export const getRoutesItemsPerPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.routesItemsPerPage
);

export const getRoutesPageCount = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.routesPageCount
);

export const getSelectedRoute = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.selectedRoute
);

export const getSelectedRouteRole = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.selectedRouteRole
);
export const getClientLoading = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.clientLoading
);
export const getClientRequests = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.clientRequests
);
export const getClientPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.clientPage
);

export const getClientItemsPerPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.clientItemsPerPage
);

export const getClientPageCount = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.clientPageCount
);

export const getAgentLoading = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.agentLoading
);
export const getAgentRequests = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.agentRequests
);
export const getAgentPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.agentPage
);

export const getAgentItemsPerPage = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.agentItemsPerPage
);

export const getAgentPageCount = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.agentPageCount
);

export const getStatisticsLoading = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.statisticsLoading
);
export const getStatistics = createSelector(
  (state: AppState) => state.usersState,
  (state) => state.statistics
);
