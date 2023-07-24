import { isAfter, isBefore, isEqual, parseISO } from 'date-fns';
import { DayClassesInterface } from '../interfaces/dayClassesInterface';
import { getCurrentWeekend } from './getCurrentWeekend';

export const getFilteredData = (
  data: DayClassesInterface[],
  options: string[],
  showCurrentWeekend: boolean
) => {
  console.log('filter data');
  let filteredData = [...data];
  if (showCurrentWeekend) {
    const [start, end] = getCurrentWeekend();
    filteredData = filteredData.filter((day) => {
      const date = parseISO(day.date);
      return (
        isAfter(date, start) && (isBefore(date, end) || isEqual(date, end))
      );
    });
  }

  if (options.length < 1) return filteredData;

  return filteredData.reduce((acc, val) => {
    const newObj = {
      date: val.date,
      classes: val.classes.filter(
        (c) => options.includes(c.group.toUpperCase()) || c.type === 'w'
      ),
    };
    if (newObj.classes.length > 0) {
      acc.push(newObj);
    }

    return acc;
  }, [] as DayClassesInterface[]);
};
