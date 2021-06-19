import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../index.css';
import calculate from '../logic/calculate';

function App() {
  const answer = 0;
  const calculator = {
    total: '0',
    next: '0',
    operation: '+/-',
  };

  return (
    <>
      <div className="app">
        <Display result={answer} />
        <ButtonPanel />
        {calculate(calculator)}
      </div>
    </>
  );
}

export default App;
