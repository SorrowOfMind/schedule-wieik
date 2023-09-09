const HOURS = [
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
] as const;

const GROUPS_OPTIONS = [
  { name: 'Lab. komputerowe', options: ['LK1', 'LK2', 'LK3'] },
  { name: 'Lab. sprzętowe', options: ['L1', 'L2', 'L3', 'L4'] },
  { name: 'Projekt', options: ['P1', 'P2', 'P3'] },
] as const;

export { HOURS, WEEKDAY, GROUPS_OPTIONS };
