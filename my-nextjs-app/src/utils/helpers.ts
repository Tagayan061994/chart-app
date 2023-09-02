import type {Location, Currency, Unit} from '@/store/slices/search';
import type {Colors} from '@/utils/colors';
import type {TGood} from '@/store/slices/SetUp/goods';

import {
  ClientRequestStatuses,
  AgentRequestStatuses,
  SearchTypes,
  AdditionalServices,
} from '@/consts';
import {
  mdiRadioboxMarked,
  mdiCheck,
  mdiCancel,
  mdiClockTimeEight,
  mdiAirplaneCheck,
  mdiAirplaneClock,
  mdiChevronDownCircle,
} from '@mdi/js';

export const getLocationText = (location: Location | string) => {
  if (typeof location !== 'string') {
    return `${location.city}, ${location.country}`;
  }

  return location;
};

export const formatCurrency = (value: number | string, currency: Currency) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  return formatter
    .format(+value)
    .replace(/^([\d,.]+)/, '$1 ')
    .replace(/([\d,.]+)$/, ' $1');
};

export const getUnitsLength = (units: Unit[]) => {
  let length = 0;
  units.forEach((unit) => (length += unit.count));
  return length;
};

export const getClientStatusText = (status: ClientRequestStatuses) => {
  switch (status) {
    case ClientRequestStatuses.NEW:
      return 'New';
    case ClientRequestStatuses.IN_PROGRESS:
      return 'In Progress';
    case ClientRequestStatuses.COMPLETED:
      return 'Completed';
    case ClientRequestStatuses.CANCELED:
      return 'Canceled';
    case ClientRequestStatuses.CANCELED_BY_AGENT:
      return 'Canceled by agent';
    case ClientRequestStatuses.REJECTED:
      return 'Rejected';
    default:
      return '';
  }
};

export const getClientStatusIcon = (status: ClientRequestStatuses) => {
  switch (status) {
    case ClientRequestStatuses.NEW:
      return mdiRadioboxMarked;
    case ClientRequestStatuses.IN_PROGRESS:
      return mdiAirplaneClock;
    case ClientRequestStatuses.COMPLETED:
      return mdiAirplaneCheck;
    case ClientRequestStatuses.CANCELED:
      return mdiCancel;
    case ClientRequestStatuses.CANCELED_BY_AGENT:
      return mdiCancel;
    case ClientRequestStatuses.REJECTED:
      return mdiCancel;
    default:
      return '';
  }
};

export const getClientStatusColor = (
  status: ClientRequestStatuses
): keyof Colors => {
  switch (status) {
    case ClientRequestStatuses.NEW:
      return 'primary';
    case ClientRequestStatuses.IN_PROGRESS:
      return 'warning';
    case ClientRequestStatuses.COMPLETED:
      return 'primary';
    case ClientRequestStatuses.CANCELED:
      return 'error';
    case ClientRequestStatuses.CANCELED_BY_AGENT:
      return 'error';
    case ClientRequestStatuses.REJECTED:
      return 'error';

    default:
      return 'primary';
  }
};

export const getAgentStatusText = (status: AgentRequestStatuses) => {
  switch (status) {
    case AgentRequestStatuses.NEW:
      return 'New';
    case AgentRequestStatuses.CONFIRMED:
      return 'Confirmed';
    case AgentRequestStatuses.REJECTED:
      return 'Rejected';
    case AgentRequestStatuses.PENDING:
      return 'Pending';
    case AgentRequestStatuses.COMPLETED:
      return 'Completed';
    case AgentRequestStatuses.CANCELED_BY_CLIENT:
      return 'Canceled by client';
    case AgentRequestStatuses.CANCELED_BY_AGENT:
      return 'Canceled by agent';
    default:
      return '';
  }
};

export const getAgentStatusIcon = (status: AgentRequestStatuses) => {
  switch (status) {
    case AgentRequestStatuses.NEW:
      return mdiRadioboxMarked;
    case AgentRequestStatuses.CONFIRMED:
      return mdiCheck;
    case AgentRequestStatuses.REJECTED:
      return mdiCancel;
    case AgentRequestStatuses.PENDING:
      return mdiClockTimeEight;
    case AgentRequestStatuses.COMPLETED:
      return mdiAirplaneCheck;
    case AgentRequestStatuses.CANCELED_BY_CLIENT:
      return mdiCancel;
    case AgentRequestStatuses.CANCELED_BY_AGENT:
      return mdiCancel;
    default:
      return '';
  }
};

export const getAgentStatusColor = (
  status: AgentRequestStatuses
): keyof Colors => {
  switch (status) {
    case AgentRequestStatuses.NEW:
      return 'primary';
    case AgentRequestStatuses.CONFIRMED:
      return 'primary';
    case AgentRequestStatuses.REJECTED:
      return 'error';
    case AgentRequestStatuses.PENDING:
      return 'warning';
    case AgentRequestStatuses.COMPLETED:
      return 'primary';
    case AgentRequestStatuses.CANCELED_BY_CLIENT:
      return 'error';
    case AgentRequestStatuses.CANCELED_BY_AGENT:
      return 'error';
    default:
      return 'primary';
  }
};

export const getQuoteStatusText = (status: AgentRequestStatuses) => {
  switch (status) {
    case AgentRequestStatuses.NEW:
      return 'Pending Request';
    case AgentRequestStatuses.CONFIRMED:
      return 'Confirmed Request';
    case AgentRequestStatuses.REJECTED:
      return 'Rejected Request';
    case AgentRequestStatuses.PENDING:
      return 'see more';
    case AgentRequestStatuses.COMPLETED:
      return 'Completed Request';
    case AgentRequestStatuses.CANCELED_BY_CLIENT:
      return 'Canceled by You';
    case AgentRequestStatuses.CANCELED_BY_AGENT:
      return 'Canceled by You';
    default:
      return '';
  }
};

export const getQuoteStatusIcon = (status: AgentRequestStatuses) => {
  switch (status) {
    case AgentRequestStatuses.NEW:
      return mdiClockTimeEight;
    case AgentRequestStatuses.CONFIRMED:
      return mdiCheck;
    case AgentRequestStatuses.REJECTED:
      return mdiCancel;
    case AgentRequestStatuses.PENDING:
      return mdiChevronDownCircle;
    case AgentRequestStatuses.COMPLETED:
      return mdiAirplaneCheck;
    case AgentRequestStatuses.CANCELED_BY_CLIENT:
      return mdiCancel;
    case AgentRequestStatuses.CANCELED_BY_AGENT:
      return mdiCancel;
    default:
      return '';
  }
};

export const getQuoteStatusColor = (
  status: AgentRequestStatuses
): keyof Colors => {
  switch (status) {
    case AgentRequestStatuses.NEW:
      return 'warning';
    case AgentRequestStatuses.CONFIRMED:
      return 'primary';
    case AgentRequestStatuses.REJECTED:
      return 'error';
    case AgentRequestStatuses.PENDING:
      return 'light-green';
    case AgentRequestStatuses.COMPLETED:
      return 'primary';
    case AgentRequestStatuses.CANCELED_BY_CLIENT:
      return 'error';
    case AgentRequestStatuses.CANCELED_BY_AGENT:
      return 'error';
    default:
      return 'primary';
  }
};

export const getPriorityText = (prio: SearchTypes) => {
  switch (prio) {
    case SearchTypes.TRUSTED:
      return 'Trusted Agents';
    case SearchTypes.CHEAPEST:
      return 'Cheapest Route';
    case SearchTypes.FASTEST_REPLY:
      return 'Fastest Reply';
    case SearchTypes.FASTEST_DELIVERY:
      return 'Fastest Delivery';
    default:
      return '';
  }
};

export const getSortPriorityText = (prio: SearchTypes) => {
  switch (prio) {
    case SearchTypes.TRUSTED:
      return 'Trusted Agents';
    case SearchTypes.CHEAPEST:
      return 'Cheapest Routes';
    case SearchTypes.FASTEST_REPLY:
      return 'Fastest Replying Agents';
    case SearchTypes.FASTEST_DELIVERY:
      return 'Fastest Delivering Agents';
    default:
      return '';
  }
};

export const getGoodIcon = (id: string, goods: TGood[]) =>
  goods.find((good) => good.id === id)?.icon || '';

export const getGoodName = (id: string, goods: TGood[]) =>
  goods.find((good) => good.id === id)?.name || '';

export const getAdditionalServiceLabel = (service: AdditionalServices) => {
  switch (service) {
    case AdditionalServices.CUSTOM_CLEARANCE:
      return 'Custom Clearence';
    case AdditionalServices.INSURANCE:
      return 'Insurance';
    case AdditionalServices.PICK_UP:
      return 'Delivery to Airport';
    case AdditionalServices.DROP_OFF:
      return 'Delivery to Address';
    default:
      return '';
  }
};
