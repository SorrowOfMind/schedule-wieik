import FlexContainer from './common/components/FlexContainer';
import Select from './common/components/Select';
import DayBlock from './components/DayBlock';
import jsonData from './data/data.json';
import useLC from './hooks/useLC';
import { DayClassesInterface } from './interfaces/dayClassesInterface';
import { getFilteredData } from './utils/getFilteredData';

const rawData: DayClassesInterface[] = jsonData as DayClassesInterface[];

function App() {
  const [selectedOptions, setSelectedOptions] = useLC<string[]>(
    'iwik_group_filter',
    []
  );
  const [showLectures, setShowLectures] = useLC<boolean>('iwik_lectures', true);

  const filteredData =
    selectedOptions.length > 0
      ? getFilteredData(rawData, selectedOptions, showLectures)
      : rawData;

  return (
    <div className="container pt-2">
      <div className="topbar">
        <Select
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
        />
      </div>
      <FlexContainer>
        {filteredData.map((dayData, idx) => (
          <DayBlock key={idx} dayData={dayData} />
        ))}
      </FlexContainer>
    </div>
  );
}

export default App;
