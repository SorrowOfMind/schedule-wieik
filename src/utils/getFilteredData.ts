import { DayClassesInterface } from '../interfaces/dayClassesInterface';

export const getFilteredData = (
  data: DayClassesInterface[],
  options: string[],
  showLectures: boolean
) => {
  return data.reduce((acc, val) => {
    const newObj = {
      date: val.date,
      classes: val.classes.filter((c) => {
        if (showLectures) {
          return options.includes(c.group.toUpperCase()) || c.type === 'w';
        }
        return options.includes(c.group.toUpperCase());
      }),
    };
    if (newObj.classes.length > 0) {
      acc.push(newObj);
    }

    return acc;
  }, [] as DayClassesInterface[]);
};
