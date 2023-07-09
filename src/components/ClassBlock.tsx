import { HrsEndConfig, HrsStartConfig } from '../common/configs/HrsConfig';
import { ClassInterface } from '../interfaces/dayClassesInterface';

interface ClassBlockProps {
  classData: ClassInterface;
}

const ClassBlock = ({ classData }: ClassBlockProps) => {
  const { title, type, group, lecturer, room, start, end } = classData;
  return (
    <div
      className={`md:row-auto ${
        HrsStartConfig[start as keyof typeof HrsStartConfig]
      } ${HrsEndConfig[end as keyof typeof HrsEndConfig]} border`}
    >
      <p>{title}</p>
      <p>{lecturer}</p>
      <p>{room}</p>
      <p>{type}</p>
      <p>{group ?? 'brak'}</p>
    </div>
  );
};

export default ClassBlock;
