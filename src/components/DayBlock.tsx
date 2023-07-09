import { DayClassesInterface } from '../interfaces/dayClassesInterface';
import GridContainer from '../common/components/GridContainer';
import GridConfig from '../common/configs/GridConfig';
import Timeline from './Timeline';
import ClassBlock from './ClassBlock';

interface DayBlockProps {
  dayData: DayClassesInterface;
}

const DayBlock = ({ dayData }: DayBlockProps) => {
  const { date, classes } = dayData;
  return (
    <div className="xl:basis-1/2 basis-full p-1 flex flex-col">
      <div className="bg-[#f21da0]">{date}</div>
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
