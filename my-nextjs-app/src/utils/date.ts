import {format} from 'date-fns';

export const parseDate = (date: Date, style: 'hyphen' | 'slash') => {
  try {
    return style === 'hyphen'
      ? format(date, 'yyyy-MM-dd')
      : format(date, 'dd/MM/yyyy');
  } catch (err) {
    return 'Invalid Date';
  }
};
