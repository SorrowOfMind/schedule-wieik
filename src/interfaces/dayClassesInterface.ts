export interface ClassInterface {
  title: string;
  type: string;
  group: string | null;
  lecturer: string;
  room: string;
  start: string;
  end: string;
}

export interface DayClassesInterface {
  date: string;
  classes: ClassInterface[];
}
