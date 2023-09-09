interface ClassInterface {
  id: number;
  title: string;
  lecturer: string;
  room: string;
  start: string;
  end: string;
  type: ClassType;
  group: Group;
  duration: number;
}

interface DayClassesInterface {
  date: string;
  classes: ClassInterface[];
}

enum ClassType {
  Lecture = 'w',
  Laboratory = 'l',
  CompLaboratory = 'lk',
  Project = 'p',
}

type Group =
  | 'p1'
  | 'p2'
  | 'p3'
  | 'lk1'
  | 'lk2'
  | 'lk3'
  | 'l1'
  | 'l2'
  | 'l3'
  | 'l4';

export type { ClassInterface, DayClassesInterface };
