import { useEffect } from 'react';
import FlexContainer from './common/components/FlexContainer';
import DayBlock from './components/DayBlock';
import data from './data/data.json';

function App() {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="container">
      <FlexContainer>
        {data.length > 1 &&
          data.map((dayData, idx) => <DayBlock key={idx} dayData={dayData} />)}
      </FlexContainer>
    </div>
  );
}

export default App;
