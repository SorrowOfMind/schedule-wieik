import { HrsEndConfig, HrsStartConfig } from '../common/configs/HrsConfig';
import { ClassTypeBg } from '../common/configs/TagsConfig';
import { FULL_TYPE } from '../constants';
import { ClassInterface } from '../interfaces/dayClassesInterface';

interface ClassBlockProps {
  classData: ClassInterface;
}

const ClassBlock = ({ classData }: ClassBlockProps) => {
  const { title, lecturer, room, start, end, type, group } = classData;
  return (
    <div
      className={`md:row-auto ${
        HrsStartConfig[start as keyof typeof HrsStartConfig]
      } ${
        HrsEndConfig[end as keyof typeof HrsEndConfig]
      } shadow p-2 md:p-3 bg-white border border-standardGrey flex flex-col justify-between`}
    >
      <div>
        <p className="text-[#2aa7ff] font-bold text-lg md:text-xl">{title}</p>
        <p className="text-darkGrey font-bold text-base md:text-xl">
          {lecturer}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-end items-end md:flex-row md:justify-between mt-4">
        <div className="flex flex-row gap-2">
          <div className="border border-darkGrey w-max px-2 py-1 rounded-lg font-semibold">
            {room}
          </div>
          {group && (
            <div className="bg-darkGrey text-white w-max px-2 py-1 rounded-lg font-bold">
              {group}
            </div>
          )}
        </div>
        <div
          className={`${ClassTypeBg[type]} tag text-white font-bold text-lg`}
        >
          {FULL_TYPE[type]}
        </div>
      </div>
    </div>
  );
};

export default ClassBlock;
