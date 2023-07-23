import { intlFormat } from 'date-fns';

export function getWeekday(dateString: string) {
  return intlFormat(
    new Date(dateString),
    { weekday: 'long' },
    { locale: 'pl-PL' }
  );
}
