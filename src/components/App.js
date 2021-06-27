import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './styles.css';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: '0',
    next: '0',
    operation: '',
  });

  const handleClick = (buttonName) => {
    const dataset = calculate(state, buttonName);
    const { total, next, operation } = dataset;
    setState({
      total,
      next,
      operation,
    });
  };

  const { total } = state;
  return (
    <>
      <div>
        <Link to="/"> Home </Link>
        {' '}
        |
        {' '}
        <Link to="/App"> Calculator </Link>
        {' '}
        |
        {' '}
        <Link to="/Quote"> Quote </Link>
      </div>
      <div className="pt-50 m-auto w-700 d-flex flex-col">
        <Display result={total} />
        <ButtonPanel clickHandler={handleClick} />

      </div>

    </>
  );
};

export default App;
