import React from 'react';
import { Link } from 'react-router-dom';

const Quote = () => (
  <div>
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
    <p>
      Mathematics is not about numbers, equations, computations, or algorithms: it is about
      understanding. –William Paul Thurston
    </p>
  </div>
);

export default Quote;
