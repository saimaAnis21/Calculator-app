import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../index.css';

function App() {
  const answer = 0;
  return (
    <>
      <div className="app">
        <Display result={answer} />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;
