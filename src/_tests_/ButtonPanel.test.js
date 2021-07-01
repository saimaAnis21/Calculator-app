import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

describe('ButtonPanel renders correctly', () => {
  const test = () => { };

  it('renders correctly', () => {
    const tree = renderer
      .create(<ButtonPanel clickHandler={test} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
