import { startOfWeek, endOfWeek } from 'date-fns';

export const getCurrentWeekend = () => {
  const currentData = new Date();
  const start = startOfWeek(currentData, { weekStartsOn: 1 });
  const end = endOfWeek(currentData, { weekStartsOn: 1 });
  return [start, end];
};
