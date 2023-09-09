import GridContainer from '../common/components/GridContainer';
import { HOURS } from '../constants';
import GridConfig from '../common/configs/GridConfig';

const Timeline = () => {
  return (
    <GridContainer options={GridConfig.timeline}>
      {HOURS.map((hrBlock, idx) => (
        <div
          key={idx}
          className="border border-standardGrey text-lg font-bold p-2 md:px-2 bg-white flex flex-row md:flex-wrap justify-center md:justify-between items-center"
        >
          <p>{hrBlock.start}</p>
          <p>&nbsp;-&nbsp;</p>
          <p>{hrBlock.end}</p>
        </div>
      ))}
    </GridContainer>
  );
};

export default Timeline;
