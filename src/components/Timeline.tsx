import GridContainer from '../common/components/GridContainer';
import { HOURS2 } from '../constants';
import GridConfig from '../common/configs/GridConfig';

const Timeline = () => {
  return (
    <GridContainer options={GridConfig.timeline}>
      {HOURS2.map((hrBlock, idx) => (
        <div
          key={idx}
          className="border border-standardGrey min-w-max text-md font-bold px-2 py-3 md:p-2 bg-white flex flex-row justify-center md:justify-between md:flex-col"
        >
          <span>{hrBlock.start}</span>
          <span className="md:hidden">&nbsp;-&nbsp;</span>
          <span className="md:self-end">{hrBlock.end}</span>
        </div>
      ))}
    </GridContainer>
  );
};

export default Timeline;
