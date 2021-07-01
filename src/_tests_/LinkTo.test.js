import React from 'react';
import renderer from 'react-test-renderer';
import LinkTo from '../LinkTo';

describe('renders LinkTo correctly', () => {
  it('renders Home link correctly', () => {
    const tree = renderer
      .create(<LinkTo name="Home" path="/" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Calculator link correctly', () => {
    const tree = renderer
      .create(<LinkTo name="Calculator" path="/App" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Quote link correctly', () => {
    const tree = renderer
      .create(<LinkTo name="Quote" path="/Quote" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
