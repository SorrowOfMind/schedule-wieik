import FlexContainer from './common/components/FlexContainer';
import DayBlock from './components/DayBlock';
import jsonData from './data/data.json';
import { DayClassesInterface } from './interfaces/dayClassesInterface';

const data: DayClassesInterface[] = jsonData as DayClassesInterface[];

function App() {
  return (
    <div className="container pt-2">
      <FlexContainer>
        {data.length > 1 &&
          data.map((dayData, idx) => <DayBlock key={idx} dayData={dayData} />)}
      </FlexContainer>
    </div>
  );
}

export default App;
