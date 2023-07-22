const DATE_SEPARATOR = '.';
const DATE_DAY_IDX = 0;
const DATE_MONTH_IDX = 1;
const DATE_YEAR_IDX = 2;

const HOURS = [
  '8:15 - 9:00',
  '9:00 - 9:45',
  '10:00 - 10:45',
  '10:45 - 11:30',
  '11:45 - 12:30',
  '12:30 - 13:15',
  '13:30 - 14:15',
  '14:15 - 15:00',
  '15:15 - 16:00',
  '16:00 - 16:45',
  '17:00 - 17:45',
  '17:45 - 18:30',
  '18:45 - 19:30',
  '19:30 - 20:15',
];

const HOURS2 = [
  { start: '8:15', end: '9:00' },
  { start: '9:00', end: '9:45' },
  { start: '10:00', end: '10:45' },
  { start: '10:45', end: '11:30' },
  { start: '11:45', end: '12:30' },
  { start: '12:30', end: '13:15' },
  { start: '13:30', end: '14:15' },
  { start: '14:15', end: '15:00' },
  { start: '15:15', end: '16:00' },
  { start: '16:00', end: '16:45' },
  { start: '17:00', end: '17:45' },
  { start: '17:45', end: '18:30' },
  { start: '18:45', end: '19:30' },
  { start: '19:30', end: '20:15' },
];

const WEEKDAY = [
  'Niedziela',
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
];

const FULL_TYPE = {
  w: 'WYKŁAD',
  l: 'LAB',
  lk: 'LAB KOMP',
  p: 'PROJEKT',
};

const GROUPS_OPTIONS = [
  { name: 'Lab. komp.', options: ['LK1', 'LK2', 'LK3'] },
  { name: 'Laboratoria', options: ['L1', 'L2', 'L3', 'L4'] },
  { name: 'Projekt', options: ['P1', 'P2', 'P3'] },
] as const;

export {
  HOURS2,
  DATE_SEPARATOR,
  WEEKDAY,
  DATE_DAY_IDX,
  DATE_MONTH_IDX,
  DATE_YEAR_IDX,
  FULL_TYPE,
  GROUPS_OPTIONS,
};
