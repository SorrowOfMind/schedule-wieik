import FlexContainer from './common/components/FlexContainer';
import Select from './common/components/Select';
import DayBlock from './components/DayBlock';
import jsonData from './data/data.json';
import { DayClassesInterface } from './interfaces/dayClassesInterface';

const data: DayClassesInterface[] = jsonData as DayClassesInterface[];

function App() {
  const opt = [{ value: 'lab', label: 'lab' }];

  return (
    <div className="container pt-2">
      <div>
        <Select options={opt} />
      </div>
      <FlexContainer>
        {data.length > 1 &&
          data.map((dayData, idx) => <DayBlock key={idx} dayData={dayData} />)}
      </FlexContainer>
    </div>
  );
}

export default App;
