import { format } from 'date-fns';
import { DayClassesInterface } from '../interfaces/dayClassesInterface';
import GridContainer from '../common/components/GridContainer';
import GridConfig from '../common/configs/GridConfig';
import Timeline from './Timeline';
import ClassBlock from './ClassBlock';
import { getWeekday } from '../common/utils/getWeekday';

interface DayBlockProps {
  dayData: DayClassesInterface;
}

const DayBlock = ({ dayData }: DayBlockProps) => {
  const { date, classes } = dayData;
  return (
    <div className="2xl:basis-1/2 basis-full flex flex-col md:px-2 overflow-hidden">
      <div className="text-xl font-bold p-2">
        {format(new Date(date), 'd.MM.yyy')} {getWeekday(date).toUpperCase()}
      </div>
      <div className="flex flex-row md:flex-col">
        <Timeline />
        <GridContainer options={GridConfig.classes}>
          {classes.map((classData, idx) => (
            <ClassBlock classData={classData} key={idx} />
          ))}
        </GridContainer>
      </div>
    </div>
  );
};

export default DayBlock;
