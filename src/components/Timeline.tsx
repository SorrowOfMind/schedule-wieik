import GridContainer from '../common/components/GridContainer';
import { HOURS } from '../constants';
import GridConfig from '../common/configs/GridConfig';

const Timeline = () => {
  return (
    <GridContainer options={GridConfig.timeline}>
      {HOURS.map((hrBlock, idx) => (
        <div key={idx} className="border text-center p-2">
          {hrBlock}
        </div>
      ))}
    </GridContainer>
  );
};

export default Timeline;
