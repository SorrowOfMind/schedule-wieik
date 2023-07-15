import {
  DATE_SEPARATOR,
  WEEKDAY,
  DATE_DAY_IDX,
  DATE_MONTH_IDX,
  DATE_YEAR_IDX,
} from '../../constants';

export function getWeekday(dateString: string) {
  const dateParts = dateString.split(DATE_SEPARATOR);
  const date = new Date(
    +dateParts[DATE_YEAR_IDX],
    +dateParts[DATE_MONTH_IDX] - 1,
    +dateParts[DATE_DAY_IDX]
  );
  const day = date.getDay();
  return WEEKDAY[day];
}
