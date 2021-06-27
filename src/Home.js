import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1> Welcome to our page!</h1>
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
      https://math-magicians A Web PageMath MagiciansLorem ipsum dolor sit amet,
      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui o!cia deserunt mollit anim id est laborum. IpsuLorem ipsum dolor sit amet, c
      onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
    </p>
  </div>
);

export default Home;
