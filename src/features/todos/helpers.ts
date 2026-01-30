import {format, Locale} from 'date-fns';
import {cs} from 'date-fns/locale';

export const formatLocalDate = (input: Date | string, locale: Locale = cs): string => {
  const date = typeof input === 'string' ? new Date(input) : input;

  return format(date, 'd. M. yyyy', {locale});
};
