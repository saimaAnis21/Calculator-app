import React from 'react';
import LinkTo from './LinkTo';

const NavBar = () => (
  <nav className="">
    <h1>Math Magicians</h1>
    <div>
      <LinkTo name="Home" path="/" />
      {' '}
      |
      <LinkTo name="Calculator" path="/App" />
      {' '}
      |
      <LinkTo name="Quote" path="/Quote" />
    </div>
  </nav>
);

export default NavBar;
